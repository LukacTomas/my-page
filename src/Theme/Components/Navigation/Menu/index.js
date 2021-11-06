import React from "react";
import { useWidth } from "Hooks";

import { LinksScreen } from "./LinksScreen";

export const Menu = () => {
  const width = useWidth();
  if (width === "xs" || width === "sm") return <div>Menu</div>;

  return <LinksScreen />;
};
