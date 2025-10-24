import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box id="header" sx={{ height: "150px", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "text-primary",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Welcome User!
          </Typography>
          <Typography sx={{ color: "tertiary.main" }}>
            Track your fitness journey
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: "200px", width: "100%" }}>
        <Box
          sx={{
            height: "100%",
            border: "1px solid",
            borderRadius: "8px",
            borderColor: "divider",
          }}
        ></Box>
      </Box>
      <Box sx={{ backgroundColor: "yellow" }}></Box>
    </>
  );
}
