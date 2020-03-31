import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import React from "react";

export default function EmojiPicker() {

  return (
      <Picker set="twitter"
              emojiSize={30}
              sheetSize={64}
              color="#002884"
              title="EmojiTalkie"
              style={{ width: "100%", borderRadius: 0}} />
  );
}


