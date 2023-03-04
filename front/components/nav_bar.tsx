import {
  Container,
  VStack,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  HStack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useControllableState,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { TabPanels } from "./elements/tab_panels";
import { TabPanel, NavItem } from "../interfaces";
import styles from "./layout.module.css";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [showCollapseIndex, setShowCollapseIndex] = useControllableState({
    defaultValue: -1,
  });

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav
              showCollapseIndex={showCollapseIndex}
              setShowCollapseIndex={setShowCollapseIndex}
            />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <NavContents showCollapseIndex={showCollapseIndex} />
    </Box>
  );
};

interface DesktopNavPorps {
  showCollapseIndex: number;
  setShowCollapseIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DesktopNav: React.FC<DesktopNavPorps> = ({
  showCollapseIndex,
  setShowCollapseIndex,
}) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box width="100%">
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem, i) => (
          <Box
            key={navItem.label}
            onClick={() =>
              setShowCollapseIndex(i == showCollapseIndex ? -1 : i)
            }
          >
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

interface NavContents {
  showCollapseIndex: number;
}

const NavContents: React.FC<NavContents> = ({ showCollapseIndex }) => {
  return (
    <>
      {NAV_ITEMS.map((navItem, i) => (
        <Collapse in={showCollapseIndex == i} animateOpacity>
          <Stack
            spacing="8"
            direction={["column", "column", "column", "row"]}
            justify="start"
            py={{ base: "12", md: "16" }}
          >
            {navItem.tabPanelsList &&
              navItem.tabPanelsList.map((tabPanels, _) => {
                return (
                  <VStack
                    spacing="4"
                    justifyContent="start"
                    w="33%"
                    flexBasis="33%"
                  >
                    <Stack
                      w="100%"
                      as={Link}
                      overflow="hidden"
                      position="relative"
                    >
                      <Box className={styles.arrow}>
                        <Box
                          className={styles.img}
                          height="80px"
                          backgroundSize="cover"
                          bgImage="url('/corporate-info-img-main.jpg')"
                          backgroundPosition="center 20%!important"
                        ></Box>
                      </Box>
                    </Stack>

                    <TabPanels
                      tabPanels={tabPanels ? tabPanels : []}
                      flexBasis={["100%", "100%", "100%", "100%"]}
                    />
                  </VStack>
                );
              })}
          </Stack>
        </Collapse>
      ))}
    </>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Mimick Dsoについて",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
    tabPanelsList: [
      [
        { name: "会社概要", url: "" },
        { name: "理念", url: "" },
        { name: "経営方針", url: "" },
        { name: "役員", url: "" },
        { name: "グローバル拠点情報", url: "" },
        { name: "スポーツ・展示ホール・工場見学", url: "" },
        { name: "ブランドパーパス", url: "" },
        { name: "プロモーション", url: "" },
      ],
      [
        { name: "CEOメッセージ", url: "" },
        { name: "サステナビリティマネジメント", url: "" },
        { name: "デンソーのSDGs", url: "" },
        { name: "環境への取り組み", url: "" },
        { name: "社会への取り組み", url: "" },
        { name: "ガバナンス", url: "" },
        { name: "データライブラリー", url: "" },
        { name: "社会貢献活動 ", url: "" },
        { name: "地域創生への貢献 ", url: "" },
      ],
      [
        { name: "決算資料", url: "" },
        { name: "統合報告書", url: "" },
        { name: "財務・実績データ", url: "" },
        { name: "株式・社債情報", url: "" },
        { name: "有価証券報告書", url: "" },
        { name: "株主の皆様へ", url: "" },
        { name: "事業説明会", url: "" },
        { name: "個人投資家の皆様へ", url: "" },
        { name: "よくいただくご質問（FAQ）", url: "" },
      ],
    ],
  },
  {
    label: "事業紹介",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
    tabPanelsList: [
      [
        { name: "Mobility Well-being", url: "" },
        { name: "Food Well-being", url: "" },
      ],
      [
        { name: "半導体", url: "" },
        { name: "MaaSテクノロジー ", url: "" },
        { name: "量子コンピューティング", url: "" },
        { name: "デンソーテクニカルレビュー", url: "" },
      ],
      [
        { name: "サーマルマネージメント&エアコンシステム", url: "" },
        { name: "パワートレインシステム", url: "" },
        { name: "セーフティ&コックピットシステム", url: "" },
        { name: "自動車補修用部品・アクセサリー", url: "" },
        { name: "修理サービス", url: "" },
        { name: "その他の産業", url: "" },
        { name: "インダストリー", url: "" },
        { name: "フードバリューチェーン", url: "" },
        { name: "ホーム", url: "" },
      ],
    ],
  },
  {
    label: "採用",
    href: "#",
    tabPanelsList: [
      [
        { name: "会社を知る", url: "" },
        { name: "仕事を知る", url: "" },
        { name: "成長したいを後押しする環境", url: "" },
        { name: "自分らしく活躍できる場所（D&I）", url: "" },
        { name: "採用情報", url: "" },
        { name: "グループ会社採用", url: "" },
      ],
      [
        { name: "ジョブサーチ", url: "" },
        { name: "キャリア登録 ", url: "" },
      ],
      [
        { name: "生産関係職（製造人材）", url: "" },
        { name: "デンソー工業学園", url: "" },
        { name: "生産関係職（開発技能）", url: "" },
        { name: "生産関係職", url: "" },
        { name: "期間従業員", url: "" },
      ],
    ],
  },
  {
    label: "ニュース",
    href: "#",

    tabPanelsList: [],
  },
  {
    label: "Driven Base",
    href: "#",

    tabPanelsList: [],
  },
];
