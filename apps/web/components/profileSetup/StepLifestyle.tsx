"use client";
import React from "react";
import { Form, Radio, Input } from "antd";

const StepLifestyle: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Diet Preference" name="diet">
        <Radio.Group>
          <Radio value="vegetarian">Vegetarian</Radio>
          <Radio value="non-vegetarian">Non-Vegetarian</Radio>
          <Radio value="eggetarian">Eggetarian</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Smoking Habit" name="smoking">
        <Radio.Group>
          <Radio value="no">No</Radio>
          <Radio value="occasionally">Occasionally</Radio>
          <Radio value="yes">Yes</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Drinking Habit" name="drinking">
        <Radio.Group>
          <Radio value="no">No</Radio>
          <Radio value="occasionally">Occasionally</Radio>
          <Radio value="yes">Yes</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Hobbies & Interests" name="hobbies">
        <Input.TextArea
          placeholder="Tell us about your hobbies, interests..."
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};

export default StepLifestyle;
