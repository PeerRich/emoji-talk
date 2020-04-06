import {Picker} from 'emoji-mart';
import React from "react";
import { useRouter } from 'next/router'

export default function EmojiPicker() {
  const router = useRouter()

  return (
    <Picker set="twitter"
            emojiSize={32}
            useButton={false}
            onSelect={
              (emoji) => {
                console.log(emoji.id);
                router.push("/" + emoji.native, "/" + emoji.native, { shallow: true });
              }}
            showSkinTones={false}
            showPreview={false}
            sheetSize={64}
            color="#002884"
            title="EmojiTalkie"
            style={{width: "100%", borderRadius: 0}}/>
  );
}


