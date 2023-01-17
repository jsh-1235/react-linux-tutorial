import styles from "./Users.module.css";

import React, { useState, useEffect } from "react";

import SideMenu, { getItem } from "../components/SideMenu";
import Reader from "../components/Reader";

import { SettingOutlined } from "@ant-design/icons";

const group = "users";

const menu = [
  { key: "1", label: "user" },
  { key: "2", label: "group" },
  { key: "3", label: "login" },
];

const items = [
  getItem(
    group,
    <SettingOutlined />,
    group,
    menu.map((item, index) => getItem(item.key, <SettingOutlined />, item.label)),
    group
  ),
];

export default function Users() {
  const [url, setURL] = useState(`/${group}/${menu[0].label}.md`);

  useEffect(() => {
    return () => {};
  }, []);

  const onSelect = (key) => {
    setURL(`/${group}/${menu[Number(key) - 1].label}.md`);

    console.log(key, url);
  };

  useEffect(() => {
    // console.log(url);
  }, [url]);

  return (
    <div className={styles.container}>
      <SideMenu items={items} onSelect={onSelect} />
      <Reader url={url} />
    </div>
  );
}
