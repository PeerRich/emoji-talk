import React, {useEffect, useContext, useReducer} from "react";
/*import "./Call.css";*/
import Tile from "./Tile";
import CallObjectContext from "../CallObjectContext";
import CallMessage from "./CallMessage";
import {
  initialCallState,
  CLICK_ALLOW_TIMEOUT,
  PARTICIPANTS_CHANGE,
  CAM_OR_MIC_ERROR,
  FATAL_ERROR,
  callReducer,
  isLocal,
  isScreenShare,
  containsScreenShare,
  getMessage
} from "./callState";
import {logDailyEvent} from "../logUtils";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {ButtonBase, Tooltip} from '@material-ui/core';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import EmptyScreen from "./EmptyScreen";
import Progress from "./Progress";

export default function Call() {
  const callObject = useContext(CallObjectContext);
  const [callState, dispatch] = useReducer(callReducer, initialCallState);

  /**
   * Start listening for participant changes, when the callObject is set.
   */
  useEffect(() => {
    if (!callObject) return;

    const events = [
      "participant-joined",
      "participant-updated",
      "participant-left"
    ];

    function handleNewParticipantsState(event) {
      event && logDailyEvent(event);
      dispatch({
        type: PARTICIPANTS_CHANGE,
        participants: callObject.participants()
      });
    }

    // Use initial state
    handleNewParticipantsState();

    // Listen for changes in state
    for (const event of events) {
      callObject.on(event, handleNewParticipantsState);
    }

    // Stop listening for changes in state
    return function cleanup() {
      for (const event of events) {
        callObject.off(event, handleNewParticipantsState);
      }
    };
  }, [callObject]);

  /**
   * Start listening for call errors, when the callObject is set.
   */
  useEffect(() => {
    if (!callObject) return;

    function handleCameraErrorEvent(event) {
      logDailyEvent(event);
      dispatch({
        type: CAM_OR_MIC_ERROR,
        message:
          (event && event.errorMsg && event.errorMsg.errorMsg) || "Unknown"
      });
    }

    // We're making an assumption here: there is no camera error when callObject
    // is first assigned.

    callObject.on("camera-error", handleCameraErrorEvent);

    return function cleanup() {
      callObject.off("camera-error", handleCameraErrorEvent);
    };
  }, [callObject]);

  /**
   * Start listening for fatal errors, when the callObject is set.
   */
  useEffect(() => {
    if (!callObject) return;

    function handleErrorEvent(e) {
      logDailyEvent(e);
      dispatch({
        type: FATAL_ERROR,
        message: (e && e.errorMsg) || "Unknown"
      });
    }

    // We're making an assumption here: there is no error when callObject is
    // first assigned.

    callObject.on("error", handleErrorEvent);

    return function cleanup() {
      callObject.off("error", handleErrorEvent);
    };
  }, [callObject]);

  /**
   * Start a timer to show the "click allow" message, when the component mounts.
   */
  useEffect(() => {
    const t = setTimeout(() => {
      dispatch({type: CLICK_ALLOW_TIMEOUT});
    }, 2500);

    return function cleanup() {
      clearTimeout(t);
    };
  }, []);

  function getTiles() {
    let largeTiles = [];
    let smallTiles = [];
    Object.entries(callState.callItems).forEach(([id, callItem]) => {
      const isLarge =
        isScreenShare(id) ||
        (!isLocal(id) && !containsScreenShare(callState.callItems));
      const tile = (
        <Tile
          key={id}
          videoTrack={callItem.videoTrack}
          audioTrack={callItem.audioTrack}
          isLocalPerson={isLocal(id)}
          isLarge={isLarge}
          isLoading={callItem.isLoading}
        />
      );
      if (isLarge) {
        largeTiles.push(tile);
      } else {
        smallTiles.push(tile);
      }
    });
    return [largeTiles, smallTiles];
  }

  const [largeTiles, smallTiles] = getTiles();

  let loading = callState.participants && Object.keys(callState.participants).length === 0;
  let empty = callState.participants && Object.keys(callState.participants).length === 1;

  callState.participants && console.log(Object.keys(callState.participants).length);

  const message = getMessage(callState);
  return (
    <div>

      <div style={{padding: "24px 0"}}>

        {loading && <div style={{position: "absolute", left: 0, right: 0, top: 0}}>
          <Progress blocked/>
        </div>}

        {empty ? <EmptyScreen/> : <Grid className="people" container justify="center" spacing={2}>
          {callState.participants && Object.keys(callState.participants).map(x => {
            return <Grid key={x} item xs={6} sm={4}>
              <Paper style={{position: "relative", height: 0, paddingTop: "100%", width: "100%"}}>
                <Tooltip title="Coming Soon" aria-label="Coming Soon">
                  <ButtonBase className="volume-off-icon"
                              style={{position: "absolute", top: 0, width: "100%", height: "100%"}}>
                    <VolumeOffIcon style={{color: "#fff"}}/>
                    <div style={{display: "none"}}>{x + ": " + JSON.stringify(callState.participants[x])}</div>
                  </ButtonBase>
                </Tooltip>
              </Paper>
            </Grid>
          })}
        </Grid>}

        {/*<Grid className="people" container justify="center" spacing={2}>
          [0, 1, 2, 3, 4].map(value => (
          <Grid key={value} item xs={6} sm={4}>
            <Paper style={{position: "relative", height: 0, paddingTop: "100%", width: "100%"}}>
              <ButtonBase className="volume-off-icon" style={{position: "absolute", top: 0, width: "100%", height: "100%"}}>
                <VolumeOffIcon style={{color: "#fff"}}/>
              </ButtonBase>
            </Paper>
          </Grid>
        ))

        <Grid item xs={6} sm={4}>
          <Paper className="add-person" style={{position: "relative", height: 0, paddingTop: "100%", width: "100%"}}>
            <ButtonBase style={{position: "absolute", top: 0, width: "100%", height: "100%"}}>
              <AddIcon style={{color: "#757ce8"}}/>
            </ButtonBase>
          </Paper>
        </Grid>
        </Grid>
        */}

      </div>

      <div>
        <small>
          <strong className="brand">EmojiTalkie</strong> (v.0.0.2) is a one man show created by <a target="_blank"
                                                                                                   href="https://twitter.com/peer_rich">@Peer_Rich</a> to
          help you feel less lonely and meet new people during quarantine. Starting with the YC Alumni Community, our
          goal is to offer a safe space to hang out casually and talk about topics based on the EmojiChannel. This
          project is proudly #sponsored and powered by
          the <strong><a target="_blank"
                         href="https://daily.co/">daily.co</a> (W16)</strong> infrastructure (huge thank you, <a
          target="_blank" href="https://twitter.com/kwindla">Kwin</a>).
          We'll be adding more stuff in the next few weeks of the COVID-19 quarantine. Coming up next in unsorted
          priority: <br/><br/>
          <strong>MVP Roadmap</strong>
          <ul>
            <li>✅ <s>Show participants in each channel as a color</s></li>
            <li>✅ <s>Show loading indicator and empty screen</s></li>
            <li>✅ <s>Show most frequently joiined EmojiChannels</s></li>
            <li>✅ <s>Vastly increase connection to channels</s></li>
            <li>Add PWA (standalone) support</li>
            <li>Make URL copy & shareable</li>
            <li>Show how many people are in a room</li>
            <li>Mute other participants</li>
            <li>Show your own audio level</li>
            <li>Toggle empty/non-empty channels</li>
            <li>Add "Local" category to only talk to people in your GPS region</li>
            <li>Settings (i.e. change Microphone, level)</li>
            <li>NSFW channels and age restriction: 🔞👅🍆🍑🌿🚬</li>
            <li>Add your own <a href="mailto:features@emojitalkie.com">feature request</a> or <a
              href="mailto:bug@emojitalkie.com">bug
              report</a></li>
          </ul>
        </small>
      </div>
      {/*
      <Channel/>
      */}
      <div className="call">
        {message && (
          <CallMessage
            header={message.header}
            detail={message.detail}
            isError={message.isError}
          />
        )}
        <div className="large-tiles">
          {!message
            ? largeTiles
            : null}
        </div>
        <div className="small-tiles">{smallTiles}</div>
      </div>
    </div>
  );
}
