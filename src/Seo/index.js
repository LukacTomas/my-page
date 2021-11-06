import React from "react";
import { Helmet } from "react-helmet";

export const Seo = ({ seo }) => {
  const { title, description } = seo;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
