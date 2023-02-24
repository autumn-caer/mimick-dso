import {
  Container,
  VStack,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
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
import { Placeholder } from "./elements/place_holder";
import Image from "next/image";
import styles from "./layout.module.css";
import LogoImage from "../public/logo.svg";
export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

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
          ml={{ base: -2 }}
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

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const [showCollapseIndex, setShowCollapseIndex] = useControllableState({
    defaultValue: -1,
  });

  const FOOTER_LINKS: Array<TabPanel> = [
    { name: "クッキーポリシー", url: "" },
    { name: "お問い合わせ", url: "" },
    { name: "重要なお知らせ", url: "" },
    { name: "サイトマップ", url: "" },
    { name: "プライバシーポリシー", url: "" },
    { name: "このサイトについて", url: "" },
    { name: "DSO WorldWide", url: "" },
  ];
  return (
    <Box>
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
      {NAV_ITEMS.map((navItem, i) => (
        <Collapse in={showCollapseIndex == i} animateOpacity>
          <Stack
            direction={{ base: "column", md: "row" }}
            py={{ base: "12", md: "16" }}
            className="aiuy"
          >
            <Stack
              spacing="8"
              direction="column"
              justify="start"
              py={{ base: "12", md: "16" }}
            >
              <VStack
                spacing="4"
                minW="200"
                shouldWrapChildren
                justifyContent="center"
              >
                <Stack>
                  <Box width={400} height="80px" bgImage="url('/logo.svg')" />
                </Stack>

                <TabPanels
                  tabPanels={navItem.tabPanels ? navItem.tabPanels : []}
                  flexBasis={["100%", "48%", "48%", "48%"]}
                />
              </VStack>
            </Stack>
          </Stack>
        </Collapse>
      ))}
    </Box>
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
    tabPanels: [
      { name: "会社概要", url: "" },
      { name: "理念", url: "" },
      { name: "経営方針", url: "" },
      { name: "役員", url: "" },
      { name: "グローバル拠点情報", url: "" },
      { name: "スポーツ・展示ホール・工場見学", url: "" },
      { name: "ブランドパーパス", url: "" },
      { name: "プロモーション", url: "" },
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
    tabPanels: [
      { name: "会社概要", url: "" },
      { name: "理念", url: "" },
      { name: "経営方針", url: "" },
      { name: "役員", url: "" },
      { name: "グローバル拠点情報", url: "" },
      { name: "スポーツ・展示ホール・工場見学", url: "" },
      { name: "ブランドパーパス", url: "" },
      { name: "プロモーション", url: "" },
    ],
  },
  {
    label: "採用",
    href: "#",
    tabPanels: [
      { name: "グローバル拠点情報", url: "" },
      { name: "会社概要", url: "" },
      { name: "理念", url: "" },
      { name: "スポーツ・展示ホール・工場見学", url: "" },
    ],
  },
  {
    label: "ニュース",
    href: "#",
    tabPanels: [
      { name: "会社概要", url: "" },
      { name: "理念", url: "" },
    ],
  },
  {
    label: "DRIVEN BASE",
    href: "#",
    tabPanels: [
      { name: "会社概要", url: "" },
      { name: "理念", url: "" },
    ],
  },
];
