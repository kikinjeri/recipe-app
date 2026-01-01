import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ImageIcon from "@mui/icons-material/Image";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Landing() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        bgcolor: "background.default",
      }}
    >
      {/* ===========================
          HERO SECTION
      ============================ */}
      <Box
        sx={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
          Cook Smarter. Save Better.
        </Typography>

        <Typography
          variant="h5"
          sx={{ maxWidth: 700, mx: "auto", opacity: 0.8, mb: 4 }}
        >
          Your personal recipe organizer — save your own meals, upload images,
          and discover new dishes effortlessly.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/signup"
          >
            Get Started
          </Button>

          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/login"
          >
            Log In
          </Button>
        </Box>
      </Box>

      {/* ===========================
          FEATURES SECTION
      ============================ */}
      <Box
        sx={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, textAlign: "center", mb: 6 }}
        >
          Features that make cooking easier
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <RestaurantMenuIcon sx={{ fontSize: 50, mb: 2 }} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Save Your Recipes
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  Store your personal recipes with ingredients, steps, and tags.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <ImageIcon sx={{ fontSize: 50, mb: 2 }} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Upload Images
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  Add photos to your recipes for a beautiful, visual cookbook.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <SearchIcon sx={{ fontSize: 50, mb: 2 }} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Search Free Recipes
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  Discover new meals using our free recipe search engine.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* ===========================
          DEMO SECTION
      ============================ */}
      <Box
        sx={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
          A clean, modern cooking experience
        </Typography>

        <Typography
          variant="h6"
          sx={{ maxWidth: 700, mx: "auto", opacity: 0.8, mb: 4 }}
        >
          Designed with simplicity and elegance in mind. Fully responsive, dark
          mode ready, and optimized for a smooth cooking workflow.
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            height: 450,
            mx: "auto",
            borderRadius: 4,
            bgcolor: "background.paper",
            boxShadow: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.7,
          }}
        >
          <Typography variant="h6" sx={{ opacity: 0.5 }}>
            (Add screenshot mockups here)
          </Typography>
        </Box>
      </Box>

      {/* ===========================
          FINAL CTA SECTION
      ============================ */}
      <Box
        sx={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
          Ready to start cooking smarter?
        </Typography>

        <Typography
          variant="h6"
          sx={{ maxWidth: 600, mx: "auto", opacity: 0.8, mb: 4 }}
        >
          Create an account and start building your personal digital cookbook.
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/signup"
        >
          Create an Account
        </Button>
      </Box>
    </Box>
  );
}

export default Landing;
