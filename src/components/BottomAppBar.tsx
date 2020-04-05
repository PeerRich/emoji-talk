import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Emoji} from "../helpers";
import ShareButton from "./shareButton";
import MainMenu from "./MainMenu";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  bottomBar: {
    maxWidth: 1280,
    margin: "0 auto"
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function BottomAppBar(props: any) {
  const classes = useStyles();
  const muted = true;

  return (
  <div className={classes.bottomBar}>
    <CssBaseline/>
    <AppBar position="static" color="primary" className="bottomAppBar">
      <Toolbar>
        <strong style={{display: "inline-block", marginLeft: -10}}>#</strong>
        <IconButton disabled edge="start" color="inherit" aria-label="open drawer">
          <Emoji>😊</Emoji>
        </IconButton>
        <ShareButton
        config={{
          params: {
            title: 'EmojiTalkie',
            text: 'Check out the anonymous voice chat community',
            url: 'https://emojitalkie.com',
          },
          /* tslint:disable-next-line:no-console */
          onShareSuccess: () => console.log('Success'),
          /* tslint:disable-next-line:no-console */
          onShareError: (error: Error) => console.log('error', error),
        }}
        />
        <div className={classes.grow}/>
        {props.muteIcon}
        <MainMenu/>
      </Toolbar>
    </AppBar>
  </div>
  );
}
