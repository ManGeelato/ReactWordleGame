import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Developed by:{" "}
        <span>
          <a
            href="https://mangeelato.github.io/EmmanuelKaomeResume/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Emmanuel Kaome
          </a>
        </span>
        2022 &copy;
      </p>
    </div>
  );
};

export default Footer;