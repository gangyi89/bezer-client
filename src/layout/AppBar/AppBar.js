import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ProjectSelector from "./ProjectSelector/ProjectSelector";
import InfoSelector from "./InfoSelector";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Logo from "../../components/common/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBarBg: {
    backgroundColor: "#f6f7f9",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  project: {
    textTransform: "none",
  },
}));

const ElevationScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const PrimaryAppBar = (props) => {
  console.log("Appbar render");
  const classes = useStyles();

  const accessCodeLabel = () => {
    return (
      <Box display="flex" alignItems="center">
        <Box style={{ marginRight: 8 }}>{props.currentProject.accessCode}</Box>
        <Box>
          <FileCopyOutlinedIcon fontSize="small" />
        </Box>
      </Box>
    );
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          className={
            props.project
              ? [classes.appBar, classes.appBarBg].join(" ")
              : classes.appBarBg
          }
        >
          <Toolbar>
            {props.project ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="default"
                aria-label="open drawer"
                onClick={props.onClose}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            {props.project ? (
              <>
                <ProjectSelector
                  currentProject={props.currentProject}
                  projects={props.projects}
                  isUser={props.isUser}
                />
                <CopyToClipboard
                  text={`The access code is ${props.currentProject.accessCode}`}
                  onCopy={props.copyToClipboard}
                >
                  <Chip
                    clickable
                    label={accessCodeLabel()}
                    color="default"
                    variant="outlined"
                  />
                </CopyToClipboard>
              </>
            ) : null}
            {props.project ? null : <Logo />}
            <div className={classes.grow} />
            {props.login ? <InfoSelector /> : null}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

PrimaryAppBar.protoTypes = {
  project: PropTypes.bool,
  login: PropTypes.bool,
  currentProject: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  selectProject: PropTypes.bool.isRequired,
};

function areEqual(prevProps, nextProps) {
  return (
    prevProps.project === nextProps.project &&
    prevProps.login === nextProps.login
  );
}

export default memo(PrimaryAppBar, areEqual);
//export default PrimaryAppBar;
