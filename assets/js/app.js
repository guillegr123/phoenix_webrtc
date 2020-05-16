// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

import channel from './socket';

const connectButton = document.getElementById('connect');
const callButton = document.getElementById('call');
const disconnectButton = document.getElementById('disconnect');

const remoteVideo = document.getElementById('remote-stream');
const localVideo = document.getElementById('remote-stream');
const remoteStream = new MediaStream();

setVideoStream(remoteVideo, remoteStream);

let peerConnection;

disconnect.disabled = true;
call.disabled = true;
connectButton.onclick = connect;
callButton.onclick = call;
disconnectButton.onclick = disconnect;

const reportError = where => error => {
    console.error(where, error)
}

function log() {
    console.log(...arguments)
}
