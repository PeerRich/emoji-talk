import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import ShareIcon from '@material-ui/icons/Share';
import Fab from "@material-ui/core/Fab";
import CopyToClipboard from "react-copy-to-clipboard";


type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

export default function ShareSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
  React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let url = "https://emojitalkie.com/";

  return (
  <>
    <CopyToClipboard text={url} onCopy={handleClick(TransitionUp)}>
      <Fab color="secondary" aria-label="add" style={{
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      }}>
        <ShareIcon style={{color: "#fff"}} />
      </Fab>
    </CopyToClipboard>
    <Snackbar
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    TransitionComponent={transition}
    message={<span>Your channel link has been copied to clipboard: <u style={{color: "#f50057"}}>{window.location.href}</u></span>}
    />
  </>
  );
}
