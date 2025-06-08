"use client";
import React, { useState } from "react";
import { Steps, Button, Form, message } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import StepBasicInfo from "@/components/profileSetup/StepBasicInfo";
import StepEducation from "@/components/profileSetup/StepEducation";
import StepLifestyle from "@/components/profileSetup/StepLifestyle";
import StepFamily from "@/components/profileSetup/StepFamily";
import StepPreferences from "@/components/profileSetup/StepPreferences";
import UploadImages from "@/components/profileSetup/UploadImages";
import Footer from "@/components/Footer";
import { useProfileStore } from "@/store/profileStore";
import apiClient from "@/utils/apiClient";
import { useRouter } from "next/navigation";

const Page = () => {
  const [current, setCurrent] = useState(0);
  const { updateProfile, profileData } = useProfileStore();
  const router = useRouter();
  // Create form instances for each step
  const [basicForm] = Form.useForm();
  const [educationForm] = Form.useForm();
  const [lifestyleForm] = Form.useForm();
  const [familyForm] = Form.useForm();
  const [preferenceForm] = Form.useForm();
  const [uploadImageForm] = Form.useForm();

  const steps = [
    {
      title: "Basic Info",
      content: <StepBasicInfo form={basicForm} />,
      form: basicForm,
    },
    {
      title: "Education",
      content: <StepEducation form={educationForm} />,
      form: educationForm,
    },
    {
      title: "Lifestyle",
      content: <StepLifestyle form={lifestyleForm} />,
      form: lifestyleForm,
    },
    {
      title: "Family",
      content: <StepFamily form={familyForm} />,
      form: familyForm,
    },
    {
      title: "Preferences",
      content: <StepPreferences form={preferenceForm} />,
      form: preferenceForm,
    },
    {
      title: "Upload Images",
      content: <UploadImages form={uploadImageForm} />,
      form: uploadImageForm,
    },
  ];

  const next = async () => {
    const currentStep = steps[current];
    try {
      await currentStep.form.validateFields();
      setCurrent(current + 1);
      window.scrollTo(0, 0);
    } catch (error) {
      message.error("Please complete the required fields before proceeding.");
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    try {
      // Validate all steps
      for (const step of steps) {
        await step.form.validateFields();
      }

      // Gather all values
      const allValues = {
        ...basicForm.getFieldValue(),
        ...educationForm.getFieldValue(),
        ...lifestyleForm.getFieldValue(),
        ...familyForm.getFieldValue(),
        ...preferenceForm.getFieldValue(),
        ...uploadImageForm.getFieldValue(),
      };

      // Convert date to ISO
      if (allValues.dateOfBirth && allValues.dateOfBirth.toISOString) {
        allValues.dateOfBirth = allValues.dateOfBirth.toISOString();
      }

      // Convert to FormData
      const formData = new FormData();

      // Append regular fields
      Object.entries(allValues).forEach(([key, value]) => {
        if (key !== "profileImage" && key !== "galleryImages") {
          formData.append(key, value);
        }
      });

      // Append profile image
      if (allValues.profileImage?.[0]?.originFileObj) {
        formData.append(
          "profileImage",
          allValues.profileImage[0].originFileObj
        );
      }

      // Append gallery images
      if (Array.isArray(allValues.galleryImages)) {
        allValues.galleryImages.forEach((file, index) => {
          if (file.originFileObj) {
            formData.append("galleryImages", file.originFileObj);
          }
        });
      }

      // Make API request
      await apiClient.put("/user/addDetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      message.success("Profile completed successfully!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Submit Error:", error);
      message.error("Please complete the required fields before proceeding.");
    }
  };

  return (
    <div className="min-h-screen pt-10 px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl text-primary font-bold text-center mb-4">
          Complete Your Profile
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Let's set up your profile to help you find your perfect match
        </p>

        <Steps current={current} className="mb-8">
          {steps.map((item) => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="mb-8">{steps[current].content}</div>

        <div className="flex justify-between mb-5">
          <Button
            onClick={prev}
            disabled={current === 0}
            icon={<ArrowLeftOutlined />}
          >
            Back
          </Button>
          {current < steps.length - 1 ? (
            <Button
              className="bg-primary text-white"
              onClick={next}
              icon={<ArrowRightOutlined />}
            >
              Next
            </Button>
          ) : (
            <Button className="bg-primary text-white" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
