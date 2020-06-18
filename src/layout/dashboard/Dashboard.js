import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "../AppBar/AppBar";
import Sidedrawer from "./Sidedrawer/Sidedrawer";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";

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

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    getProjectHandler(id);
    getProjectsHandler();
  }, [getProjectHandler, getProjectsHandler, id]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
                <Sidedrawer onClose={handleDrawerToggle} />
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
                <Sidedrawer />
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {props.children}
          </main>
        </>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getProjectHandler: PropTypes.func.isRequired,
  getProjectsHandler: PropTypes.func.isRequired,
  dashboardLoading: PropTypes.bool.isRequired,
  // currentProject: PropTypes.object.isRequired,
};

export default memo(Dashboard);
