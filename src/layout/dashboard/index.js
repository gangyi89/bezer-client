import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "../AppBar";
import Sidedrawer from "./Sidedrawer/Sidedrawer";
import Loader from "../../components/common/Loader";
import { useParams } from "react-router-dom";
import Snackbar from "../../components/common/Snackbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
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
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // adding custom margin for main container
  toolbar: {
    marginTop: theme.spacing(5),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = (props) => {
  const { window, getProjectHandler, getProjectsHandler } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  let { id } = useParams();

  // useEffect(() => {
  //   getProjectHandler(id);
  //   if (getProjectHandler !== undefined) getProjectsHandler();
  // }, [getProjectHandler, getProjectsHandler, id]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const copyToClipboard = () => {
    setSnackbarOpen(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  console.log("dashboard render");

  return (
    <div className={classes.root}>
      <AppBar
        onClose={handleDrawerToggle}
        project={!props.dashboardLoading}
        login
        copyToClipboard={copyToClipboard}
        currentProject={props.currentProject}
        projects={props.projects}
        isUser={props.isUser}
      />
      {props.dashboardLoading ? (
        <Loader />
      ) : (
        <>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <Sidedrawer
                  onClose={handleDrawerToggle}
                  isUser={props.isUser}
                />
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <Sidedrawer isUser={props.isUser} />
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {props.children}
          </main>
          <Snackbar
            open={snackbarOpen}
            handleClose={closeSnackbar}
            message={"Copied to clipboard!"}
          />
        </>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getProjectHandler: PropTypes.func.isRequired,
  getProjectsHandler: PropTypes.func,
  dashboardLoading: PropTypes.bool.isRequired,
  isUser: PropTypes.bool,
};

function areEqual(prevProps, nextProps) {
  return (
    prevProps.isUser === nextProps.isUser &&
    prevProps.dashboardLoading === nextProps.dashboardLoading
  );
}

export default memo(Dashboard, areEqual);
