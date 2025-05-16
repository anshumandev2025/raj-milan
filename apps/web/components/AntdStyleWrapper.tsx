"use client";

import React from "react";
import { StyleProvider } from "@ant-design/cssinjs";

export default function AntdStyleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyleProvider layer>{children}</StyleProvider>;
}
