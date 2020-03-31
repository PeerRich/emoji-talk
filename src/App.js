import React from 'react';
import Container from '@material-ui/core/Container';
import BottomAppBar from "./BottomAppBar";
import Paper from "@material-ui/core/Paper";
import EmojiPicker from "./EmojiPicker";
import EmptyScreen from "./EmptyScreen";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

export default function App() {
  let empty = true;

  return (
    <div>
      <Paper style={{
        maxWidth: 720,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0px auto"
      }}>
        {empty ?
          <EmptyScreen/> :
          <div>
            You are connected
          </div>
        }
        <div>
          <BottomAppBar/>
          <Hidden only="xs">
            <EmojiPicker/>
          </Hidden>
        </div>
      </Paper>
    </div>
  );
}
