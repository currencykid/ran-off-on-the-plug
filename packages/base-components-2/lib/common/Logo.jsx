import React from 'react';
import { IndexLink } from 'react-router';

const Logo = ({logoUrl, siteTitle}) => {
  if (logoUrl) {
    return (
      <h1 className="logo-image ">
        <IndexLink to={{pathname: "/"}}>
          <img src={logoUrl} alt={siteTitle} style={{maxWidth: "320px", maxHeight: "240px"}} />
        </IndexLink>
      </h1>
    )
  } else {
    return (
      <h2 className="logo-text nounderline">
        <IndexLink to={{pathname: "/"}}>{siteTitle}</IndexLink>
      </h2>
    )
  }
}

Logo.displayName = "Logo";

module.exports = Logo;
