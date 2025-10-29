import React, {useState} from "react";
import Box from "@mui/material/Box";
import Logo from "./Layout/Logocomponent.tsx";
import BottomNavBar from "./Layout/BottomNavBar";
import LeftNavBarButton from "./Layout/LeftNavBarButton";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountButton from "./Layout/AccountButton";
import LightDarkModeButton from "./Layout/LightDarkModeButton";
import {useThemeMode} from "../theme/ThemeProviderWrapper";
import GroupsIcon from "@mui/icons-material/Groups";

export default function Layout({children}: { children: React.ReactNode }) {
    const {mode, toggleTheme} = useThemeMode();
    const [activeButton, setActiveButton] = useState("Home");
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                width: "100%",
                overflow: "hidden"
            }}
        >
            <Box
                id="toppanel"
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    width: "100%",
                    height: "70px",
                    flexShrink: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "background.paper",
                    zIndex: 10,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: {
                            xs: "2vw",
                            sm: "3vw",
                            md: "4vw",
                            lg: "40px",
                        },
                    }}
                >
                    <Logo/>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "space-between",
                        marginRight: "30px",
                        gap: "10px",
                    }}
                >
                    <AccountButton name="User"/>
                    <LightDarkModeButton mode={mode} toggleMode={toggleTheme}/>
                </Box>
            </Box>
            <Box
                id="mainPanel"
                sx={{
                    display: "flex",
                    flex: "1",
                    overflow: "hidden",
                    paddingBottom: {xs: "70px", md: "0px"}
                }}
            >
                <Box
                    id="leftNavBar"
                    sx={{
                        width: "220px",
                        display: {xs: "none", md: "flex"},
                        flexDirection: "column",
                        alignItems: "left",
                        marginLeft: "20px",
                        gap: "20px",
                        paddingTop: "20px",
                        borderRight: "1px solid",
                        borderColor: "divider",
                        backgroundColor: "background.paper",
                        flexShrink: "0"
                    }}
                >
                    <LeftNavBarButton
                        icon={<HomeIcon/>}
                        label="Home"
                        isActive={activeButton === "Home"}
                        onClick={() => setActiveButton("Home")}
                    />
                    <LeftNavBarButton
                        icon={<RestaurantIcon/>}
                        label="Calories"
                        isActive={activeButton === "Calories"}
                        onClick={() => setActiveButton("Calories")}
                    />
                    <LeftNavBarButton
                        icon={<FitnessCenterIcon/>}
                        label="Exercises"
                        isActive={activeButton === "Exercises"}
                        onClick={() => setActiveButton("Exercises")}
                    />
                    <LeftNavBarButton
                        icon={<BarChartIcon/>}
                        label="Statistics"
                        isActive={activeButton === "Statistics"}
                        onClick={() => setActiveButton("Statistics")}
                    />
                    <LeftNavBarButton
                        icon={<GroupsIcon/>}
                        label="Trainees"
                        isActive={activeButton === "Trainees"}
                        onClick={() => setActiveButton("Trainees")}
                    />
                </Box>
                <Box
                    id="contentPanel"
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        backgroundColor: "background.default",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        id="ContentInnerPanel"
                        sx={{
                            width: "85%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
            <Box
                id="bottomNavBar"
                sx={{
                    height: "70px",
                    width: "100dvw",
                    display: {xs: "block", md: "none"},
                    borderTop: 1,
                    borderColor: "divider",
                    position: "fixed",
                    bottom: 0,
                }}
            >
                <BottomNavBar/>
            </Box>
        </Box>
    );
}
