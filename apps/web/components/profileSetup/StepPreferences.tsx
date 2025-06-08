"use client";
import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const ages = Array.from({ length: 40 }, (_, i) => 18 + i);
const heights = [
  "4'5\"",
  "4'6\"",
  "4'7\"",
  "4'8\"",
  "4'9\"",
  "4'10\"",
  "4'11\"",
  "5'0\"",
  "5'1\"",
  "5'2\"",
  "5'3\"",
  "5'4\"",
  "5'5\"",
  "5'6\"",
  "5'7\"",
  "5'8\"",
  "5'9\"",
  "5'10\"",
  "5'11\"",
  "6'0\"",
  "6'1\"",
  "6'2\"",
];

const StepPreferences = ({ form }: { form: any }) => {
  return (
    <Form layout="vertical" form={form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item
          label="Preferred Age (Min)"
          name="partnerPreferedMinAge"
          rules={[
            { required: true, message: "Please select minimum preferred age" },
          ]}
        >
          <Select placeholder="Select age">
            {ages.map((age) => (
              <Option key={age} value={age}>
                {age}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Preferred Age (Max)"
          name="partnerPreferedMaxAge"
          rules={[
            { required: true, message: "Please select maximum preferred age" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("partnerPreferedMinAge") <= value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Max age should be greater than or equal to Min age"
                  )
                );
              },
            }),
          ]}
        >
          <Select placeholder="Select age">
            {ages.map((age) => (
              <Option key={age} value={age}>
                {age}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item
          label="Preferred Height (Min)"
          name="partnerPreferedMinHeight"
          rules={[
            {
              required: true,
              message: "Please select minimum preferred height",
            },
          ]}
        >
          <Select placeholder="Select height">
            {heights.map((h) => (
              <Option key={h} value={h}>
                {h}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Preferred Height (Max)"
          name="partnerPreferedMaxHeight"
          rules={[
            {
              required: true,
              message: "Please select maximum preferred height",
            },
          ]}
        >
          <Select placeholder="Select height">
            {heights.map((h) => (
              <Option key={h} value={h}>
                {h}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item
        label="Preferred Caste"
        name="partnerPreferedSubCast"
        rules={[
          { required: true, message: "Please select a caste preference" },
        ]}
      >
        <Select placeholder="Select caste">
          <Option value="any">Any Rajput</Option>
          <Option value="chauhan">Chauhan</Option>
          <Option value="rathore">Rathore</Option>
          <Option value="sisodia">Sisodia</Option>
          <Option value="bhati">Bhati</Option>
          <Option value="shekhawat">Shekhawat</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Preferred City/Region"
        name="partnerPreferedCity"
        rules={[
          {
            required: true,
            message: "Please enter a preferred city or region",
          },
          { min: 2, message: "Must be at least 2 characters" },
        ]}
      >
        <Input placeholder="Enter preferred city or region" />
      </Form.Item>

      <Form.Item
        label="Preferred Education Level"
        name="partnerPreferedEducationLevel"
        rules={[
          { required: true, message: "Please select an education level" },
        ]}
      >
        <Select placeholder="Select education level">
          <Option value="any">Any</Option>
          <Option value="high-school">High School</Option>
          <Option value="undergraduate">Undergraduate</Option>
          <Option value="graduate">Graduate</Option>
          <Option value="postgraduate">Post Graduate</Option>
          <Option value="phd">PhD / Doctorate</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Preferred Profession"
        name="partnerPreferedProfession"
        rules={[
          { required: true, message: "Please enter a preferred profession" },
        ]}
      >
        <Input placeholder="Enter preferred profession" />
      </Form.Item>

      <Form.Item
        label="Additional Preferences"
        name="partnerAdditionalPreference"
        rules={[
          {
            min: 10,
            message: "Please write at least 10 characters or leave it blank",
            whitespace: true,
          },
        ]}
      >
        <Input.TextArea
          placeholder="Any other preferences you'd like to specify..."
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};

export default StepPreferences;
