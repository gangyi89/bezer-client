import React from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { ListSubheader } from "@material-ui/core";

const manageSection = [
  { key: "stages", text: "Stages" },
  { key: "locations", text: "Locations" },
  { key: "events", text: "Events" },
];
const liveSection = [
  { key: "socialwall", text: "Social Wall" },
  { key: "actvities", text: "User Activities" },
  { key: "notification", text: "Notifications" },
];

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  iconRoot: {
    minWidth: 36,
  },
  subHeaderRoot: {
    fontSize: theme.typography.htmlFontSize,
  },
}));
const Sidedrawer = (props) => {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListSubheader component="div" className={classes.subHeaderRoot}>
          Manage
        </ListSubheader>
        {manageSection.map((route, index) => (
          <ListItem
            button
            key={route.key}
            component={Link}
            to={`/dashboard/${id}/${route.key}`}
            onClick={props.onClose}
          >
            <ListItemIcon className={classes.iconRoot}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={route.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader component="div" className={classes.subHeaderRoot}>
          Live
        </ListSubheader>
        {liveSection.map((route, index) => (
          <ListItem
            button
            key={route.key}
            component={Link}
            to={`/dashboard/${id}/${route.key}`}
          >
            <ListItemIcon className={classes.iconRoot}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={route.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidedrawer;
