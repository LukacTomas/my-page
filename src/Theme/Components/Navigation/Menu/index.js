import React, { Suspense } from "react";
import { useWidth } from "Hooks";

//import { LinksScreen } from "./LinksScreen";
//import LinksMobile from "./LinksMobile";
const LinksMobile = React.lazy(() => import("./LinksMobile"));
const LinksScreen = React.lazy(() => import("./LinksScreen"));

export default function Menu() {
  const width = useWidth();
  if (width === "xs" || width === "sm")
    return (
      <Suspense fallback={<></>}>
        <LinksMobile />
      </Suspense>
    );

  return (
    <Suspense fallback={<></>}>
      <LinksScreen />
    </Suspense>
  );
}
