import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket("ws://localhost:8000/ws/chat/");

class App extends Component {
  componentDidMount() {
    client.onopen = () => {
      console.log("WebSocket Connected");
    };
    client.onmessage = (message) => {
      console.log(message.data);
    };
  }
  render() {
    return (
      <div>
        <h1>Indal</h1>
        <button
          onClick={() => {
            client.send(
              JSON.stringify({
                message: "Send by indal",
              })
            );
          }}
        >
          Send Chat
        </button>
      </div>
    );
  }
}
export default App;
