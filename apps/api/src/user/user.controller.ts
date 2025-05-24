import {
  Body,
  Controller,
  Put,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AddUserDetailsDTO } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Put('/details')
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
