import React from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../services/user";

export const AppMenu = () => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="user" data-cy="menu-user" selectedKeys={["user"]}>
        <Link to="/user">User info</Link>
      </Menu.Item>
      <Menu.Item
        key="refueling"
        data-cy="menu-refuelings"
        selectedKeys={["refueling"]}
      >
        <Link to="/refueling">Refuelings</Link>
      </Menu.Item>
      <Menu.Item key="new-refueling" data-cy="menu-refueling-new">
        <Link to="/refueling/new">Calculate fuel consimption</Link>
      </Menu.Item>
      <Menu.Item
        data-cy="menu-logout"
        onClick={() => handleLogout()}
        style={{ float: "right" }}
      >
        Log out
      </Menu.Item>
    </Menu>
  );
};
