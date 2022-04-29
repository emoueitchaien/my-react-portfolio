import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import styles from "./SocialSites.module.css";

const SocialSites = () => {
  return (
    <div className={styles.social}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://facebook.com/emoueitchaien"
      >
        <BsFacebook size="30px" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/emoueitchaien"
      >
        <BsTwitter size="30px" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/emoueitchaien"
      >
        <BsInstagram size="30px" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UCVHfRNUkLaXMDPY5l6SxYuQ"
      >
        <BsYoutube size="30px" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/emoueitchaien"
      >
        <BsLinkedin size="30px" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/emoueitchaien"
      >
        <BsGithub size="30px" />
      </a>
    </div>
  );
};

export default SocialSites;
