import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import {
  AddUserDetailsDTO,
  ChangePasswordDTO,
  UpdateUserDetailsDTO,
} from './dto/user.dto';
import { S3Service } from 'src/common/s3.service';
import * as bcrypt from 'bcrypt';
import { isFloat64Array } from 'node:util/types';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly s3Service: S3Service,
  ) {}
  async addUserDetails(
    addUserDetailsDto: AddUserDetailsDTO,
    userId: string,
    profileImage?: Express.Multer.File[] | null,
    galleryImages?: Express.Multer.File[] | null,
  ) {
    try {
      let profileImageUrl: string | null = null;
      let galleryImagesUrl: string[] = [];
      console;
      // Upload profile image if provided
      console.log('profileImage-->', profileImage);
      if (profileImage && profileImage.length > 0) {
        const data = await this.s3Service.uploadFile(
          profileImage[0],
          `${addUserDetailsDto.fullName}_profile`,
        );
        console.log('data--->', data);
        profileImageUrl = data.url;
      }

      // Upload gallery images if provided
      if (galleryImages && galleryImages.length > 0) {
        galleryImagesUrl = await Promise.all(
          galleryImages.map(async (file, index) => {
            const data = await this.s3Service.uploadFile(
              file,
              `${addUserDetailsDto.fullName}_gallery_${index}`,
            );
            return data.url;
          }),
        );
      }

      // Save user details with image URLs to DB (optional)
      const newUser = await this.userModel.findByIdAndUpdate(
        userId,
        {
          ...addUserDetailsDto,
          profileImage: profileImageUrl,
          galleryImages: galleryImagesUrl,
          isProfileCompleted: true,
        },
        { new: true },
      );

      return newUser;
    } catch (error) {
      console.log('error-->', error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async getUserDetails(userId: string): Promise<User | null> {
    try {
      return this.userModel.findById(userId).select('+password').exec();
    } catch (error) {
      console.log('error-->', error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async changePassword(changePasswordDto: ChangePasswordDTO, userId: string) {
    try {
      const user = await this.userModel.findById(userId);
      const isMatch = await bcrypt.compare(
        changePasswordDto.oldPassword,
        user?.password,
      );
      if (!isMatch) {
        throw new UnauthorizedException('Old password is incorrect');
      }
      const hashedPassword = await bcrypt.hash(
        changePasswordDto.newPassword,
        10,
      );

      await this.userModel.findByIdAndUpdate(
        userId,
        { password: hashedPassword },
        { new: true },
      );
      return {
        message: 'Password update',
      };
    } catch (error) {
      console.log('error-->', error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async updateUserDetails(
    updateUserDetailsDto: UpdateUserDetailsDTO,
    userId: string,
  ) {
    try {
      let updatedUser = await this.userModel.findByIdAndUpdate(
        userId,
        {
          ...updateUserDetailsDto,
        },
        {
          new: true,
        },
      );
      return updatedUser;
    } catch (error) {
      console.log('error-->', error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async updateUserProfilePic(
    profileImage: Express.Multer.File,
    userId: string,
  ) {
    try {
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const profileImageKey = await this.s3Service.getS3KeyFromUrl(
        user.profileImage,
      );
      await this.s3Service.updateFile(profileImageKey, profileImage);

      return { msg: 'Profile Image updated' };
    } catch (error) {
      console.log('error-->', error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async deleteUserProfilePic(userId: string) {
    try {
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const key = await this.s3Service.getS3KeyFromUrl(user.profileImage);
      await this.s3Service.deleteFile(key);
      await this.userModel.findByIdAndUpdate(userId, {
        profileImage: null,
      });
      return { msg: 'profile image deleted successfully' };
    } catch (error) {
      console.log('error-->', error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
