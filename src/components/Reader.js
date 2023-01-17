import styles from "./Reader.module.css";
import "github-markdown-css";

import React, { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function Reader({ ...props }) {
  const [markdown, setMarkdown] = useState(null);

  const getMarkdown = (url) => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  };

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    console.log("url", props.url);

    getMarkdown(props.url);

    return () => {};
  }, [props.url]);

  useEffect(() => {
    // console.log(markdown);
  }, [markdown]);

  return (
    <div className={styles.markdown} style={{ padding: "0px 20px 64px" }}>
      <ReactMarkdown className="markdown-body" remarkPlugins={[gfm]} children={markdown} />
    </div>
  );
}
