import styles from "./Windows.module.css";

import React, { useState, useEffect } from "react";

import SideMenu, { getItem } from "../components/SideMenu";
import Reader from "../components/Reader";

import { SettingOutlined } from "@ant-design/icons";

const group = "windows";

const pages = [
  { key: "1", label: "wsl" },
  { key: "2", label: "utility" },
];

const items = [getItem(group, <SettingOutlined />, group, [getItem(pages[0].key, pages[0].label), getItem(pages[1].key, pages[1].label)], group)];

export default function Windows() {
  const [url, setURL] = useState(`/${group}/${pages[0].label}.md`);

  useEffect(() => {
    return () => {};
  }, []);

  const onSelect = (key) => {
    setURL(`/${group}/${pages[Number(key) - 1].label}.md`);

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
