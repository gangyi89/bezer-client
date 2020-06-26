import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { blue } from "@material-ui/core/colors";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const data = {
  name: "Lim Gang Yi",
  gender: "male",
  occupation: "Single Father",
  values: "belives in 123",
  priority: "family first before all others",
  age: 31,
};

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
  headerTitle: {
    fontSize: theme.body1,
  },
  headerSubheader: {
    fontSize: theme.body1,
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        titleTypographyProps={{ variant: "body1" }}
        subheaderTypographyProps={{ variant: "body2" }}
        title={data.name}
        subheader={`${data.age}, ${data.occupation}`}
      />
    </Card>
  );
}
