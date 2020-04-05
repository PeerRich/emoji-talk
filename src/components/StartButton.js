import React from "react";
/*import "./StartButton.css";*/
import Button from "@material-ui/core/Button";

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function StartButton(props) {
  return (
    <Button color="primary" variant="contained" style={{marginTop: 16}} size="small"
      className="start-button"
      disabled={props.disabled}
      onClick={props.onClick}>
      Join Channel
    </Button>
  );
}
