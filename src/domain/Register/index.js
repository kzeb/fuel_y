import React from "react";
import { Button, Form, Input, message } from "antd";
import { WithoutMenu } from "../../views/WithoutMenu";
import { registerFormLayout } from "./layout";
import { API, setAuthHeaders } from "../../services/API";
import { useHistory } from "react-router";

export const Register = () => {
  const history = useHistory();

  const onFinish = (values) => {
    API.post("/users", values)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthHeaders(response.data.token);
        history.push("/user");
      })
      .catch((errInfo) => {
        message.error(`Cannot register the user: ${errInfo.response.data}`);
      });
  };

  return (
    <WithoutMenu>
      <div style={{ maxWidth: 600, margin: "100px auto auto auto" }}>
        <h1>Register form</h1>
        <Form name="login" onFinish={onFinish} {...registerFormLayout}>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                min: 7,
                message: "Your password is shorter than 7 characters!",
              },
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="make"
            label="Make"
            rules={[
              {
                required: true,
                message: "Please input make of the car!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="model"
            label="Model"
            rules={[
              {
                required: true,
                message: "Please input model of the car!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="capacity"
            label="Capacity of the fuel tank"
            rules={[
              {
                required: true,
                message: "Please input capacity of the fuel tank!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item noStyle>
            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </WithoutMenu>
  );
};
