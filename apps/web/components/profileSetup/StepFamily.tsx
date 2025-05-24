"use client";
import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const StepFamily: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Father's Occupation" name="fatherOccupation">
        <Input placeholder="Enter father's occupation" />
      </Form.Item>

      <Form.Item label="Mother's Occupation" name="motherOccupation">
        <Input placeholder="Enter mother's occupation" />
      </Form.Item>

      <Form.Item label="Grandfather's Occupation" name="granfatherOccupation">
        <Input placeholder="Enter grandfather's occupation" />
      </Form.Item>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item label="Number of Siblings" name="siblings">
          <Select placeholder="Select number">
            <Option value="0">None</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5+">5 or more</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Family Type" name="familyType">
          <Select placeholder="Select type">
            <Option value="joint">Joint Family</Option>
            <Option value="nuclear">Nuclear Family</Option>
          </Select>
        </Form.Item>
      </div>

      <Form.Item label="Family Values" name="familyValues">
        <Select placeholder="Select family values">
          <Option value="traditional">Traditional</Option>
          <Option value="moderate">Moderate</Option>
          <Option value="liberal">Liberal</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Family Background" name="familyBackground">
        <Input.TextArea
          placeholder="Share more about your family background..."
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};

export default StepFamily;
