import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import SideBar from "./component/SideBar";
import styles from "./App.module.scss";
import clsx from "clsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                <div className={clsx(styles.app_ncc)}>
                    <div className={clsx(styles.sideBar_container)}>
                        <SideBar />
                    </div>

                    <div className={clsx(styles.content)}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Main />}></Route>
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
