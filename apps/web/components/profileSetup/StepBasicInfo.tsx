"use client";
import React from "react";
import { Form, Input, DatePicker, Select } from "antd";

const StepBasicInfo: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
        <Input placeholder="Enter your full name" />
      </Form.Item>

      <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
        <Select placeholder="Select gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
        <DatePicker className="w-full" />
      </Form.Item>

      <Form.Item label="Height" name="height" rules={[{ required: true }]}>
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
