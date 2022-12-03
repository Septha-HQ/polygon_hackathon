import React, { useContext, useState } from "react";
import { TxnContext } from "../../context/TransactionContext";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/septha.png";

interface Props {
  window?: () => Window;
}

const MUMBAI_CHAIN_ID = 80001;

const drawerWidth = 240;
// const navItems = ["Verify", "Contact Us", "Connect Wallet"];
const navItems = [
  { name: "Verify", key: "verify", route: "/verify" },
  { name: "Contact us", key: "contact-us", route: "/verify" },
  //   "Connect Wallet",
];

const Navbar = (props: Props) => {
  const { isCurrentNetwork, connectWallet, disconnectWallet } =
    useContext(TxnContext)!;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img src={logo} alt="septha logo" style={{ height: "50px" }} />
      </Box>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Connect Wallet" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ mt: 3 }}>
      {/* <Container maxWidth="xl"> */}
      <Toolbar sx={{}}>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <img src={logo} alt="septha logo" style={{ height: "50px" }} />
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: "auto", display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <img src={logo} alt="septha logo" style={{ height: "50px" }} />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item.key} sx={{ color: "#fff", ml: 5 }}>
              {item.name}
            </Button>
          ))}

          {!isCurrentNetwork ? (
            <Button
              variant="contained"
              size="large"
              sx={{ color: "#ffffff", ml: 5, background: "#ac10af" }}
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              sx={{ color: "#ffffff", ml: 5, background: "#777777" }}
              onClick={disconnectWallet}
            >
              Disconnect Wallet
            </Button>
          )}
        </Box>
      </Toolbar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default Navbar;
