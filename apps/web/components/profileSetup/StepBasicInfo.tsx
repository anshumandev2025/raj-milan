"use client";
import React from "react";
import { Form, Input, DatePicker, Select } from "antd";
import moment from "moment";

const StepBasicInfo = ({ form }: { form: any }) => {
  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          { required: true, message: "Please enter your full name" },
          { min: 2, message: "Name must be at least 2 characters" },
          {
            pattern: /^[a-zA-Z\s]+$/,
            message: "Name must contain only letters",
          },
        ]}
      >
        <Input placeholder="Enter your full name" />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Please select your gender" }]}
      >
        <Select placeholder="Select gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        rules={[
          { required: true, message: "Please select your date of birth" },
          {
            validator: (_, value) =>
              value && value.isAfter(moment())
                ? Promise.reject(
                    new Error("Date of birth cannot be in the future")
                  )
                : Promise.resolve(),
          },
        ]}
      >
        <DatePicker className="w-full" />
      </Form.Item>

      <Form.Item
        label="Height"
        name="height"
        rules={[{ required: true, message: "Please select your height" }]}
      >
        <Select placeholder="Select height">
          {["4'5\"", "4'6\"", "4'7\"", "5'0\"", "5'2\"", "5'5\"", "6'0\""].map(
            (h) => (
              <Select.Option key={h} value={h}>
                {h}
              </Select.Option>
            )
          )}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default StepBasicInfo;
