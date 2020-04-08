import React from 'react';
import {Button, CircularProgress, LinearProgress, Typography} from "@material-ui/core";

function Progress(props: any) {

  let blocked = props.blocked;

  return <div>
    {!blocked && <LinearProgress style={{
      zIndex:99999999999,
      position: "fixed",
      top: 0,
      left:0,
      right: 0
    }} color="secondary"/>}

    {blocked &&
    <div style={{
      zIndex:99999999999,
      backgroundColor: "rgba(0,0,0,0.9)",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0}}
    >
      <div style={{position: "absolute", left: "50%", marginTop:"-80px", width: 400, marginLeft: "-200px", top: "50%", textAlign: "center"}}>
        <CircularProgress style={{marginBottom: 16}} color="secondary" disableShrink />
        <Typography variant="h5" style={{textTransform: "none", color: "#fff"}}>Trying to join channel, please wait.</Typography>
        <Typography variant="subtitle2" style={{marginBottom: 16, color: "#fff"}}>If this is taking too long, please reload or report an issue.<br/>
        Se Internetz is quite busy today...</Typography>
        <Button style={{color: "#8899a6"}} href="mailto:support@emojitalkie.com?subject=Issues%20loading%20EmojiTalkie">Report Issue</Button>
        <Button color="secondary" href="https://emojitalkie.com">Reload</Button>
      </div>
    </div>}
  </div>
}

export default Progress
