import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props = {
  name: string;
};

export default function AccountButton({ name }: Props) {
  const settings = ["Settings", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        display: { xs: "none", md: "flex"},
      }}
    >
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, borderRadius: 0 }}>
          <Avatar
            sx={{
              height: "50px",
              width: "180px",
              borderRadius: 0,
              backgroundColor: "background.paper",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1  }}>
                <AccountCircleIcon
                  sx={{ fontSize: "25px" , color: "tertiary.main" }}
                />
                <Typography sx={{ color: "tertiary.main" }}>{name}</Typography>
              </Box>
              <KeyboardArrowDownIcon
                sx={{ fontSize: "25px" , color: "tertiary.main" }}
              />
            </Box>
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px"}}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        slotProps={{ paper: { sx: { width: "180px" , marginTop:"9px" } } }}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
