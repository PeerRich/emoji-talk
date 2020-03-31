import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Emoji} from "./helpers";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

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
      <div style={{padding: "16px 0"}}>
        <Grid className="people" container justify="center" spacing={2}>
          {[0, 1, 2, 3, 4, 5].map(value => (
            <Grid key={value} item xs={6} sm={4}>
              <Paper style={{height: 0, paddingTop: "100%", width: "100%", backgroundColor: "#fafa" + value}} />
            </Grid>
          ))}
        </Grid>
      </div>
  );
}
