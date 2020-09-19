import React from "react";
import Button from "../../../components/common/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const StageDeleteDialog = (props) => {
  const {
    open,
    item,
    onDelete,
    handleClose,
    deleteStageHandler,
    deleteStageLoading,
  } = props;

  const submitHandler = () => {
    const data = { ...item };
    deleteStageHandler({
      data,
      handleClose,
      updateTable: onDelete,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`Are you sure you want to delete ${item.name}?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          isLoading={deleteStageLoading}
          onClick={submitHandler}
          color="primary"
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StageDeleteDialog;
