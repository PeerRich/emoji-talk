import { Picker } from 'emoji-mart';
import React from "react";

export default function EmojiPicker() {
  return (
      <Picker set="twitter"
              emojiSize={31}
              useButton={false}
              showSkinTones={false}
              showPreview={false}
              sheetSize={64}
              color="#002884"
              title="EmojiTalkie"
              style={{ width: "100%", borderRadius: 0}} />
  );
}


