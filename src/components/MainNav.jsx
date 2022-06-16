import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  let navigate = useNavigate();

  React.useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/tv");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: "#49669d",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<TrendingUpIcon />}
          style={{ color: "white" }}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
          style={{ color: "white" }}
        />
        <BottomNavigationAction
          label="TV Shows"
          icon={<TvIcon />}
          style={{ color: "white", fontFamily: "monospace" }}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          style={{ color: "white" }}
        />
      </BottomNavigation>
    </Box>
  );
}
