import React from "react";
/*import "./TrayButton.css";*/
import Icon, {
  TYPE_MUTE_CAMERA,
  TYPE_MUTE_MIC,
  TYPE_SCREEN,
  TYPE_LEAVE
} from "./Icon";
import IconButton from "@material-ui/core/IconButton";

/**
 * Props:
 * - type: string
 * - disabled: boolean
 * - highlighted: boolean
 * - onClick: () => ()
 * - newButtonGroup: boolean
 */
export default function TrayButton(props) {
  return (
    <IconButton
      color="inherit"
      disabled={props.disabled}
      onClick={props.onClick}
      className={"tray-button" + (props.newButtonGroup ? " new-group" : "")}
    >
      <Icon type={props.type} highlighted={props.highlighted} />
    </IconButton>
  );
}

export { TYPE_MUTE_CAMERA, TYPE_MUTE_MIC, TYPE_SCREEN, TYPE_LEAVE };
