import React from 'react';
import BottomAppBar from "./BottomAppBar";
import Paper from "@material-ui/core/Paper";
import EmojiPicker from "./EmojiPicker";
import EmptyScreen from "./EmptyScreen";
import Div100vh from 'react-div-100vh'

export default function App() {
  let empty = true;

  return (
    <div>
      <Paper style={{
        display: "flex",
        position: "relative",
        maxWidth: 720,
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0px auto",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      }}>
        {empty ?
          <EmptyScreen/> :
          <div>
            You are connected
          </div>
        }
        <div style={{position: "fixed", maxWidth: 720, bottom: -5}}>
          <BottomAppBar/>
          <EmojiPicker/>
        </div>
      </Paper>
    </div>
  );
}
