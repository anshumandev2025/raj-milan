"use client";
import React from "react";
import { Form, Input, Select } from "antd";
import {
  familyTypesConstant,
  familyValuesConstant,
  siblingOptionsConstant,
} from "@/constants/dataConstant";

const StepFamily = ({ form }: { form: any }) => {
  return (
    <Form layout="vertical" form={form}>
      {/* Occupations - Optional */}
      <Form.Item label="Father's Occupation" name="fatherOccupation">
        <Input placeholder="Enter father's occupation" />
      </Form.Item>

      <Form.Item label="Mother's Occupation" name="motherOccupation">
        <Input placeholder="Enter mother's occupation" />
      </Form.Item>

      <Form.Item label="Grandfather's Occupation" name="granfatherOccupation">
        <Input placeholder="Enter grandfather's occupation" />
      </Form.Item>

      {/* Required Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item
          label="Number of Siblings"
          name="siblingsCount"
          rules={[
            { required: true, message: "Please select the number of siblings" },
          ]}
        >
          <Select placeholder="Select number">
            {siblingOptionsConstant.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Family Type"
          name="familyType"
          rules={[
            { required: true, message: "Please select your family type" },
          ]}
        >
          <Select placeholder="Select type">
            {familyTypesConstant.map((type) => (
              <Select.Option key={type.value} value={type.value}>
                {type.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item
        label="Family Values"
        name="familyValues"
        rules={[
          { required: true, message: "Please select your family values" },
        ]}
      >
        <Select placeholder="Select family values">
          {familyValuesConstant.map((value) => (
            <Select.Option key={value.value} value={value.value}>
              {value.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Family Background"
        name="aboutFamilyBackground"
        rules={[
          {
            min: 10,
            message: "Please write at least 10 characters about your family",
          },
        ]}
      >
        <Input.TextArea
          placeholder="Share more about your family background..."
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};

export default StepFamily;
