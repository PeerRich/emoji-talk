import React from "react";
import "./BrowserUnsupported.css";
import Typography from "@material-ui/core/Typography";
import {Emoji} from "../../helpers";
import StartButton from "../StartButton/StartButton";

export default function BrowserUnsupported() {
  return (
    <div style={{
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      display: "flex",
    }}>
      <div style={{textAlign: "center", padding: "10% 0px", maxWidth: 450}}>
        <img src="https://twemoji.maxcdn.com/v/12.1.5/svg/1f44b.svg"
             style={{height: 100, width: 100, marginBottom: 20}}/>
        <Typography style={{fontSize: 14}} color="textSecondary" gutterBottom>
          Hello Stranger,
        </Typography>
        <Typography variant="h5" component="h2">
          Welcome to <Emoji>📻</Emoji> <strong className="brand">EmojiTalkie</strong>
        </Typography>
        <Typography style={{marginBottom: 12}} color="textSecondary">
          The anonymous voice chat community
        </Typography>
        <Typography variant="body2" component="p">
            Looks like you need to upgrade or change your browser to make Daily.co video calls.
            <br/>
            See&nbsp;
            <a href="https://help.daily.co/en/articles/3179421-what-browser-version-does-daily-co-require">
              this page
            </a>
            &nbsp;for help getting on a supported browser version. If you're on an iPhone, try the latest Safari Browser.
        </Typography>
      </div>
    </div>
  );
}
