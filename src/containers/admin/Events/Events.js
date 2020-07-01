import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
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
  },
  table: {
    width: "340px",
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
}));

const Events = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Stage", field: "stage" },
      { title: "Location", field: "location" },
    ],
    data: [
      {
        name: "Mehmet",
        description: "fsdfsdf",
        stage: "Baran",
        location: "hello",
      },
      {
        name: "lala",
        description: "fsdfsdffdfdfdfsdffdfdfdfsdffdfdfdfsdffdfdfd",
        stage: "abc",
        location: "hi",
      },
      {
        name: "chipiti",
        description: "fsdfsdf",
        stage: "Baran",
        location: "hello",
      },
    ],
  });

  return (
    <Paper className={classes.root}>
      <MaterialTable
        title="Editable Example"
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
        ]}
      />
    </Paper>
  );
};

export default Events;
