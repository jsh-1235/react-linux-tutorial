import styles from "./Windows.module.css";

import React, { useState, useEffect } from "react";

import { SettingOutlined } from "@ant-design/icons";

import { Menu } from "antd";

import Reader from "../components/Reader";

function getItem(key, icon, label, children, type) {
  return {
    key,
    icon,
    label,
    children,
    type,
  };
}
const items = [getItem("windows", <SettingOutlined />, "windows", [getItem("1", "wsl"), getItem("2", "utility")], "windows")];

export default function Windows() {
  const [url, setURL] = useState("/windows/wsl.md");

  useEffect(() => {
    return () => {};
  }, []);

  const onClick = (e) => {
    if (e.key === "1") {
      setURL("/windows/wsl.md");
    } else if (e.key === "2") {
      setURL("/windows/utility.md");
    }

    // console.log(e.key, url);
  };

  useEffect(() => {
    // console.log(url);
  }, [url]);

  return (
    <div className={styles.container}>
      <Menu className={styles.menu} onClick={onClick} defaultSelectedKeys={["1"]} defaultOpenKeys={["windows"]} mode="inline" items={items} />
      <Reader url={url} />
    </div>
  );
}
