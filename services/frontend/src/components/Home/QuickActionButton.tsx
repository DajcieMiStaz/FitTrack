import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

type Props = {
    label: string;
    description: string;
    icon: React.ReactNode;
};

export default function QuickActionButton({label, description, icon}: Props) {
    return (
        <Stack direction="row" spacing={2} sx={{width: "100%", height: "75px"}}>
            <Button
                variant="outlined"
                sx={{
                    borderColor: "divider",
                    color: "text-primary",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingInline: "10px",
                    "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "background.hover",
                    },
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            height: "80%",
                            width: "60%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {icon}
                        </Box>
                        <Box
                            sx={{
                                width: "70%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                flexDirection: "column",
                                paddingLeft: "10px",
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{textTransform: "none", color: "text.primary"}}
                                >
                                    {label}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        textTransform: "none",
                                        color: "tertiary.main",
                                        fontSize: "12px",
                                    }}
                                >
                                    {description}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "20px",
                        }}
                    >
                        <AddIcon sx={{color: "tertiary.main"}}/>
                    </Box>
                </Box>
            </Button>
        </Stack>
    );
}
