import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import React from "react";

export default function EmojiPicker() {

  return (
      <Picker set="twitter" style={{ width: "100%"}} />
  );
}


