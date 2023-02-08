import { ReactElement } from "react";
import styles from "./layout.module.css";

import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Box, Center, Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";

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
              {FOOTER_LINKS.map((footer_link) => {
                return (
                  <WrapItem
                    flexBasis={["90%", "40.66667%", "40.66667%", "30.83333%"]}
                    h="80px"
                    bg="red.200"
                  >
                    <Link
                      href={footer_link.url}
                      className={utilStyles.colorInherit}
                    >
                      {footer_link.name}
                    </Link>
                  </WrapItem>
                );
              })}
            </Wrap>
          </GridItem>
        </Grid>
      </footer>
    </Box>
  );
}
