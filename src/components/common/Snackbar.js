import React from "react";
import PropTypes from "prop-types";
import MuiSnackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Snackbar = (props) => {
  return (
    <div>
      <MuiSnackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
        message={props.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={props.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

Snackbar.protoTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.object.isRequired,
};

export default Snackbar;
