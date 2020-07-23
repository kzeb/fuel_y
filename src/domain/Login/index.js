import React from "react";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { WithoutMenu } from "../../views/WithoutMenu";
import { Link, useHistory } from "react-router-dom";
import { API } from "../../services/API";
import { login } from "../../services/user";

export const Login = () => {
  const history = useHistory();

  const onFinish = (values) => {
    API.post("/users/login", {
      email: values.username,
      password: values.password,
    })
      .then((response) => {
        login(response.data.token);
        history.push("/user");
      })
      .catch((errInfo) => {
        message.error(`Wrong username or password`);
      });
  };

  return (
    <WithoutMenu>
      <div style={{ maxWidth: 300, margin: "100px auto" }}>
        <h1>Login</h1>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              data-cy="username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              data-cy="password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              Log in
            </Button>
            Or{" "}
            <Link data-cy="register-link" to="/register">
              register now!
            </Link>
          </Form.Item>
        </Form>
      </div>
    </WithoutMenu>
  );
};
