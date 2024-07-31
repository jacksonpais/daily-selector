import { useState } from "react";
import GettingStartedPage from "../../container/GettingStarted/GettingStartedPage";
import HomePage from "../../container/Home/HomePage";
import PlaygroundPage from "../../container/Playground/PlaygroundPage";
import { getUrlObj } from "../../utils/url-helper";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styles from "./../../App.module.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { MenuItem, SubMenuItemData } from "../../model/MenuItem";
import ExamplePage from "../../container/Examples/ExamplesPage";
import FutureScopePage from "../../container/FutureScope/FutureScopePage";

export default function MainContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const menuItem = getUrlObj(currentPath);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [refElements, setRefElements] = useState<any>([]);

  const setScreen = (screenData: SubMenuItemData) => {
    setActiveElement(screenData);
  };

  const [activeElement, setActiveElement] = useState<SubMenuItemData>({
    item: "home",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const setSubmenuRefs = (elements: any) => {
    setRefElements(elements);
  };

  return (
    <div className={styles.app}>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Menu
        isMenuOpen={isMenuOpen}
        menuItem={menuItem as MenuItem}
        activeElement={activeElement as SubMenuItemData}
        setScreen={setScreen}
        subItemRefElements={refElements}
      />
      <>
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage menuItem={menuItem} />} />
            <Route
              path="/getting-started"
              element={
                <GettingStartedPage
                  menuItem={menuItem as MenuItem}
                  setScreen={setScreen}
                  setSubmenuRefs={setSubmenuRefs}
                />
              }
            />
            <Route
              path="/playground"
              element={<PlaygroundPage menuItem={menuItem as MenuItem} />}
            />
            <Route
              path="/examples"
              element={<ExamplePage menuItem={menuItem as MenuItem} />}
            />
            <Route
              path="/future-scope"
              element={<FutureScopePage menuItem={menuItem as MenuItem} />}
            />
          </Routes>
        </main>
      </>
      <Footer />
    </div>
  );
}
