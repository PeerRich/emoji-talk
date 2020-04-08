/*export function roomUrlFromPageUrl() {
  const match = window.location.search.match(/roomUrl=([^&]+)/i);
  return match && match[1] ? decodeURIComponent(match[1]) : null;
}

export function pageUrlFromRoomUrl(roomUrl) {
  return (
    window.location.href.split("?")[0] +
    (roomUrl ? `?roomUrl=${encodeURIComponent(roomUrl)}` : "")
  );
}
*/
import {Emoji} from 'emoji-mart'
import React from 'react';
import { toArray } from "react-emoji-render";

export function roomUrlFromPageUrl() {
  const match = window.location.search.match(/roomUrl=([^&]+)/i);
  return match && match[1] ? decodeURIComponent(match[1]) : null;
}


export function pageUrlFromRoomUrl(roomUrl) {

  const parseEmojis = value => {
    const emojisArray = toArray(value);

    // toArray outputs React elements for emojis and strings for other
    const newValue = emojisArray.reduce((previous, current) => {
      if (typeof current === "string") {
        return previous + current;
      }
      return previous + current.props.children;
    }, "");

    return newValue;
  };

  let emoji = roomUrl && roomUrl.replace("https://emojitalki.daily.co/", "");
  let emojiUrl = parseEmojis(":"+ emoji +":");

  return (
    (roomUrl ? emojiUrl : "")
  );
}
