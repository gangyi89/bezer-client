import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../../layout/AppBar/AppBar";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProjectCardList from "../../components/Project/ProjectCardList";
import CreateProjectDialog from "../../components/Project/CreateProjectDialog";

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
  const { getProjectsHandler, projects } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getProjectsHandler();
  }, [getProjectsHandler]);

  useEffect(() => {}, [projects]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (projectName) => {
    props.createProjectHandler({ name: projectName });
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
            selectProject={props.updateCurrentProjectHandler}
          />
        </div>
        <CreateProjectDialog
          handleClose={handleClose}
          open={open}
          onSubmit={onSubmit}
          isLoading={props.createProjectIsLoading}
        />
      </Container>
    </>
  );
};

Select.propTypes = {
  projects: PropTypes.array.isRequired,
  createProjectHandler: PropTypes.func.isRequired,
  updateCurrentProjectHandler: PropTypes.func.isRequired,
  getProjectsHandler: PropTypes.func.isRequired,
  createProjectError: PropTypes.string.isRequired,
  createProjectIsLoading: PropTypes.bool.isRequired,
  getProjectLoading: PropTypes.bool.isRequired,
  getProjectError: PropTypes.string.isRequired,
};

export default memo(Select);
