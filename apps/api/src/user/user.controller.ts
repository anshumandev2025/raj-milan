import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AddUserDetailsDTO, ChangePasswordDTO } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
}
