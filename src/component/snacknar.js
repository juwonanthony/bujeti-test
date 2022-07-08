import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReactDOM from "react-dom";
import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
export default function CustomSnackbar(props) {
  //   const [message, color, renderElement] = props;
  const [open, setClose] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    ReactDOM.unmountComponentAtNode(props.renderElement);
    setClose(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        // onExited={handleExited}
        // message={props.message}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              //   className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={props.color}
        >
          {props.message}
        </MuiAlert>
        {/* <Alert onClose={handleClose} severity="success">

        </Alert> */}
      </Snackbar>
    </div>
  );
}
