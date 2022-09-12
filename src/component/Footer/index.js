import clsx from "clsx";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={clsx(styles.footer)}>
            <div className="grid wide">
                <p>Copyright @ 2021</p>
            </div>
        </div>
    );
};

export default Footer;
