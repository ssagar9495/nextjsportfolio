import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import HouseIcon from "@mui/icons-material/House";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FeedIcon from "@mui/icons-material/Feed";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Typography } from "@mui/material";
import styles from "./styles.module.scss";

const drawerWidth = 270;

const MENU = [
  { label: "Home", icon: <HouseIcon />, path: "/" },
  { label: "About", icon: <PersonIcon />, path: "/about" },
  { label: "Skills", icon: <SettingsIcon />, path: "/service" },
  { label: "Projects", icon: <BusinessCenterIcon />, path: "/portfolio" },
  { label: "Contact", icon: <DraftsIcon />, path: "/contact" },
];

export default function SideBar(props) {
  const router = useRouter();
  const { pathname } = useRouter();
  const parts = pathname?.split("/");
  const currentActiveRoute = parts[parts.length - 1];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [onHover, setOnHover] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar style={{ minHeight: "180px" }} />
      {/* <h5 className="flex italic	text-7xl font-medium justify-center	text-white">
        SR
      </h5> */}
      <List>
        {MENU.map((menuObj, index) => (
          <ListItem
            key={menuObj.label}
            disablePadding
            style={{
              color:
                `/${currentActiveRoute}` === menuObj.path ? "white" : "#bbb",
            }}
            onClick={() => {
              router.push(menuObj.path);
            }}
          >
            <ListItemButton
              onMouseEnter={() => setOnHover(index)}
              onMouseLeave={() => setOnHover("")}
            >
              <ListItemIcon
                style={{
                  color:
                    `/${currentActiveRoute}` === menuObj.path
                      ? "white"
                      : "#bbb",
                }}
              >
                {menuObj.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography style={{ fontWeight: "500" }}>
                    {menuObj.label}
                  </Typography>
                }
                style={{
                  marginLeft: "-15px",
                  letterSpacing: onHover === index ? "2px" : "0px",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div style={{ marginTop: "40px", padding: "0px 0px 0px 20px" }}>
        <em style={{ fontSize: "17px" }}>© 2023 India Created by Sagar Rana</em>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#767676",
            display: { xs: "flex", lg: "none" },
            justifyContent: "end",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#000",
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightColor: "#111",
              padding: "0 40px",
              color: "#bbb",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              backgroundColor: "#000",
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightColor: "#111",
              padding: "0 40px",
              color: "#bbb",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box className={styles.contentContainer}>{props.children}</Box>
    </Box>
  );
}
