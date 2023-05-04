import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Box, Fab, Stack, Typography } from "@mui/material";
import StreamIcon from '@mui/icons-material/Stream';
import { Videos, Sidebar } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';



const Liveserverlogin = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);
  
    useEffect(() => {
      setVideos(null);
  
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [selectedCategory]);



    const[roomCode,setRoomCode]=useState("");
    const navigate=useNavigate();

    const handleFormSubmit=()=>{
        // ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }

    return (
            <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
              <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
              <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                Copyright © 2023 Cubee Made with Love by CGA
              </Typography>
            </Box>
        
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
             
        <div className="home-page" style={{height:'1000px'}}>
            <form onSubmit={handleFormSubmit}>
                <center><br/><br/><br/>
                   <div> <label style={{color:'white',fontWeight:'bold',fontSize:'40px'}}>Enter Room Code</label></div>
                   <br/><br/><br/><input type="text" required placeholder="Enter Room Code" 
                    value={roomCode} style={{display: 'block',
                        width: '50%',
                        padding:' 8px 16px',
                        lineheight:' 25px',
                        fontsize: '14px',
                        fontweight: 500,
                        fontfamily: 'inherit',
                        borderradius: '6px',
                        border: '1px solid var'}}
                    onChange={(e)=>setRoomCode(e.target.value)}
                    /><br/><br/><br/>
               <div><input type="submit" style={{
    
    backgroundColor:'#fff',
    color: '#0a0a23',
    border:'none', 
    borderRadius:'10px', 
    padding:'15px',
    minHeight:'30px', 
    minWidth: '120px'}} /></div>
               </center>
            </form>
        </div>
            </Box>
         
          </Stack>
    )
}
export default Liveserverlogin;
