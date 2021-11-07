import React from "react";
import { useWidth } from "Hooks";

import { LinksScreen } from "./LinksScreen";
import { LinksMobile } from "./LinksMobile";

export const Menu = () => {
  const width = useWidth();
  if (width === "xs" || width === "sm") return <LinksMobile />;

  return <LinksScreen />;
};
