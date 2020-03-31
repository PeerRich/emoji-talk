import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import React from "react";

export default function EmojiPicker() {

  return (
      <Picker set="twitter"
              emojiSize={38}
              color="#fff"
              title="EmojiTalkie"
              style={{ width: "100%", borderRadius: 0}} />
  );
}


