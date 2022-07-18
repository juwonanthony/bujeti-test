import { Dialog } from "@material-ui/core";
import Loader from "react-loader-spinner";
import React from "react";
import ReactDOM from "react-dom";
import reactDom from "react-dom";
import CustomSnackbar from "../component/snacknar";
export function addLoader() {
  ReactDOM.render(
    <Dialog
      open={true}
      fullWidth
      fullScreen
      PaperComponent="div"
      PaperProps={{
        style: {
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          backgroundColor: "transparent",
        },
      }}
    >
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000}
      />
      {/* <CircularProgress color="secondary" size={100} thickness={1.5} /> */}
    </Dialog>,
    document.getElementById("loader")
  );
}
export function removeLoader() {
  reactDom.unmountComponentAtNode(document.getElementById("loader"));
}

export function addSuccessMessage(message) {
  reactDom.render(
    <CustomSnackbar
      message={message}
      color="success"
      renderElement={document.getElementById("alertMessage")}
    />,
    document.getElementById("alertMessage")
  );
}
export function addErrorMessage(message) {
  reactDom.render(
    <CustomSnackbar
      message={message}
      color="error"
      renderElement={document.getElementById("alertMessage")}
    />,
    document.getElementById("alertMessage")
  );
}
