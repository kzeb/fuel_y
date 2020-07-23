import React from "react";
import { Card, Layout } from "antd";

const { Footer, Content } = Layout;

export const WithoutMenu = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout>
        <Content>
          <Card>{children}</Card>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Fuel Y - Karol Żebrowski</Footer>
    </Layout>
  );
};
