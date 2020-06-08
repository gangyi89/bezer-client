import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AddProjectCard from "../../components/ProjectCard/AddProjectCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Grid from "@material-ui/core/Grid";

const projects = [
  { key: "project1", text: "Project 1" },
  { key: "project2", text: "Project 2" },
  { key: "project3", text: "Project 3" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const ProjectCardList = () => {
  const classes = useStyles();

  console.log("project card list render");

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item>
        <AddProjectCard />
      </Grid>
      {projects.map((project) => (
        <Grid key={project.key} item>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCardList;
