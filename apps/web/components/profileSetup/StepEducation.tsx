"use client";
import React from "react";
import { Form, Input, Select } from "antd";
import {
  educationLevelsConstant,
  incomeRangesConstant,
} from "@/constants/dataConstant";

const { Option } = Select;

const StepEducation = ({ form }: { form: any }) => {
  return (
    <Form layout="vertical" form={form}>
      {/* Education Level */}
      <Form.Item
        label="Education Level"
        name="educationLevel"
        rules={[
          { required: true, message: "Please select your education level" },
        ]}
      >
        <Select placeholder="Select education level">
          {educationLevelsConstant.map((level) => (
            <Select.Option key={level.value} value={level.value}>
              {level.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/* Degree */}
      <Form.Item
        label="Degree/Specialization"
        name="degreeOrSpecialialization"
        rules={[
          {
            required: true,
            message: "Please enter your degree or specialization",
          },
          {
            min: 2,
            message: "Degree must be at least 2 characters long",
          },
        ]}
      >
        <Input placeholder="e.g., B.Tech Computer Science, MBA Finance" />
      </Form.Item>

      {/* Job Title */}
      <Form.Item
        label="Job Title/Designation"
        name="jobTitleOrDesignation"
        rules={[
          {
            required: true,
            message: "Please enter your job title or designation",
          },
          {
            min: 2,
            message: "Job title must be at least 2 characters",
          },
        ]}
      >
        <Input placeholder="Enter your job title" />
      </Form.Item>

      {/* Company */}
      <Form.Item
        label="Company/Organization"
        name="companyOrOrganization"
        rules={[
          {
            required: true,
            message: "Please enter your company or organization name",
          },
          {
            min: 2,
            message: "Company name must be at least 2 characters",
          },
        ]}
      >
        <Input placeholder="Enter your company name" />
      </Form.Item>

      {/* Annual Income */}
      <Form.Item
        label="Annual Income"
        name="anualIncome"
        rules={[{ required: true, message: "Please select your income range" }]}
      >
        <Select placeholder="Select income range">
          {incomeRangesConstant.map((range) => (
            <Select.Option key={range.value} value={range.value}>
              {range.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default StepEducation;
