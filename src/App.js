import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Box, Fab} from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed,Liveserverlogin,Liveserverroom } from './components';
import StreamIcon from '@mui/icons-material/Stream';
import { Stream } from "@mui/icons-material";
const App = () => (
  <div>
  <HashRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path="/LiveserverLogin" element={<Liveserverlogin />}/>
        <Route path="room/:roomid" element={<Liveserverroom />}/>
      </Routes>
    </Box>
  </HashRouter>
  </div>
);

export default App;
