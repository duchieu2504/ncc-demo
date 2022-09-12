import React from "react";
import clsx from "clsx";
import styles from "./Main.module.scss";
import Image from "../../asscets/image";

const Main = () => {
    return (
        <main>
            <div className="grid wide">
                <div className={clsx(styles.title_wrap)}>
                    <h2>Lorem ipsum, dolor sit amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tristique consequat placerat. Vestibulum auctor
                        pellentesque sem, eu posuere erat hendrerit quis.
                        Maecenas vel consequat turpis. Nam facilisis, ligula in
                        mattis sodales, augue justo tristique nulla, sed lacinia
                        ante eros ut mi. Morbi vitae diam augue. Aliquam vel
                        mauris a nibh auctor commodo. Praesent et nisi eu justo
                        eleifend convallis. Quisque suscipit maximus vestibulum.
                        Phasellus congue mollis orci, sit amet luctus augue
                        tristique eu. Donec vulputate odio neque, sed semper
                        turpis pellentesque a.
                    </p>
                </div>
                <div className={clsx(styles.list)}>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col c-12 m-6 l-4">
                                <div className={clsx(styles.item)}>
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <div className={clsx(styles.item_wrap)}>
                                        <p>
                                            <img src={Image.ICON1} alt="img" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed non
                                            dui sodales, faucibus libero ut,
                                            posuere felis. Donec imperdiet
                                            suscipit accumsan. Aenean consequat
                                            condimentum velit ut tempor. Nam
                                            porta massa in metus bibendum
                                            congue. Pellentesque ultrices liquam
                                            egestas nunc at ullamcorper
                                            ultricies. Donec feugiat velit
                                            nulla, vel sodales est ullamcorper
                                            id. Aenean consequat condimentum
                                            velit ut tempor. Nam porta massa in
                                            metus bibendum congue. Pellentesque
                                            ultrices vestibulum mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col c-12 m-6 l-4">
                                <div className={clsx(styles.item)}>
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <div className={clsx(styles.item_wrap)}>
                                        <p>
                                            <img src={Image.ICON2} alt="img" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed non
                                            dui sodales, faucibus libero ut,
                                            posuere felis. Donec imperdiet
                                            suscipit accumsan. Aenean consequat
                                            condimentum velit ut tempor. Nam
                                            porta massa in metus bibendum
                                            congue. Pellentesque ultrices liquam
                                            egestas nunc at ullamcorper
                                            ultricies. Donec feugiat velit
                                            nulla, vel sodales est ullamcorper
                                            id. Aenean consequat condimentum
                                            velit ut tempor. Nam porta massa in
                                            metus bibendum congue. Pellentesque
                                            ultrices vestibulum mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col c-12 m-6 l-4">
                                <div className={clsx(styles.item)}>
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                    <div className={clsx(styles.item_wrap)}>
                                        <p>
                                            <img src={Image.ICON3} alt="img" />
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Sed non
                                            dui sodales, faucibus libero ut,
                                            posuere felis. Donec imperdiet
                                            suscipit accumsan. Aenean consequat
                                            condimentum velit ut tempor. Nam
                                            porta massa in metus bibendum
                                            congue. Pellentesque ultrices liquam
                                            egestas nunc at ullamcorper
                                            ultricies. Donec feugiat velit
                                            nulla, vel sodales est ullamcorper
                                            id. Aenean consequat condimentum
                                            velit ut tempor. Nam porta massa in
                                            metus bibendum congue. Pellentesque
                                            ultrices vestibulum mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
