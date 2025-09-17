import React from "react";
import { Helmet } from "react-helmet-async";

const SeoHelmet = ({ title, description, keywords = [], href }) => {
  // Convert keywords array to a comma-separated string for the meta tag
  const keywordsString = Array.isArray(keywords) ? keywords.join(", ") : "";

  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="My Website Team" />
      <meta property="og:title" content={title} />
    <meta property="og:description" content={description}/>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={href} />
    <meta property="og:image" content="https://mywebsite.com/images/preview.jpg" />
      <link rel="canonical" href={href} />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SeoHelmet;

