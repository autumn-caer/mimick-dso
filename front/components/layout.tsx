import { ReactElement } from "react";
import styles from "./layout.module.css";

import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Container,
  Stack,
  Text,
  Button,
  ButtonGroup,
  IconButton,
  Divider,
  Input,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: ReactElement;
  home: Boolean;
}) {
  const FOOTER_LINKS = [
    { name: "クッキーポリシー", url: "" },
    { name: "お問い合わせ", url: "" },
    { name: "重要なお知らせ", url: "" },
    { name: "サイトマップ", url: "" },
    { name: "プライバシーポリシー", url: "" },
    { name: "このサイトについて", url: "" },
    { name: "DSO WorldWide", url: "" },
  ];

  return (
    <Box className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Container as="footer" role="contentinfo" maxWidth="90%">
        <Stack
          spacing="8"
          direction={{ base: "column", md: "row" }}
          justify="start"
          py={{ base: "12", md: "16" }}
        >
          <VStack
            spacing="4"
            minW="400"
            shouldWrapChildren
            justifyContent="center"
          >
            <Text color="muted">Mimick-dsossss1</Text>
          </VStack>
          <Wrap
            minW="500"
            w="600px"
            direction={{ base: "row", md: "row", lg: "row" }}
          >
            {FOOTER_LINKS.map((footer_link) => {
              return (
                <WrapItem
                  flexBasis={["90%", "40.66667%", "40.66667%", "30.83333%"]}
                  h="80px"
                  bg="red.200"
                >
                  <Button variant="link" className={utilStyles.colorInherit}>
                    {footer_link.name}
                  </Button>
                </WrapItem>
              );
            })}
          </Wrap>
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
    </Box>
  );
}
