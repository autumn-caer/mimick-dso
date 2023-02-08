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
  Flex,
  Square,
  HStack,
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: ReactElement;
  home: Boolean;
}) {
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
      <footer className={styles.footer_content}>
        <Grid
          h="300px"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          <GridItem bg={["red.200", "yellow.200", "green.200", "blue.200"]}>
            <Center>Mimick-dsossss</Center>
          </GridItem>

          <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 2 }}>
            <Wrap>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                aa
              </WrapItem>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                bb
              </WrapItem>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                cc
              </WrapItem>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                dd
              </WrapItem>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                ee
              </WrapItem>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                ff
              </WrapItem>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                gg
              </WrapItem>
              <WrapItem
                flexBasis={[
                  "calc(50% - 16px)",
                  "40.66667%",
                  "40.66667%",
                  "30.83333%",
                ]}
                h="80px"
                bg="red.200"
              >
                hh
              </WrapItem>
            </Wrap>
          </GridItem>
        </Grid>
        {/* <Flex>
          <Box flexBasis="29.16667%">
            <Center>Mimick-dsoss</Center>
          </Box>
          <Grid
            h="300px"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
            flexBasis="50.83333%"
          >
            <GridItem colSpan={1} bg="tomato">
              <Center bg="green.500">
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </Center>
            </GridItem>
            <GridItem colSpan={1} bg="tomato">
              <Center bg="green.500">
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </Center>
            </GridItem>
            <GridItem colSpan={1} bg="tomato">
              <Center bg="green.500">
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </Center>
            </GridItem>

            <GridItem colSpan={1} bg="tomato">
              <Center bg="green.500">
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </Center>
            </GridItem>
            <GridItem colSpan={1} bg="tomato">
              <Center bg="green.500">
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </Center>
            </GridItem>
            <GridItem colSpan={1} bg="tomato">
              <Center bg="green.500">
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </Center>
            </GridItem>

            <GridItem colSpan={3} bg="tomato" />
          </Grid> */}
        {/* </Flex> */}
      </footer>
    </Box>
  );
}
