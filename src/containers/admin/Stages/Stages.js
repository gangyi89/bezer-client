import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { HeaderBar, Table } from "../../../components/common";
import Immutable from "seamless-immutable";
import StageAddDialog from "./StageAddDialog";
import StageDeleteDialog from "./StageDeleteDialog";

const Setup = (props) => {
  const { getStagesHandler, getStagesLoading, stages } = props;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState("");
  const [openDelete, setOpenDelete] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});
  const columns = [
    {
      title: "Level",
      field: "level",
      type: "numeric",
      width: "100px",
    },
    {
      title: "Name",
      field: "name",
      width: "250px",
    },
    {
      title: "Description",
      field: "description",
    },
  ];

  const handleDeleteRequest = (item) => {
    setSelectedItem(item);
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handleAddRequest = () => {
    setSelectedItem("");
    setOpen(true);
  };

  const handleEditRequest = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //should only be fired once
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

  const onDelete = (item) => {
    const updatedData = data.filter((row) => item.id !== row.id);
    setData(updatedData);
  };

  return (
    <>
      <HeaderBar text="Stages" />
      <Table
        addHandler={handleAddRequest}
        editHandler={handleEditRequest}
        deleteHandler={handleDeleteRequest}
        isLoading={getStagesLoading}
        data={data}
        columns={columns}
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
      <StageDeleteDialog
        deleteStageHandler={props.deleteStageHandler}
        deleteStageLoading={props.deleteStageLoading}
        deleteStageError={props.deleteStageError}
        open={openDelete}
        handleClose={handleDeleteClose}
        item={selectedItem}
        onDelete={onDelete}
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
  deleteStageHandler: PropTypes.func.isRequired,
  deleteStageError: PropTypes.string.isRequired,
  deleteStageLoading: PropTypes.bool.isRequired,
  stages: PropTypes.array.isRequired,
};
export default Setup;
