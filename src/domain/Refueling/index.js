import React, { useEffect, useState } from "react";
import { WithMenu } from "../../views/WithMenu";
import { API } from "../../services/API";
import { Card, Col, Row } from "antd";

const RefuelingCard = ({ data }) => {
  return (
    <Col xs={24} sm={8} md={6} lg={4} xl={3}>
      <Card data-cy={`user-${data._id}`} hoverable={true}>
        <Card.Meta title={parseFloat(data.avg).toFixed(2) + " l/100km"} />
        <p></p>
        <p>Amount of fuel: {data.amount} l</p>
        <p>Distance traveled: {data.distance} km</p>
      </Card>
    </Col>
  );
};

export const Refueling = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    API.get("/refueling")
      .then((response) => setState(response.data.refueling))
      .catch((errInfo) => console.error(errInfo));
  }, []);

  return (
    <WithMenu>
      <Card>
        <Row gutter={[10, 10]}>
          {state.map((x) => (
            <RefuelingCard key={x._id} data={x} />
          ))}
        </Row>
      </Card>
    </WithMenu>
  );
};
