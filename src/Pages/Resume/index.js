import React from "react";
import { useLanguage } from "Hooks";

const Resume =  () => {
  const lang = useLanguage();

  return <div>{lang}</div>;
};

export default Resume;
