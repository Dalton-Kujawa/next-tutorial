import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My First Post!</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Go Back to home!</Link>
      </h2>
    </Layout>
  );
}



