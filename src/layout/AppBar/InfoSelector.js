import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
//import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "flex",
  },
}));

const InfoSelector = (props) => {
  let url = "dashboard";
  if (props.isUser === true) {
    url = "session";
  }
  let { id } = useParams();
  console.log("Info render");
  console.log(id);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [hello, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  const handleMenuClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.value);
    //handleMobileMenuClose();
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to={`/${url}/${id}/profile`}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to={`/${url}/${id}/endsession`}
      >
        End Session
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton aria-label="show 3 new notifications" color="default">
          <Badge badgeContent={3} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="default"
        >
          <AccountCircle />
        </IconButton>
      </div>
      {/* <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="default"
        >
          <MoreIcon />
        </IconButton>
      </div> */}
      {/* {renderMobileMenu} */}
      {renderMenu}
    </>
  );
};

export default InfoSelector;
