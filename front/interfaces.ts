export interface PostData {
  id: string;
  date: string;
  title: string;
}

export interface TabPanel {
  name: string;
  url: string;
}

export interface TabPanelsPorps {
  tabPanels: Array<TabPanel>;
  flexBasis?: Array<string | number | (string & {})>;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  tabPanels?: Array<TabPanel>;
}
