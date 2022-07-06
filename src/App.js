import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Modal from "react-modal";

import { confirmationFlow, useConfirmationFlow } from "./confirmationFlow";

const apiDeleteResource = async () => {
  return new Promise((resolve) => {
    console.log("Deleting [XYZ]");
    setTimeout(() => {
      console.log("[Deleted [XYZ]");
      resolve();
    }, 1000);
  });
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const confirmationFlowInst = confirmationFlow(apiDeleteResource)

function App() {
  const dispatcher = useConfirmationFlow(confirmationFlowInst);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current state: {dispatcher.name()}</p>
        <button onClick={() => dispatcher.dialog()}>Open Modal</button>
        <Modal
          onRequestClose={() => dispatcher.cancel()}
          isOpen={dispatcher.isOpen()}
          style={customStyles}
        >
          <p>Are you sure?</p>
          <div>
            <button onClick={() => dispatcher.confirm()}>Confirm</button>
            <button onClick={() => dispatcher.cancel()}>Cancel</button>
          </div>
        </Modal>
      </header>
    </div>
  );
}

export default App;
