"use client";
import React, { useState } from "react";
import { Steps, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import StepBasicInfo from "@/components/profileSetup/StepBasicInfo";
import StepEducation from "@/components/profileSetup/StepEducation";
import StepLifestyle from "@/components/profileSetup/StepLifestyle";
import StepFamily from "@/components/profileSetup/StepFamily";
import StepPreferences from "@/components/profileSetup/StepPreferences";
import Footer from "@/components/Footer";

const steps = [
  { title: "Basic Info", content: <StepBasicInfo /> },
  { title: "Education", content: <StepEducation /> },
  { title: "Lifestyle", content: <StepLifestyle /> },
  { title: "Family", content: <StepFamily /> },
  { title: "Preferences", content: <StepPreferences /> },
];

const page = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1);
      window.scrollTo(0, 0);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen pt-10 px-10">
      <div className="max-w-3xl mx-auto">
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
              type="primary"
              className="bg-primary"
              onClick={next}
              icon={<ArrowRightOutlined />}
            >
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              className="bg-primary"
              onClick={() => alert("Form Submitted!")}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
