import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Recipe App
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/search">
            Search
          </Button>

          <Button color="inherit" component={Link} to="/saved">
            Saved
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
