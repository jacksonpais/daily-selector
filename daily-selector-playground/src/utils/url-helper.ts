import { MenuItem } from "../model/MenuItem";
import menu from "./../data/menu.json";

export function getUrlObj(url: string) {
  return menu.data.find((item: MenuItem) => item.url === url);
}

export function getAllUrls(): MenuItem[] {
  return menu.data;
}
