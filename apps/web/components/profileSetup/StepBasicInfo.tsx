"use client";
import React from "react";
import { Form, Input, DatePicker, Select } from "antd";
import { heightConstant } from "@/constants/dataConstant";
import dayjs from "dayjs";

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
          {
            required: true,
            message: "Please select your date of birth",
          },
          {
            //@ts-ignore
            validator: (_, value) => {
              if (!value) return Promise.resolve();

              const dob = dayjs(value);
              const age = dayjs().diff(dob, "year");

              if (age >= 18) {
                return Promise.resolve();
              }
              return Promise.reject("You must be at least 18 years old");
            },
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
          {heightConstant.map((h) => (
            <Select.Option key={h.value} value={h.value}>
              {h.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default StepBasicInfo;
