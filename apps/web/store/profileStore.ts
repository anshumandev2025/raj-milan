import { create } from "zustand";

type ProfileData = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  height: string;
  educationLevel: string;
  degreeOrSpecialialization: string;
  jobTitleOrDesignation: string;
  companyOrOrganization: string;
  anualIncome: string;
  dietPreference: string;
  smokingHabit: string;
  drinkingHabit: string;
  aboutHobbyOrInterset: string;
  fatherOccupation: string;
  motherOccupation: string;
  siblingsCount: string;
  familyType: string;
  aboutFamilyBackground: string;
  partnerPreferedMinAge: string;
  partnerPreferedMaxAge: string;
  partnerPreferedMinHeight: string;
  partnerPreferedMaxHeight: string;
  partnerPreferedSubCast: string;
  partnerPreferedCity: string;
  partnerPreferedEducationLevel: string;
  partnerPreferedProfession: string;
  partnerAdditionalPreference: string;
  profileImage: any;
  galleryImages: any;
};

type ProfileStore = {
  profileData: ProfileData;
  updateProfile: (fields: Partial<ProfileData>) => void;
  reset: () => void;
};

const initialData: ProfileData = {
  fullName: "",
  gender: "",
  dateOfBirth: "",
  height: "",
  educationLevel: "",
  degreeOrSpecialialization: "",
  jobTitleOrDesignation: "",
  companyOrOrganization: "",
  anualIncome: "",
  dietPreference: "",
  smokingHabit: "",
  drinkingHabit: "",
  aboutHobbyOrInterset: "",
  fatherOccupation: "",
  motherOccupation: "",
  siblingsCount: "",
  familyType: "",
  aboutFamilyBackground: "",
  partnerPreferedMinAge: "",
  partnerPreferedMaxAge: "",
  partnerPreferedMinHeight: "",
  partnerPreferedMaxHeight: "",
  partnerPreferedSubCast: "",
  partnerPreferedCity: "",
  partnerPreferedEducationLevel: "",
  partnerPreferedProfession: "",
  partnerAdditionalPreference: "",
  profileImage: null,
  galleryImages: null,
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profileData: initialData,
  updateProfile: (fields) =>
    set((state) => ({
      profileData: {
        ...state.profileData,
        ...fields,
      },
    })),
  reset: () => set(() => ({ profileData: initialData })),
}));
