import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class AddUserDetailsDTO {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: string;

  @IsNotEmpty()
  @IsString()
  height: string;

  @IsNotEmpty()
  @IsString()
  educationLevel: string;

  @IsNotEmpty()
  @IsString()
  degreeOrSpecialialization: string;

  @IsNotEmpty()
  @IsString()
  jobTitleOrDesignation: string;

  @IsNotEmpty()
  @IsString()
  dietPreference: string;

  @IsNotEmpty()
  @IsString()
  smokingHabit: string;

  @IsNotEmpty()
  @IsString()
  anualIncome: string;

  @IsNotEmpty()
  @IsString()
  drinkingHabit: string;

  @IsNotEmpty()
  @IsString()
  aboutHobbyOrInterset: string;

  @IsNotEmpty()
  @IsString()
  fatherOccupation: string;

  @IsNotEmpty()
  @IsString()
  motherOccupation: string;

  @IsNotEmpty()
  @IsString()
  siblingsCount: string;

  @IsNotEmpty()
  @IsString()
  familyType: string;

  @IsNotEmpty()
  @IsString()
  familyValues: string;

  @IsNotEmpty()
  @IsString()
  aboutFamilyBackground: string;

  @IsNotEmpty()
  @IsNumberString()
  partnerPreferedMinAge: string;

  @IsNotEmpty()
  @IsNumberString()
  partnerPreferedMaxAge: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedMinHeight: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedMaxHeight: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedSubCast: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedCity: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedEducationLevel: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedProfession: string;

  @IsNotEmpty()
  @IsString()
  partnerAdditionalPreference: string;
}

export class ChangePasswordDTO {
  @IsNotEmpty()
  @IsString()
  oldPassword: string;

  @IsNotEmpty()
  @IsStrongPassword()
  newPassword: string;
}

export class UpdateUserDetailsDTO {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: string;

  @IsNotEmpty()
  @IsString()
  height: string;

  @IsNotEmpty()
  @IsString()
  educationLevel: string;

  @IsNotEmpty()
  @IsString()
  degreeOrSpecialialization: string;

  @IsNotEmpty()
  @IsString()
  jobTitleOrDesignation: string;

  @IsNotEmpty()
  @IsString()
  dietPreference: string;

  @IsNotEmpty()
  @IsString()
  smokingHabit: string;

  @IsNotEmpty()
  @IsString()
  anualIncome: string;

  @IsNotEmpty()
  @IsString()
  drinkingHabit: string;

  @IsNotEmpty()
  @IsString()
  aboutHobbyOrInterset: string;

  @IsNotEmpty()
  @IsString()
  fatherOccupation: string;

  @IsNotEmpty()
  @IsString()
  motherOccupation: string;

  @IsNotEmpty()
  @IsString()
  siblingsCount: string;

  @IsNotEmpty()
  @IsString()
  familyType: string;

  @IsNotEmpty()
  @IsString()
  familyValues: string;

  @IsNotEmpty()
  @IsString()
  aboutFamilyBackground: string;

  @IsNotEmpty()
  @IsNumberString()
  partnerPreferedMinAge: string;

  @IsNotEmpty()
  @IsNumberString()
  partnerPreferedMaxAge: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedMinHeight: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedMaxHeight: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedSubCast: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedCity: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedEducationLevel: string;

  @IsNotEmpty()
  @IsString()
  partnerPreferedProfession: string;

  @IsNotEmpty()
  @IsString()
  partnerAdditionalPreference: string;
}
