import React, { useState } from "react";
import clsx from "clsx";
import styles from "./SideBar.module.scss";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const [active, setActive] = useState(false);

    return (
        <div className={clsx(styles.sideBar)}>
            <ul className={clsx(styles.sideBar_list)}>
                <li
                    className={clsx(styles.sideBar_item, {
                        [styles.active]: true,
                    })}
                >
                    <NavLink to="/" className={clsx(styles.sideBar_item_link)}>
                        Home
                    </NavLink>
                </li>
                <li
                    className={clsx(styles.sideBar_item, {
                        [styles.active]: active,
                    })}
                >
                    <NavLink
                        to="/services"
                        className={clsx(styles.sideBar_item_link)}
                    >
                        Services
                    </NavLink>
                </li>
                <li
                    className={clsx(styles.sideBar_item, {
                        [styles.active]: active,
                    })}
                >
                    <NavLink
                        to="/news"
                        className={clsx(styles.sideBar_item_link)}
                    >
                        News
                    </NavLink>
                </li>
                <li
                    className={clsx(styles.sideBar_item, {
                        [styles.active]: active,
                    })}
                >
                    <NavLink
                        to="/blog"
                        className={clsx(styles.sideBar_item_link)}
                    >
                        Blog
                    </NavLink>
                </li>
                <li
                    className={clsx(styles.sideBar_item, {
                        [styles.active]: active,
                    })}
                >
                    <NavLink
                        to="/contact"
                        className={clsx(styles.sideBar_item_link)}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
