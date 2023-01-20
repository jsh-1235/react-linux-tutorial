import styles from "./Common.module.css";

import React, { useState, useEffect } from "react";

import SideMenu, { getItem } from "../components/SideMenu";
import Reader from "../components/Reader";

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const group = "account";

const menu = [
  { key: "1", label: "user" },
  { key: "2", label: "group" },
  { key: "3", label: "login" },
  { key: "4", label: "terminal" },
];

const items = [
  getItem(
    group,
    <AppstoreOutlined />,
    group,
    menu.map((item, index) => getItem(item.key, <SettingOutlined />, item.label)),
    group
  ),
];

export default function Account() {
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
