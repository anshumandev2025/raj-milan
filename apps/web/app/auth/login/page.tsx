"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/homePage/Navbar";
import { Button, Input, Checkbox, Form, Typography, Card } from "antd";
import Link from "next/link";
import React from "react";

const { Title, Text } = Typography;

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="shadow-md border border-secondary/20">
            <div className="space-y-1 text-center mb-6">
              <Title level={3} className="font-playfair text-primary !mb-0">
                Login
              </Title>
              <Text type="secondary">
                Enter your credentials to access your account
              </Text>
            </div>

            <Form layout="vertical" className="space-y-4">
              <Form.Item label="Email" name="email" className="mb-4">
                <Input type="email" placeholder="Enter your email" />
              </Form.Item>

              <Form.Item label="Password" name="password" className="mb-4">
                <div className="flex relative items-center justify-between mb-1">
                  <Input.Password
                    id="password"
                    placeholder="Enter your password"
                  />
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary top-10 right-0 absolute hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                className="mb-4 "
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item className="mb-4">
                <Link href="/dashboard" className="w-full block">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full bg-primary hover:bg-primary/90 border-none"
                  >
                    Sign In
                  </Button>
                </Link>
              </Form.Item>

              <div className="relative w-full my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <Form.Item className="mb-0">
                <Button
                  className="w-full border-secondary"
                  icon={
                    <svg
                      className="mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.956 16.26c-2.18 0-4.049-1.262-4.794-3.453h-3.33v3.601c1.52 3.018 4.624 5.073 8.124 5.073 3.495 0 6.598-2.055 8.12-5.073v-3.601h-3.33c-.744 2.191-2.625 3.453-4.79 3.453z"
                        fill="#34A853"
                      />
                      <path
                        d="M3.053 12.8h3.33c.747 2.19 2.615 3.452 4.794 3.452 2.166 0 4.047-1.262 4.791-3.452h3.329V9.2H3.053v3.6z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.956 7.9c1.473 0 2.8.538 3.85 1.596l2.192-2.19c-1.63-1.53-3.752-2.47-6.042-2.47-3.5 0-6.604 2.055-8.122 5.074L7.83 12.8c.744-2.192 2.573-3.452 5.126-3.452z"
                        fill="#EA4335"
                      />
                    </svg>
                  }
                >
                  Sign in with Google
                </Button>
              </Form.Item>
            </Form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
