"use client";
import React from "react";
import { Form, Input, Select } from "antd";

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
          <Option value="high-school">High School</Option>
          <Option value="undergraduate">Undergraduate</Option>
          <Option value="graduate">Graduate</Option>
          <Option value="postgraduate">Post Graduate</Option>
          <Option value="phd">PhD / Doctorate</Option>
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
          <Option value="below-3lpa">Below 3 LPA</Option>
          <Option value="3-5lpa">3-5 LPA</Option>
          <Option value="5-7lpa">5-7 LPA</Option>
          <Option value="7-10lpa">7-10 LPA</Option>
          <Option value="10-15lpa">10-15 LPA</Option>
          <Option value="15-20lpa">15-20 LPA</Option>
          <Option value="20-30lpa">20-30 LPA</Option>
          <Option value="above-30lpa">Above 30 LPA</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default StepEducation;
