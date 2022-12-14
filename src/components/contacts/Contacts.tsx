import React from "react";
import styles from "./contacts.module.scss";
import { ReactComponent as FacebookIcon } from "./assets/facebook-brands.svg";
import { ReactComponent as InstagramIcon } from "./assets/instagram-color.svg";
import { ReactComponent as VkIcon } from "./assets/vk-brands.svg";
import { ReactComponent as WhatsappIcon } from "./assets/whatsapp-brands.svg";
import IconButton from "../../ui/iconButton/IconButton";
import classNames from "classnames";

const Contacts = () => {
  return (
    <section className={styles.main} id="contacts">
      <div className={styles.row}>
        <IconButton><a className={classNames(styles.brand, styles.instagram)} href="https://www.instagram.com/" target='blank'><InstagramIcon /></a></IconButton>
        <IconButton><a className={classNames(styles.brand, styles.facebook)} href="https://www.facebook.com/" target='blank'><FacebookIcon /></a></IconButton>
        <IconButton><a className={classNames(styles.brand, styles.vk)} href="https://vk.com/id334235794" target='blank'><VkIcon /></a></IconButton>
        <IconButton><a className={classNames(styles.brand, styles.whatsapp)} href="https://wa.me/79532345119" target='blank'><WhatsappIcon /></a></IconButton>
      </div>
    </section>
  );
};

export default Contacts;
