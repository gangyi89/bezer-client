import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

const ProjectSelector = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const currentProject = props.currentProject.name;
  const projects = props.projects;

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
            key={project.id}
            onClick={handleClose}
            component={Link}
            to={`/dashboard/${project.id}`}
          >
            {project.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

ProjectSelector.propTypes = {
  currentProject: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
};

export default ProjectSelector;
