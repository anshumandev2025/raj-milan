"use client";
import React from "react";
import {
  Card,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Typography,
  Divider,
} from "antd";
import Footer from "@/components/Footer";
import Navbar from "@/components/homePage/Navbar";
import Link from "next/link";
import { signUpFlow } from "@/constants/layoutContant";

const { Title, Paragraph } = Typography;
const { Option } = Select;

const Signup = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Panel */}
            <div className="hidden md:flex flex-col justify-center">
              <div className="space-y-4">
                <Title level={2} className="text-primary font-playfair">
                  Join RajputMilan
                </Title>
                <Paragraph className="text-lg text-gray-600">
                  Create your profile to connect with suitable matches from the
                  Rajput community.
                </Paragraph>

                <div className="space-y-3 mt-8">
                  {signUpFlow.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-primary font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Signup Form */}
            <div>
              <Card className="shadow-md border border-secondary/20">
                <Title level={3} className="text-primary font-playfair">
                  Sign Up
                </Title>
                <Paragraph>Enter your details to create your account</Paragraph>

                <Form
                  layout="vertical"
                  form={form}
                  onFinish={handleFinish}
                  className="space-y-4 mt-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Form.Item label="Full Name" name="fullName">
                      <Input placeholder="Enter your full name" />
                    </Form.Item>

                    <Form.Item label="Gender" name="gender">
                      <Select
                        rootClassName="!border-secondary"
                        className="!border-secondary"
                        placeholder="Select gender"
                      >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <Form.Item label="Email" name="email">
                    <Input type="email" placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item label="Password" name="password">
                    <Input.Password placeholder="Create a password" />
                  </Form.Item>

                  <Form.Item label="Mobile Number" name="mobile">
                    <Input placeholder="Enter your mobile number" />
                  </Form.Item>

                  <div className="grid grid-cols-2 gap-4">
                    <Form.Item label="Location" name="location">
                      <Select placeholder="Select location">
                        <Option value="rajasthan">Rajasthan</Option>
                        <Option value="gujarat">Gujarat</Option>
                        <Option value="madhyapradesh">Madhya Pradesh</Option>
                        <Option value="uttarpradesh">Uttar Pradesh</Option>
                        <Option value="delhi">Delhi</Option>
                        <Option value="haryana">Haryana</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Sub-Caste" name="subcaste">
                      <Select placeholder="Select sub-caste">
                        <Option value="chauhan">Chauhan</Option>
                        <Option value="rathore">Rathore</Option>
                        <Option value="sisodia">Sisodia</Option>
                        <Option value="bhati">Bhati</Option>
                        <Option value="shekhawat">Shekhawat</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="terms"
                    valuePropName="checked"
                    className="!mb-2"
                  >
                    <Checkbox>
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-primary hover:underline"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Link href="/profile-setup">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-primary hover:bg-primary/90 border-none"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Form.Item>

                  <Divider plain>Or continue with</Divider>

                  <Button
                    className="w-full border-gray-300"
                    icon={
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M20.283 10.356h-8.327v3.451h4.792...z"
                        />
                      </svg>
                    }
                  >
                    Sign up with Google
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <Link
                      href="/auth/login"
                      className="text-primary hover:underline font-medium"
                    >
                      Log in
                    </Link>
                  </p>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
