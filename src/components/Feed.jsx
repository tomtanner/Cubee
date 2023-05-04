import React, { useEffect, useState } from "react";
import { Box, Fab, Stack, Typography } from "@mui/material";
import StreamIcon from '@mui/icons-material/Stream';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { Link } from "react-router-dom";
import { Liveserverlogin, Liveserverroom } from './';
import { BrowserRouter,Routes,Route } from "react-router-dom";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    if(selectedCategory=='Streaming'){
      window.location.replace('/#/Liveserverlogin');
    }
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 Cubee
        </Typography>
      </Box>
  
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
      {/* <Link to="Liveserverlogin">    <Fab style={{ backgroundColor: 'white', color: 'white', marginTop: 300 }}>
        <StreamIcon style={{ color: 'black' }} />
      </Fab></Link> */}
    </Stack>
  );
};

export default Feed;
