"use client";

import React from "react";
import { Layout, Menu, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Heart, MessageCircle, Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import Footer from "@/components/Footer";

const { Content, Footer: AntDFooter, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
};

const menuBar = [
  { key: "/dashboard", icon: <UserOutlined />, label: "Dashboard" },
  { key: "/matches", icon: <Heart />, label: "Matches" },
  { key: "/search", icon: <Search />, label: "Search" },
  { key: "/messages", icon: <MessageCircle />, label: "Messages" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Logo />
      <Layout hasSider className="mt-5">
        <Sider style={siderStyle} breakpoint="lg" collapsedWidth="0">
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            onClick={(e) => router.push(e.key)}
            items={menuBar}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <AntDFooter style={{ textAlign: "center" }}>
            <Footer />
          </AntDFooter>
        </Layout>
      </Layout>
    </>
  );
}
