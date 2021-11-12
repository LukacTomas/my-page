import React from "react";
import { paths } from "Config";
import { useLanguage } from "Hooks";

import { Link } from "./Link";

export default function LinksScreen() {
  const lang = useLanguage();
  const pathsForCurrentLanguage = Object.values(paths[lang]);

  return pathsForCurrentLanguage.map((path) => (
    <Link
      key={path.route}
      id={path.id}
      to={path.route}
      text={`${path.icon} ${path.title}`}
    />
  ));
}
