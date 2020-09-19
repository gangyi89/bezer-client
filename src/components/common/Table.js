import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import PropTypes from "prop-types";
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

const Table = (props) => {
  const data = JSON.parse(JSON.stringify(props.data));
  const columns = props.columns;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MaterialTable
        isLoading={props.isLoading}
        title=""
        columns={columns}
        data={data || []}
        actions={[
          {
            icon: (props) => <EditIcon color="action" />,
            tooltip: "Edit item",
            onClick: (event, rowData) => props.editHandler(rowData),
          },
          {
            icon: (props) => <DeleteIcon color="action" />,
            tooltip: "remove item",
            onClick: (event, rowData) => props.deleteHandler(rowData),
          },
          {
            icon: "add",
            tooltip: "Add item",
            isFreeAction: true,
            onClick: (event) => props.addHandler(),
          },
        ]}
      />
    </div>
  );
};

Table.propTypes = {
  addHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
};

export default Table;
