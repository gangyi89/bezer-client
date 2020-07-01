import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBar from "../../../components/common/HeaderBar";
import Grid from "@material-ui/core/Grid";

import StagesTable from "./StagesTable";
import StageAddDialog from "./StageAddDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const Setup = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <HeaderBar text="Stages" />
      <StagesTable AddHandler={handleClickOpen} />
      <StageAddDialog
        handleClose={handleClose}
        open={open}
        postStageHandler={props.postStageHandler}
        postStageLoading={props.postStageLoading}
        postStageError={props.postStageError}
      />
    </>
  );
};

Setup.propTypes = {
  postStageHandler: PropTypes.func.isRequired,
  postStageLoading: PropTypes.bool.isRequired,
  postStageError: PropTypes.string.isRequired,
};
export default Setup;
