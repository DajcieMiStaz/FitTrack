import React from "react";
import {Box, Typography} from "@mui/material";
import ProgressBar from "../ProgressBar.tsx";

export default function CaloriesPanel() {
    return (
        <Box
            sx={{
                height: {xs: "80px", md: "100px"},
                width: "100%",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "8px",
                display: "flex",
            }}
        >
            <Box
                id="kcalBox"
                sx={{
                    width: "25%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingInline: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        Kcal
                    </Typography>
                    <Typography fontSize={{xs: 14, md: 15}}>
                        191
                    </Typography>
                </Box>


                <Box
                    sx={{
                        height: "10%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ProgressBar currentValue={191} goalValue={2500}/>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        /2500 kcal
                    </Typography>
                </Box>
            </Box>

            <Box
                id="proteinBox"
                sx={{
                    width: "25%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingInline: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        Protein
                    </Typography>
                    <Typography fontSize={{xs: 14, md: 15}}>
                        26
                    </Typography>
                </Box>


                <Box
                    sx={{
                        height: "10%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ProgressBar currentValue={26} goalValue={200}/>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        /200 g
                    </Typography>
                </Box>
            </Box>

            <Box
                id="carbsBox"
                sx={{
                    width: "25%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingInline: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        Carbs
                    </Typography>
                    <Typography fontSize={{xs: 14, md: 15}}>
                        0
                    </Typography>
                </Box>


                <Box
                    sx={{
                        height: "10%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ProgressBar currentValue={0} goalValue={269}/>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        /269 g
                    </Typography>
                </Box>
            </Box>

            <Box
                id="fatBox"
                sx={{
                    width: "25%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingInline: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        Fat
                    </Typography>
                    <Typography fontSize={{xs: 14, md: 15}}>
                        25
                    </Typography>
                </Box>


                <Box
                    sx={{
                        height: "10%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ProgressBar currentValue={25} goalValue={69}/>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        alignItems: "flex-end",
                    }}>
                    <Typography color="tertiary.main" fontSize={{xs: 12, md: 13}}>
                        /69 g
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}