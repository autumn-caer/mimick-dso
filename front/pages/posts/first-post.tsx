import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first-post</title>
      </Head>
      <h1>First Post aa</h1>
      <Link href="/">Back to Home</Link>
    </>
  );
}
