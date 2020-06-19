import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../common/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  scrollPaper: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
}));
const FormDialog = (props) => {
  const [name, setName] = useState("");

  const classes = useStyles();

  const updateName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ scrollPaper: classes.scrollPaper }}
      >
        <DialogTitle id="form-dialog-title">Add a New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give a unique project name. Access code will be generated.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project name"
            type="text"
            fullWidth
            value={name}
            onChange={updateName}
          />
        </DialogContent>
        <DialogActions>
          {props.isLoading ? null : (
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
          )}
          {/* <Button onClick={props.handleClose} color="primary"> */}
          <Button
            onClick={() => props.onSubmit(name)}
            color="primary"
            isLoading={props.isLoading}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
