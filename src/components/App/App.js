import React, {useEffect, useState, useCallback} from "react";
import Call from "../Call/Call";
import StartButton from "../StartButton/StartButton";
import api from "../../api";
import "./App.css";
import Tray from "../Tray/Tray";
import CallObjectContext from "../../CallObjectContext";
import {roomUrlFromPageUrl, pageUrlFromRoomUrl} from "../../urlUtils";
import DailyIframe from "@daily-co/daily-js";
import {logDailyEvent} from "../../logUtils";
import BottomAppBar from "../BottomAppBar";
import Paper from "@material-ui/core/Paper";
import EmojiPicker from "../EmojiPicker";
import HomeScreen from "../HomeScreen";
import EmptyScreen from "../EmptyScreen";
import Channel from "../Channel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import AddToHomeScreenDialog from "../AddToHomeScreenDialog";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import {Emoji} from "../../helpers";
import Button from "@material-ui/core/Button";

const STATE_IDLE = "STATE_IDLE";
const STATE_CREATING = "STATE_CREATING";
const STATE_JOINING = "STATE_JOINING";
const STATE_JOINED = "STATE_JOINED";
const STATE_LEAVING = "STATE_LEAVING";
const STATE_ERROR = "STATE_ERROR";

export default function App() {
  const [appState, setAppState] = useState(STATE_IDLE);
  const [roomUrl, setRoomUrl] = useState(null);
  const [callObject, setCallObject] = useState(null);

  /**
   * Creates a new call room.
   */
  const createCall = useCallback(() => {
    setAppState(STATE_CREATING);
    return api
      .createRoom()
      .then(room => room.url)
      .catch(error => {
        console.log("Error creating room", error);
        setRoomUrl(null);
        setAppState(STATE_IDLE);
      });
  }, []);

  /**
   * Starts joining an existing call.
   *
   * NOTE: In this demo we show how to completely clean up a call with destroy(),
   * which requires creating a new call object before you can join() again.
   * This isn't strictly necessary, but is good practice when you know you'll
   * be done with the call object for a while and you're no longer listening to its
   * events.
   */
  const startJoiningCall = useCallback(url => {
    const newCallObject = DailyIframe.createCallObject();
    setRoomUrl(url);
    setCallObject(newCallObject);
    setAppState(STATE_JOINING);
    newCallObject.join({url});
  }, []);

  /**
   * Starts leaving the current call.
   */
  const startLeavingCall = useCallback(() => {
    if (!callObject) return;
    setAppState(STATE_LEAVING);
    callObject.leave();
  }, [callObject]);

  /**
   * If a room's already specified in the page's URL when the component mounts,
   * join the room.
   */
  useEffect(() => {
    const url = roomUrlFromPageUrl();
    url && startJoiningCall(url);
  }, [startJoiningCall]);

  /**
   * Update the page's URL to reflect the active call when roomUrl changes.
   *
   * This demo uses replaceState rather than pushState in order to avoid a bit
   * of state-management complexity. See the comments around enableCallButtons
   * and enableStartButton for more information.
   */
  useEffect(() => {
    const pageUrl = pageUrlFromRoomUrl(roomUrl);
    if (pageUrl === window.location.href) return;
    window.history.replaceState(null, null, pageUrl);
  }, [roomUrl]);

  /**
   * Uncomment to attach call object to window for debugging purposes.
   */
  // useEffect(() => {
  //   window.callObject = callObject;
  // }, [callObject]);

  /**
   * Update app state based on reported meeting state changes.
   *
   * NOTE: Here we're showing how to completely clean up a call with destroy().
   * This isn't strictly necessary between join()s, but is good practice when
   * you know you'll be done with the call object for a while and you're no
   * longer listening to its events.
   */
  useEffect(() => {
    if (!callObject) return;

    const events = ["joined-meeting", "left-meeting", "error"];

    function handleNewMeetingState(event) {
      event && logDailyEvent(event);
      switch (callObject.meetingState()) {
        case "joined-meeting":
          setAppState(STATE_JOINED);
          break;
        case "left-meeting":
          callObject.destroy().then(() => {
            setRoomUrl(null);
            setCallObject(null);
            setAppState(STATE_IDLE);
          });
          break;
        case "error":
          setAppState(STATE_ERROR);
          break;
        default:
          break;
      }
    }

    // Use initial state
    handleNewMeetingState();

    // Listen for changes in state
    for (const event of events) {
      callObject.on(event, handleNewMeetingState);
    }

    // Stop listening for changes in state
    return function cleanup() {
      for (const event of events) {
        callObject.off(event, handleNewMeetingState);
      }
    };
  }, [callObject]);

  /**
   * Show the call UI if we're either joining, already joined, or are showing
   * an error.
   */
  const showCall = [STATE_JOINING, STATE_JOINED, STATE_ERROR].includes(
    appState
  );

  /**
   * Only enable the call buttons (camera toggle, leave call, etc.) if we're joined
   * or if we've errored out.
   *
   * !!!
   * IMPORTANT: calling callObject.destroy() *before* we get the "joined-meeting"
   * can result in unexpected behavior. Disabling the leave call button
   * until then avoids this scenario.
   * !!!
   */
  const enableCallButtons = [STATE_JOINED, STATE_ERROR].includes(appState);

  /**
   * Only enable the start button if we're in an idle state (i.e. not creating,
   * joining, etc.).
   *
   * !!!
   * IMPORTANT: only one call object is meant to be used at a time. Creating a
   * new call object with DailyIframe.createCallObject() *before* your previous
   * callObject.destroy() completely finishes can result in unexpected behavior.
   * Disabling the start button until then avoids that scenario.
   * !!!
   */
  const enableStartButton = appState === STATE_IDLE;

  let inChannel = false;
  let isEmpty = false;

  return (
    <div className="wrapper">
      <Hidden smUp>
        <div className="hidden-standalone">
          <AddToHomeScreenDialog/>
        </div>
      </Hidden>
      <Paper className="app">
        <div style={{width: "100%", height: "100%"}}>
          <div className="content">
            <div>
              {showCall ?
                isEmpty ? <EmptyScreen/>
                  : <CallObjectContext.Provider value={callObject}>
                    <Call roomUrl={roomUrl}/>
                    {/*
                    TODO: not sure if this works
                    <Tray
                        disabled={!enableCallButtons}
                        onClickLeaveCall={startLeavingCall}
                      />
                      */}
                  </CallObjectContext.Provider>
                : <div style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  display: "flex",
                }}>
                  <div style={{textAlign: "center", padding: "10% 0px", maxWidth: 450}}>
                    <img src="https://twemoji.maxcdn.com/v/12.1.5/svg/1f44b.svg"
                         style={{height: 100, width: 100, marginBottom: 20}}/>
                    <Typography style={{fontSize: 14}} color="textSecondary" gutterBottom>
                      Hello Stranger,
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Welcome to <Emoji>📻</Emoji> <strong className="brand">EmojiTalkie</strong>
                    </Typography>
                    <Typography style={{marginBottom: 12}} color="textSecondary">
                      The anonymous voice chat community
                    </Typography>
                    <Typography variant="body2" component="p">
                      Join emoji channels and socalise with strangers about your favorite topics. You can mute a person with one <i>tap</i>{/*, or
                      permanently block them with a <i>double-tap</i>*/}. No account. No down load. It's that simple.
                    </Typography>
                    <div style={{display: "flex", margin: "20px"}}>
                      <StartButton
                        disabled={!enableStartButton}
                        onClick={() => {
                          createCall().then(url => startJoiningCall(url));
                        }}
                      />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="channels">
          <div className="bottomAppBarWrapper">
            <BottomAppBar muteIcon={
              <CallObjectContext.Provider value={callObject}>
                <Tray
                  disabled={!enableCallButtons}
                  onClickLeaveCall={startLeavingCall}
                />
              </CallObjectContext.Provider>
            }/>
          </div>
          <div className="EmojiPickerWrapper">
            <Divider/>
            <Tabs variant="fullWidth"
                  indicatorColor="primary"
                  textColor="primary">
              <Tab label="Global"/>
              <Tab label="Local"/>
            </Tabs>
            <EmojiPicker/>
          </div>
        </div>
      </Paper>
    </div>
  );
}
