import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import ShareIcon from '@material-ui/icons/Share';
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));
type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

export default function ShareSnackbar() {
  const classes = useStyles();
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

  return (
  <>
    <Fab onClick={handleClick(TransitionUp)} color="secondary" aria-label="add" className={classes.fabButton}>
      <ShareIcon style={{color: "#fff"}} />
    </Fab>
    <Snackbar
    open={open}
    onClose={handleClose}
    TransitionComponent={transition}
    message="Your channel link has been copied to clipboard"
    />
  </>
  );
}
