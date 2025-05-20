import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ isRequired: true })
  fullName: string;

  @Prop({ isRequired: true })
  gender: string;

  @Prop({ isRequired: true, unique: true })
  emailAddress: string;

  @Prop({ isRequired: true, unique: true })
  mobileNumber: string;

  @Prop({ isRequired: true })
  location: string;

  @Prop({ isRequired: true })
  subCast: string;

  @Prop({ isRequired: true })
  password: string;

  @Prop()
  dataOfBirth: string;

  @Prop()
  height: string;

  @Prop()
  educationLevel: string;

  @Prop()
  degreeOrSpecialialization: string;

  @Prop()
  jobTitleOrDesignation: string;

  @Prop()
  companyOrOrganization: string;

  @Prop()
  anualIncome: string;

  @Prop()
  dietPreference: string;

  @Prop()
  smokingHabit: string;

  @Prop()
  drinkingHabit: string;

  @Prop()
  aboutHobbyOrInterset: string;

  @Prop()
  fatherOccupation: string;

  @Prop()
  motherOccupation: string;

  @Prop()
  siblingsCount: string;

  @Prop()
  familyType: string;

  @Prop()
  familyValues: string;

  @Prop()
  aboutFamilyBackground: string;

  @Prop()
  partnerPreferedMinAge: number;

  @Prop()
  partnerPreferedMaxAge: number;

  @Prop()
  partnerPreferedMinHeight: string;

  @Prop()
  partnerPreferedMaxHeight: string;

  @Prop()
  partnerPreferedSubCast: string;

  @Prop()
  partnerPreferedCity: string;

  @Prop()
  partnerPreferedEducationLevel: string;

  @Prop()
  partnerPreferedProfession: string;

  @Prop()
  partnerAdditionalPreference: string;

  @Prop()
  profileViews: number;

  @Prop({ default: false })
  isProfileCompleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
