import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBar from "../../../components/common/HeaderBar";
import Immutable from "seamless-immutable";
import Grid from "@material-ui/core/Grid";
import { LoaderSimple } from "../../../components/common";

import StagesTable from "./StagesTable";
import StageAddDialog from "./StageAddDialog";
import getStages from "../../../sagas/project/getStages";

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
  const { getStagesHandler, getStagesLoading, stages } = props;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState({});

  const handleAddRequest = () => {
    setSelectedItem("");
    setOpen(true);
  };

  const handleEditRequest = (item) => {
    console.log(item);
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getStagesHandler();
  }, [getStagesHandler]);

  useEffect(() => {
    const immutableData = Immutable.asMutable(stages);
    setData(immutableData);
  }, [stages]);

  const onAdd = (item) => {
    const updatedData = [...data, item];
    setData(updatedData);
  };

  const onUpdate = (item) => {
    const updatedData = data.map((row) => {
      if (item.id === row.id) return item;
      else return row;
    });
    setData(updatedData);
  };

  return (
    <>
      <HeaderBar text="Stages" />
      <StagesTable
        addHandler={handleAddRequest}
        editHandler={handleEditRequest}
        isLoading={getStagesLoading}
        data={data}
      />
      <StageAddDialog
        handleClose={handleClose}
        open={open}
        postStageHandler={props.postStageHandler}
        postStageLoading={props.postStageLoading}
        postStageError={props.postStageError}
        onAdd={onAdd}
        onUpdate={onUpdate}
        item={selectedItem}
      />
    </>
  );
};

Setup.propTypes = {
  postStageHandler: PropTypes.func.isRequired,
  postStageLoading: PropTypes.bool.isRequired,
  postStageError: PropTypes.string.isRequired,
  getStagesError: PropTypes.string.isRequired,
  getStagesLoading: PropTypes.bool.isRequired,
  getStagesHandler: PropTypes.func.isRequired,
  stages: PropTypes.array.isRequired,
};
export default Setup;
