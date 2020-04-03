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

export default function EmptyScreen() {
  const classes = useStyles();
  let microphone = false;

  return (
    <div style={{
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      display: "flex",
      margin: "5% auto",
    }}>
      <div style={{textAlign: "center", maxWidth: 450}}>
        <img src="https://twemoji.maxcdn.com/v/12.1.5/svg/1f937.svg"
             style={{height: 100, width: 100, marginBottom: 20}}/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          No one here yet.
        </Typography>
        <Typography variant="h5" component="h2">
          You are the only one
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Invite a friend or join another random channel
        </Typography>
        <Typography variant="body2" component="p">
          Join emoji channels and talk to strangers. You can mute a person with one <i>tap</i>, or
          permanently block them with a <i>double-tap</i>. No account. No download. It's that simple.
        </Typography>
        {!microphone &&
          <Button color="primary" variant="contained" style={{margin: "16px 4px"}} size="small">Invite friend</Button>}
          <Button color="primary" style={{margin: "16px 4px"}} size="small">random channel</Button>
      </div>
    </div>
  );
}
