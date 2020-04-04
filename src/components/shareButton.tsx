import * as React from 'react';
import webShare, {WebShareInterface} from 'react-web-share-api';
import ShareSnackbar from "./ShareSnackbar";
import Toolbar from "@material-ui/core/Toolbar";
import ShareIcon from '@material-ui/icons/Share';
import Fab from "@material-ui/core/Fab";


const ShareButton: React.StatelessComponent<WebShareInterface> = ({
                                                                    share, isSupported,
                                                                  }) => isSupported
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
: <ShareSnackbar/>
;

export default webShare()(ShareButton);
