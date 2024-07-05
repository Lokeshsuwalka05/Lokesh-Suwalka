import React from "react";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        {" "}
        &#169; 2024 Lokesh Suwalka. <br />
        All Right Reserved.
      </p>
    </section>
  );
}

export default Footer;
