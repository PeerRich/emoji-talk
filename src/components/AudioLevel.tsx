import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() =>
createStyles({
  root: {
    display: "flex",
    width: '100%',
  },
}),
);


/*
* TODO: Get Audio Level and use it instead of progress();
* */

export default function AudioLevel() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
  <div className={classes.root}>
    <LinearProgress style={{width: "50%", transform: "scaleX(-1)"}} variant="determinate" value={completed} color="secondary" />
    <LinearProgress style={{width: "50%"}} variant="determinate" value={completed} color="secondary" />
  </div>
  );
}
