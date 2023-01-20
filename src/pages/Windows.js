import "./Common.css";
import styles from "./Windows.module.css";

import React, { useState, useEffect } from "react";

import SideMenu, { getItem } from "../components/SideMenu";
import Reader from "../components/Reader";

import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const group = "windows";

const menu = [
  { key: "1", label: "wsl" },
  { key: "2", label: "utility" },
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

export default function Windows() {
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
    <div className="container">
      <SideMenu items={items} onSelect={onSelect} />
      <Reader url={url} />
    </div>
  );
}
