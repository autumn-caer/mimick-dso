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

export interface TabCard {
  image: string;
  title: string;
  tabPanels: Array<TabPanel>;
}
export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  tabCards?: Array<TabCard>;
  tabPanelsList?: Array<Array<TabPanel>>;
}
