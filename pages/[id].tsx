import {useRouter} from 'next/router';
import Index from "./index";
import Head from 'next/head';
import React from "react";

export default function Emoji() {
  const router = useRouter();
  /*TODO: @Karsten Disable all Non-Emoji Routes*/

  return (
  <>
    <Head>
      <title>{router.query.id} on EmojiTalkie</title>
    </Head>
    <Index emoji={router.query.id}/>
  </>
  );
}
