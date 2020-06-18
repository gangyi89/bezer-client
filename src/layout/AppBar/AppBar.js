import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ProjectSelector from "./ProjectSelector";
import InfoSelector from "./InfoSelector";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Logo from "../../components/Logo/Logo";

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
            {props.project ? <ProjectSelector /> : <Logo />}
            <div className={classes.grow} />
            {props.login ? <InfoSelector /> : null}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

PrimaryAppBar.protoTypes = {
  project: PropTypes.Boolean,
  login: PropTypes.Boolean,
};

function areEqual(prevProps, nextProps) {
  // only update if a card was added or removed
  return (
    prevProps.project === nextProps.project &&
    prevProps.login === nextProps.login
  );
}

export default memo(PrimaryAppBar, areEqual);
//export default PrimaryAppBar;
