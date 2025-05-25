import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { AddUserDetailsDTO, ChangePasswordDTO } from './dto/user.dto';
import { S3Service } from 'src/common/s3.service';
import * as bcrypt from 'bcrypt';

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
    let profileImageUrl: string | null = null;
    let galleryImagesUrl: string[] = [];
    // Upload profile image if provided
    if (profileImage && profileImage.length > 0) {
      const data = await this.s3Service.uploadFile(
        profileImage[0],
        `${addUserDetailsDto.fullName}_profile`,
      );
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
  }

  async getUserDetails(userId: string): Promise<User | null> {
    return this.userModel.findById(userId).select('+password').exec();
  }

  async changePassword(changePasswordDto: ChangePasswordDTO, userId: string) {
    const user = await this.userModel.findById(userId);
    const isMatch = await bcrypt.compare(
      changePasswordDto.oldPassword,
      user?.password,
    );
    if (!isMatch) {
      throw new UnauthorizedException('Old password is incorrect');
    }
    const hashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);

    await this.userModel.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      { new: true },
    );
    return {
      message: 'Password update',
    };
  }
}
