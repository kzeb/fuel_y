import React, { useEffect, useState } from "react";
import { WithMenu } from "../../views/WithMenu";
import { API } from "../../services/API";
import { Card, Col, Row } from "antd";

const UserCard = ({ data }) => {
  return (
    <Col xs={24} sm={8} md={6} lg={4} xl={3}>
      <Card data-cy={`user-${data._id}`} hoverable={true}>
        <Card.Meta title={data.name} />
        <p></p>
        <p>Make: {data.make}</p>
        <p>Model: {data.model}</p>
        <p>Capacity of the tank: {data.capacity} liters</p>
      </Card>
    </Col>
  );
};

export const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API.get("/users/me")
      .then((response) => setUser(response.data))
      .catch((errInfo) => console.error(errInfo));
  }, []);

  return (
    <WithMenu>
      <Card>
        <Row gutter={[10, 10]}>
          <UserCard key={user._id} data={user} />
        </Row>
      </Card>
    </WithMenu>
  );
};
