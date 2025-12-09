import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=oyeyinka.azeez01@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer">
            Akin
        </a>
        💛{year}
      </p>

    </footer>
  );
}

export default Footer;
