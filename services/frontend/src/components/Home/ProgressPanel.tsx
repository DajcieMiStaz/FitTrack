import { Box, Typography } from "@mui/material";

export default function ProgressPanel() {
    return (    
        <Box sx={{ height: "150px", width: "100%" , border:"1px solid black", borderColor:"divider", borderRadius:"8px", marginBottom:"20px", display:"flex", flexDirection:"column"}}>
            <Box sx={{height:"33.33%", display:"flex", justifyContent:"flex-start", alignItems:"center" , paddingLeft:"10px"}}>
                <Typography>Your Progress</Typography>
            </Box>
            <Box sx={{height:"33.33%", display:"flex", justifyContent:"flex-start", alignItems:"center", paddingLeft:"10px"}}>
                <Typography>Weekly Streak</Typography>
            </Box>
            <Box sx={{height:"33.33%", display:"flex", justifyContent:"flex-start", alignItems:"center", paddingLeft:"10px"}}>
                <Typography>Monthly Goal</Typography>
            </Box>
        </Box>
    );
}