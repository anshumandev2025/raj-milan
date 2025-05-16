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

const StepPreferences: React.FC = () => {
  return (
    <Form layout="vertical">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item label="Preferred Age (Min)" name="prefAgeMin">
          <Select placeholder="Select age">
            {ages.map((age) => (
              <Option key={age} value={age}>
                {age}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Preferred Age (Max)" name="prefAgeMax">
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
        <Form.Item label="Preferred Height (Min)" name="prefHeightMin">
          <Select placeholder="Select height">
            {heights.map((h) => (
              <Option key={h} value={h}>
                {h}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Preferred Height (Max)" name="prefHeightMax">
          <Select placeholder="Select height">
            {heights.map((h) => (
              <Option key={h} value={h}>
                {h}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item label="Preferred Caste" name="prefCaste">
        <Select placeholder="Select caste">
          <Option value="any">Any Rajput</Option>
          <Option value="chauhan">Chauhan</Option>
          <Option value="rathore">Rathore</Option>
          <Option value="sisodia">Sisodia</Option>
          <Option value="bhati">Bhati</Option>
          <Option value="shekhawat">Shekhawat</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Preferred City/Region" name="prefCity">
        <Input placeholder="Enter preferred city or region" />
      </Form.Item>

      <Form.Item label="Preferred Education Level" name="prefEducation">
        <Select placeholder="Select education level">
          <Option value="any">Any</Option>
          <Option value="high-school">High School</Option>
          <Option value="undergraduate">Undergraduate</Option>
          <Option value="graduate">Graduate</Option>
          <Option value="postgraduate">Post Graduate</Option>
          <Option value="phd">PhD / Doctorate</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Preferred Profession" name="prefProfession">
        <Input placeholder="Enter preferred profession" />
      </Form.Item>

      <Form.Item label="Additional Preferences" name="additionalPreferences">
        <Input.TextArea
          placeholder="Any other preferences you'd like to specify..."
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};

export default StepPreferences;
