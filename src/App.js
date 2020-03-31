import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import BottomAppBar from "./BottomAppBar";
import Paper from "@material-ui/core/Paper";
import EmojiPicker from "./EmojiPicker";


export default function App() {
  return (
    <Container maxWidth="sm">
      <Paper style={{maxWidth: 720, minHeight: 400, margin: "0 auto"}}>
        <BottomAppBar/>
        <EmojiPicker />
      </Paper>
    </Container>
  );
}
