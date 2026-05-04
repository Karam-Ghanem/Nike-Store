import {
  Box,
  IconButton,
  // InputBase,
  Stack,
  Toolbar,
  styled,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
// import { alpha, type PaletteMode } from "@mui/material/styles";
import { type PaletteMode } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Text } from "@chakra-ui/react";
import AdminLinks from "./Header/AdminLinks";
import MobileLinks from "./Header/MobileLinks";
const drawerWidth = 240;


interface AppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


interface Props {
  open: boolean;
  handleDrawerOpen: () => void;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}
const TopBar = ({ open, handleDrawerOpen, setMode }:Props) => {
  const theme = useTheme();
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>     

        <Box className="hidden md:block">
            <Stack
              direction="row"
              justifyContent={{ sm: "start", md: "start", lg: "space-between" }}
            >
              {AdminLinks.map((link) => (
                <Link to={link.href} key={link.id}>
                  <Text                    
                    marginEnd={{ md: "2.5", lg: "4" }}
                    fontSize={{ md: "11px", lg: "16px", xl: "21px" }}
                    _hover={{
                      marginTop: "-8px",
                      cursor: "pointer",
                    }}
                    transition="0.5s"
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Stack>
        </Box>

        <MobileLinks/>
        <Box flexGrow={1} />


        <Stack direction={"row"}>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              <DarkModeOutlinedIcon />
            </IconButton>
          )}

          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>

          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton color="inherit">
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
