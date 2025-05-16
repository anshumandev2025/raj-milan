"use client";

import React from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

export default function AntdStyleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider layer>
      <ConfigProvider>{children}</ConfigProvider>
    </StyleProvider>
  );
}
