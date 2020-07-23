import React from "react";
import { Layout } from "antd";
import { AppMenu } from "../components/AppMenu";

const { Header, Footer, Content } = Layout;

export const WithMenu = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <AppMenu />
      </Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>Fuel Y - Karol Żebrowski</Footer>
    </Layout>
  );
};
