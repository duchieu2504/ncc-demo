import React from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";
import Image from "../../asscets/image";

const Header = () => {
    return (
        <header>
            <div className={clsx(styles.header)}>
                <div className="grid wide">
                    <div className={clsx(styles.header_menu_mobile)}></div>
                    <div className={clsx(styles.header_logo)}>
                        <img
                            className={clsx(styles.header_logo_link)}
                            src={Image.LOGO}
                            alt="LOGO"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
