import React from "react";
import Twemoji from 'react-twemoji';

export const Emoji = ({children}) => (
  <Twemoji noWrapper={false} tag="span" options={{
    className: "twemoji",
    folder: 'svg',
    ext: '.svg'
  }}>{children}</Twemoji>
);
