import styles from "./Menu.module.css";
import { getAllUrls } from "../../utils/url-helper";
import { MenuItem, SubMenuItem, SubMenuItemData } from "../../model/MenuItem";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  isMenuOpen: boolean;
  menuItem: MenuItem;
  activeElement: SubMenuItemData;
  setScreen: any;
  subItemRefElements: any[];
}

export default function Menu(props: MenuProps) {
  const { isMenuOpen, activeElement, menuItem, setScreen, subItemRefElements } =
    props;
  const menuItems = getAllUrls();

  const navigate = useNavigate();

  const redirect = (link: string) => {
    navigate(link);
  };

  return (
    <>
      <nav className={`${styles["menu"]} ${isMenuOpen ? styles["open"] : ""}`}>
        <ul className={styles["mainmenu"]}>
          {menuItems.map((item: MenuItem) => {
            return (
              <li
                className={
                  activeElement.item === item.name ? styles["active"] : ""
                }
                key={item.name}
              >
                <div
                  className={styles["mainmenu-item"]}
                  onClick={() => {
                    redirect(item.url);
                    item.name === "gettingstarted"
                      ? setScreen({
                          item: item.name,
                          subItem: "installation",
                        })
                      : setScreen({
                          item: item.name,
                        });
                  }}
                >
                  <div className={styles["mainmenu-circle"]}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  {item.title}
                </div>
                <ul
                  className={`${styles["submenu"]} ${
                    menuItem?.name === "gettingstarted" ? styles["open"] : ""
                  }`}
                >
                  {item.subMenu && item.subMenu.length > 0
                    ? item.subMenu.map(
                        (subItem: SubMenuItem, index: number) => {
                          return (
                            <li
                              key={subItem.name}
                              className={
                                activeElement.item === item.name &&
                                activeElement.subItem === subItem.name
                                  ? styles["active"]
                                  : ""
                              }
                            >
                              <a
                                onClick={() => {
                                  index === 0
                                    ? window.scrollTo(0, 0)
                                    : subItemRefElements[
                                        index
                                      ].target.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                      });
                                }}
                              >
                                {subItem.title}
                              </a>
                            </li>
                          );
                        }
                      )
                    : null}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
