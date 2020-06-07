import React from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles(() => ({
  root: {
    textTransform: "none",
  },
}));

const projects = [
  { key: "project1", text: "Project 1" },
  { key: "project2", text: "Project 2" },
];

const ProjectSelector = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  let { id } = useParams();
  const currentProject = projects.find((e) => e.key === id).text;

  return (
    <>
      <Button
        className={classes.root}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {currentProject}
        <ArrowDropDown />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {projects.map((project) => (
          <MenuItem
            key={project.key}
            onClick={handleClose}
            component={Link}
            to={`/dashboard/${project.key}`}
          >
            {project.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ProjectSelector;
