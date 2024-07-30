export interface MenuItem {
  index: number;
  title: string;
  url: string;
  name: string;
  subMenu?: SubMenuItem[] | undefined;
}

export interface SubMenuItem {
  title: string;
  name: string;
}

export interface SubMenuItemData {
  item: string;
  subItem?: string | undefined;
}
