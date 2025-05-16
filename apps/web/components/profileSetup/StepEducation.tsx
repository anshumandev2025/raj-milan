"use client";
import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const StepEducation: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Education Level"
        name="educationLevel"
        rules={[{ required: true }]}
      >
        <Select placeholder="Select education level">
          <Option value="high-school">High School</Option>
          <Option value="undergraduate">Undergraduate</Option>
          <Option value="graduate">Graduate</Option>
          <Option value="postgraduate">Post Graduate</Option>
          <Option value="phd">PhD / Doctorate</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Degree/Specialization" name="degree">
        <Input placeholder="e.g., B.Tech Computer Science, MBA Finance" />
      </Form.Item>

      <Form.Item label="Job Title/Designation" name="jobTitle">
        <Input placeholder="Enter your job title" />
      </Form.Item>

      <Form.Item label="Company/Organization" name="company">
        <Input placeholder="Enter your company name" />
      </Form.Item>

      <Form.Item label="Annual Income" name="income">
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
