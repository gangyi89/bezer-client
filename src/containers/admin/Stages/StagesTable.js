import React from "react";
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
        field: "name",
        width: "250px",
      },
      {
        title: "Description",
        field: "description",
      },
    ],
    data: [
      {
        name: "Mehmet",
        description: "fsdfsdf",
        level: 1,
      },
      {
        name: "lala",
        description: "fsdfsdffdfdfdfsdffdfdfdfsdfsdff",
        level: 2,
      },
      {
        name: "chipiti",
        description: "fsdfsdf",
        level: 3,
      },
    ],
  });

  return (
    <div className={classes.root}>
      <MaterialTable
        title=""
        columns={state.columns}
        data={state.data}
        actions={[
          {
            icon: (props) => <EditIcon color="action" />,
            tooltip: "Edit item",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
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
            onClick: (event) => props.AddHandler(),
          },
        ]}
      />
    </div>
  );
};

export default StagesTable;
