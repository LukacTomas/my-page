import React from "react";
import { paths } from "Config";
import { useLanguage } from "Hooks";

import { Link } from "./Link";

export const LinksScreen = () => {
  const lang = useLanguage();
  console.log(lang);
  const pathsForCurrentLanguage = Object.values(paths[lang]);
  console.log(pathsForCurrentLanguage);

  return pathsForCurrentLanguage.map((path) => (
    <Link id={path.id} to={path.route} text={`${path.icon} ${path.title}`} />
  ));
};
