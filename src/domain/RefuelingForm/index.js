import React from "react";
import { WithMenu } from "../../views/WithMenu";
import { Button, Card, Form, Input, message } from "antd";
import { API } from "../../services/API";
import { useHistory } from "react-router";

export const RefuelingForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const handleFinish = (values) => {
    API.post("/refueling", values)
      .then((response) => {
        message.info("Refueling was added");
        form.resetFields();
        setTimeout(() => {
          history.push("/refueling");
        }, 1000);
      })
      .catch((errInfo) => {
        message.error("Refueling was NOT Added");
      });
  };

  return (
    <WithMenu>
      <Card title="Add new refueling">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 4 }}
          layout="horizontal"
          onFinish={handleFinish}
          form={form}
        >
          <Form.Item
            label="Amount of fuel"
            name="amount"
            rules={[
              { required: true, message: "Please input amount of fuel!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Distance traveled"
            name="distance"
            rules={[
              { required: true, message: "Please input distance traveled!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item style={{ paddingLeft: "35%" }}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </WithMenu>
  );
};
