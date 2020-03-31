import React from 'react';
import BottomAppBar from "./BottomAppBar";
import Paper from "@material-ui/core/Paper";
import EmojiPicker from "./EmojiPicker";
import HomeScreen from "./HomeScreen";
import EmptyScreen from "./EmptyScreen";
import Channel from "./Channel";

export default function App() {
  let inChannel = false;
  let isEmpty = true;

  return (
    <div>
      <Paper className="app">
        <div className="content">
          <div style={{width: 400, height: 400}}>
            {inChannel ?
              isEmpty ? <EmptyScreen/> : <Channel />
              : <HomeScreen/>
            }
          </div>

        </div>
        <div className="channels">
          <div className="bottomAppBarWrapper">
            <BottomAppBar/>
          </div>
          <div className="EmojiPickerWrapper">
            <EmojiPicker/>
          </div>
        </div>
      </Paper>
    </div>
  );
}
