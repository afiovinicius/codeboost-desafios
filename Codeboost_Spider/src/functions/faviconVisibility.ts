"use client";

import { useState, useEffect } from "react";

export const FaviconVisibility = () => {
  const [favicon, setFavicon] = useState("/favicon.png");

  useEffect(() => {
    const handleVisibilityChange = () => {
      setFavicon(`/favicon${document.hidden ? "" : "-visibled"}.png`);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return favicon;
};
