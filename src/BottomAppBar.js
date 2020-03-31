import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import MoreIcon from '@material-ui/icons/MoreVert';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicOnIcon from '@material-ui/icons/Mic';
import {Emoji} from "./helpers";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
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
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const muted = true;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <strong style={{display: "inline-block", marginLeft: -10}}>#</strong>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <Emoji>😊</Emoji>
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            {muted ? <MicOffIcon style={{color: "#fff"}} /> : <MicOnIcon style={{color: "#fff"}} />}
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <ShareIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
