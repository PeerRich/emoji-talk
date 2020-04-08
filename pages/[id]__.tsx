import React, { useEffect } from 'react';
import {useRouter} from 'next/router';
import Index from "./index";
import Head from 'next/head';

export default function EmojiChannel() {
  const router = useRouter();

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked times`;
  });

  return (
  <>
    <Head>
      <title>{router.query.id} on EmojiTalkie</title>
    </Head>
    <Index emoji={router.query.id}/>
  </>
  );
}
