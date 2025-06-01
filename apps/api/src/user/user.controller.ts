import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import {
  AddUserDetailsDTO,
  ChangePasswordDTO,
  UpdateUserDetailsDTO,
} from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  async updateUserDetails(
    @Req() req,
    @Body() updateUserDetailsDto: UpdateUserDetailsDTO,
  ) {
    const userId = req.user.id;
    return this.userService.updateUserDetails(updateUserDetailsDto, userId);
  }
  @Get(':userId')
  async getUserDetailsById(@Param('userId') userId: string) {
    return this.userService.getUserDetails(userId);
  }

  @Put('changePassword')
  async changePassword(
    @Req() req,
    @Body() changePasswordDto: ChangePasswordDTO,
  ) {
    const userId = req.user.id;
    return this.userService.changePassword(changePasswordDto, userId);
  }
  @Put('addDetails')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'profileImage', maxCount: 1 },
      { name: 'galleryImages', maxCount: 5 },
    ]),
  )
  async addUserDetails(
    @Req() req,
    @Body() addUserDetailsDto: AddUserDetailsDTO,
    @UploadedFiles()
    files: {
      profileImage?: Express.Multer.File[];
      galleryImages?: Express.Multer.File[];
    },
  ) {
    const userId = req.user.id;
    return this.userService.addUserDetails(
      addUserDetailsDto,
      userId,
      files.profileImage,
      files.galleryImages,
    );
  }

  @Put('profilePic')
  @UseInterceptors(FileInterceptor('profileImage'))
  async updateUserProfilePic(
    @UploadedFile() profileImage: Express.Multer.File,
    @Req() req,
  ) {
    const userId = req.user.id;
    return this.userService.updateUserProfilePic(profileImage, userId);
  }

  @Delete('profilePic')
  async deleteUserProfilePic(@Req() req) {
    const userId = req.user.id;
    return this.userService.deleteUserProfilePic(userId);
  }
}
