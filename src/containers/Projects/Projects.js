import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../../layout/AppBar/AppBar";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProjectCardList from "../../components/Project/ProjectCardList";
import CreateProjectDialog from "../../components/Project/CreateProjectDialog";

const projects = [
  { key: "project1", text: "Project 1" },
  { key: "project2", text: "Project 2" },
  { key: "project3", text: "Project 3" },
];

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

const Select = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    props.createProject({ name: "test" });
  };

  return (
    <>
      <AppBar login />
      <Container>
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <HeaderBar text="Projects" />
          <Typography variant="h6" component="h2" className={classes.subHeader}>
            Your community projects
          </Typography>
          <ProjectCardList
            handleClickOpen={handleClickOpen}
            projects={projects}
          />
        </div>
        <CreateProjectDialog
          handleClose={handleClose}
          open={open}
          onSubmit={onSubmit}
        />
      </Container>
    </>
  );
};

export default Select;
