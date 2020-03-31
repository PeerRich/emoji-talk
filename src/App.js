import React from 'react';
import BottomAppBar from "./BottomAppBar";
import Paper from "@material-ui/core/Paper";
import EmojiPicker from "./EmojiPicker";
import HomeScreen from "./HomeScreen";
import EmptyScreen from "./EmptyScreen";
import Channel from "./Channel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";

export default function App() {
  let inChannel = true;
  let isEmpty = false;

  return (
    <div>
      <Paper className="app">
        <div>
          <div className="content">
            <div>
              {inChannel ?
                isEmpty ? <EmptyScreen/> : <Channel/>
                : <HomeScreen/>
              }
            </div>
          </div>
        </div>
        <div className="channels">
          <div className="bottomAppBarWrapper">
            <BottomAppBar/>
          </div>
          <div className="EmojiPickerWrapper">
            <Divider />
            <Tabs variant="fullWidth"
              indicatorColor="primary"
              textColor="primary">
              <Tab label="Global Channel"/>
              <Tab disabled label="Local Channel"/>
            </Tabs>
            <EmojiPicker/>
          </div>
        </div>
      </Paper>
    </div>
  );
}
