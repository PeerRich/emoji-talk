import * as React from 'react';
import webShare, {WebShareInterface} from 'react-web-share-api';
import ShareSnackbar from "./ShareSnackbar";
import ShareIcon from '@material-ui/icons/Share';
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

const ShareButton = ({share, isSupported}) => isSupported
  ? <Fab onClick={share} color="secondary" aria-label="add" style={{
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  }}>
    <ShareIcon style={{color: "#fff"}}/>
  </Fab>
  :
  <ShareSnackbar/>
;

export default webShare()(ShareButton);
