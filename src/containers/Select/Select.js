import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../../layout/AppBar/AppBar";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProjectCardList from "./ProjectCardList";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // adding custom margin for main container
  toolbar: {
    marginTop: theme.spacing(5),
  },
  subHeader: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

const Select = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar login />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <HeaderBar text="Projects" />
        <Typography variant="h6" component="h2" className={classes.subHeader}>
          Your community projects
        </Typography>
        <Container>
          <ProjectCardList />
        </Container>
      </div>
    </>
  );
};

export default Select;
