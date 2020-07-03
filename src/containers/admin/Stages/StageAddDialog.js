import React, { useState, useEffect } from "react";
import Button from "../../../components/common/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { Alert, AlertTitle } from "@material-ui/lab";

const StageAddDialog = (props) => {
  const { item } = props;
  const [id, setId] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setId(item.id);
    setDescription(item.description);
    setLevel(item.level);
  }, [item]);
  const updateName = (event) => {
    setId(event.target.value);
  };
  const updateLevel = (event) => {
    setLevel(event.target.value);
  };
  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  const clearState = () => {
    setId("");
    setLevel("");
    setDescription("");
  };

  const submitHandler = () => {
    const data = { id, level, description };
    const { handleClose, onAdd, onUpdate } = props;
    console.log(item);
    props.postStageHandler({
      data,
      handleClose,
      clearState,
      updateTable: item === "" ? onAdd : onUpdate,
    });
  };

  console.log(`item data is ${id}`);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Stage</DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Stage Name"
                type="text"
                variant="outlined"
                fullWidth
                value={id}
                onChange={updateName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                margin="dense"
                id="level"
                label="Stage Level"
                type="text"
                variant="outlined"
                fullWidth
                value={level}
                onChange={updateLevel}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description"
                margin="normal"
                multiline
                variant="outlined"
                rows={5}
                fullWidth
                value={description}
                onChange={updateDescription}
              />
            </Grid>

            {props.postStageError === "" ? null : (
              <Grid item xs={12}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong>{props.postStageError}</strong>
                </Alert>
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={submitHandler}
            color="primary"
            isLoading={props.postStageLoading}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StageAddDialog;
