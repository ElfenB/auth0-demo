import { useEffect, useState } from "react";

import Markdown from "react-markdown";

export function Readme() {
  const [post, setPost] = useState("");

  useEffect(() => {
    const url = "/README.md";

    void fetch(url)
      .then((r) => r.text())
      .then((t) => {
        // Check if it actually got the readme and not the index.html
        if (!t.startsWith("<!doctype html>")) {
          setPost(t);
        }
      });
  }, []);

  return <Markdown>{post}</Markdown>;
}
