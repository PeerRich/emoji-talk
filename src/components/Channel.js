import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ButtonBase } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Channel() {

  return (
      <div style={{padding: "24px 0"}}>
        <Grid className="people" container justify="center" spacing={2}>
          {[0, 1, 2, 3, 4].map(value => (
            <Grid key={value} item xs={6} sm={4}>
              <Paper style={{position: "relative", height: 0, paddingTop: "100%", width: "100%"}}>
                <ButtonBase className="volume-off-icon" style={{position: "absolute", top: 0, width: "100%", height: "100%"}}>
                  <VolumeOffIcon style={{color: "#fff"}}/>
                </ButtonBase>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={6} sm={4}>
            <Paper className="add-person" style={{position: "relative", height: 0, paddingTop: "100%", width: "100%"}}>
              <ButtonBase style={{position: "absolute", top: 0, width: "100%", height: "100%"}}>
                <AddIcon style={{color: "#757ce8"}}/>
              </ButtonBase>
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
}
