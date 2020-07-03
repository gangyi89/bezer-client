import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "scroll",
    [theme.breakpoints.down("xs")]: {
      width: "363px",
    },
    marginTop: theme.spacing(4),
  },
}));

const StagesTable = (props) => {
  const data = JSON.parse(JSON.stringify(props.data));

  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Level",
        field: "level",
        type: "numeric",
        width: "100px",
      },
      {
        title: "Name",
        field: "id",
        width: "250px",
      },
      {
        title: "Description",
        field: "description",
      },
    ],
  });

  return (
    <div className={classes.root}>
      <MaterialTable
        isLoading={props.isLoading}
        title=""
        columns={state.columns}
        data={data}
        actions={[
          {
            icon: (props) => <EditIcon color="action" />,
            tooltip: "Edit item",
            onClick: (event, rowData) => props.editHandler(rowData),
          },
          {
            icon: (props) => <DeleteIcon color="action" />,
            tooltip: "remove item",
            onClick: (event, rowData) => alert("You delete " + rowData.name),
          },
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event) => props.addHandler(),
          },
        ]}
      />
    </div>
  );
};

export default StagesTable;
