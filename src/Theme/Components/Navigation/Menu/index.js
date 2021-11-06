import React from "react";
import { useWidth } from "Hooks";

export const Menu = () => {
  const width = useWidth();
  if (width === "xs" || width === "sm") return <div>Menu</div>;

  return <div>My new Menu</div>;
};
