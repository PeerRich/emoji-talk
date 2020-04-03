import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Emoji} from "../helpers";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HomeScreen() {
  const classes = useStyles();
  let microphone = false;

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
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hello Stranger,
        </Typography>
        <Typography variant="h5" component="h2">
          Welcome to <Emoji>📻</Emoji> <strong className="brand">EmojiTalkie</strong>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          The anonymous voice chat community
        </Typography>
        <Typography variant="body2" component="p">
          Join emoji channels and talk to strangers. You can mute a person with one <i>tap</i>, or
          permanently block them with a <i>double-tap</i>. No account. No download. It's that simple.
        </Typography>
        {!microphone &&
          <Button color="primary" variant="contained" style={{marginTop: 16}} size="small">Enable Microphone</Button>}
      </div>
    </div>
  );
}
