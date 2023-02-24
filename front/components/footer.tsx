import styles from "./layout.module.css";
import Image from "next/image";
import {
  Box,
  Wrap,
  WrapItem,
  Container,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { TabPanels } from "./elements/tab_panels";
import { TabPanel } from "../interfaces";

export const Footer = () => {
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
    <Container as="footer" role="contentinfo" maxWidth="90%">
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="start"
        py={{ base: "12", md: "16" }}
      >
        <VStack
          spacing="4"
          minW="300"
          shouldWrapChildren
          justifyContent="center"
        >
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </VStack>
        <TabPanels tabPanels={FOOTER_LINKS} />
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
};
