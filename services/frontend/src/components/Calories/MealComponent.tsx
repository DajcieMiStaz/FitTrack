import {Box, Checkbox, Dialog, DialogTitle, List, ListItem, ListItemText, Typography} from "@mui/material";
import {Dayjs} from "dayjs";
import Button from "@mui/material/Button";
import TuneIcon from '@mui/icons-material/Tune';
import React from "react";

type Props = {
    activeDate: Dayjs;
}

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

const meals = ['Breakfast', 'II Breakfast', 'Lunch', 'Dinner', 'Snacks'];

function ChooseMealDialog(props: SimpleDialogProps) {
    const {onClose, selectedValue, open} = props;

    const [checked, setChecked] = React.useState(meals);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose your meals</DialogTitle>
            <List sx={{pt: 0}}>
                {meals.map((meal) => (
                    <ListItem key={meal}>
                        <ListItemText primary={meal}/>
                        <Checkbox
                            edge="end"
                            onChange={handleToggle(meal)}
                            checked={checked.includes(meal)}
                        />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

export default function MealComponent({activeDate}: Props) {
    const date = activeDate.format("MMMM").toString();

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(meals[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            height: {xs: "100px", md: "120px"},
            width: "100%",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "8px",
        }}>
            <Box sx={{
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Typography
                    sx={{
                        color: "text-primary",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Today's meals
                </Typography>
                <Button
                    onClick={handleClickOpen}
                    sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: "10px",
                        padding: "5px",
                        display: "flex",
                        justifyContent: "center",
                        minWidth: 0,
                        gap: 1
                    }}>
                    <TuneIcon/>
                    <Typography sx={{
                        display: {xs: "none", md: "block"},
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "15px"
                    }}>
                        Meal Settings
                    </Typography>
                </Button>
                <ChooseMealDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                />
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: {xs: "10px", md: "15px"}, backgroundColor: "red"}}>
                <Typography>{date}</Typography>
            </Box>
        </Box>
    );
}
