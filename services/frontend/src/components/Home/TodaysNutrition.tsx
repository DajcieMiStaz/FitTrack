import { Box, Typography } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProgressBar from "./ProgressBar";

type Props={
  currentCalories: number;
  goalCalories: number;
  currentProtein: number;
  goalProtein: number;
  currentFat: number;
  goalFat: number;
  currentCarbs: number;
  goalCarbs: number;
};

export default function TodaysNutrition(props: Props) {
  return (
    <Box
      id="nutritionCard"
      sx={{
        height: "170px",
        width: "100%",
        border: "1px solid",
        borderRadius: "8px",
        borderColor: "divider",
        paddingInline: "20px",
        paddingBottom: "20px"
      }}
    >
      <Box
        id="nutritionHeader"
        sx={{
          height: "40%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "text-primary",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Today's Nutrition
        </Typography>
      </Box>
      <Box
        id="nutritionDetails"
        sx={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          id="caloriesintake"
          sx={{
            height: "50%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "50%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              <WhatshotIcon
                sx={{
                  fontSize: "15px",
                  color: "primary.main",
                }}
              />
              Calories
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "14px",
              }}
            >
              {props.currentCalories}kcal/{props.goalCalories}kcal
            </Typography>
          </Box>
          <Box
            sx={{
              height: "50%",
              width: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <ProgressBar currentValue={props.currentCalories} goalValue={props.goalCalories} />
          </Box>
        </Box>
        <Box
          id="proteinfatcarbsintake"
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Box
            id="proteinintake"
            sx={{
              height: "100%",
              width: "33.33%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{
              height:"33.33%",
              width:"100%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center"
            }}>
              <Typography sx={{
                fontSize:"13px"
              }}>Protein</Typography>
            </Box>
            <Box sx={{
              height:"33.33%",
              width:"100%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center",
              
            }}>
              <Typography sx={{ color: "tertiary.main",fontSize:"13px"}}>{props.currentProtein}g/{props.goalProtein}g</Typography>
            </Box>
            <Box sx={{
              width:"100%",
              height:"33.33%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center"
            }}>
              <ProgressBar currentValue={props.currentProtein} goalValue={props.goalProtein} />
            </Box>
          </Box>
          <Box
            id="fatintake"
            sx={{
              height: "100%",
              width: "33.33%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{
              height:"33.33%",
              width:"100%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center"
            }}>
              <Typography sx={{
                fontSize:"13px"
              }}>Carbs</Typography>
            </Box>
            <Box sx={{
              height:"33.33%",
              width:"100%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center",
              
            }}>
              <Typography sx={{ color: "tertiary.main",fontSize:"13px"}}>{props.currentProtein}g/{props.goalProtein}g</Typography>
            </Box>
            <Box sx={{
              width:"100%",
              height:"33.33%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center"
            }}>
              <ProgressBar currentValue={props.currentProtein} goalValue={props.goalProtein} />
            </Box>
          </Box>
          <Box
            id="carbsintake"
            sx={{
              height: "100%",
              width: "33.33%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{
              height:"33.33%",
              width:"100%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center"
            }}>
              <Typography sx={{
                fontSize:"13px"
              }}>Fat</Typography>
            </Box>
            <Box sx={{
              height:"33.33%",
              width:"100%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center",
              
            }}>
              <Typography sx={{ color: "tertiary.main",fontSize:"13px"}}>{props.currentProtein}g/{props.goalProtein}g</Typography>
            </Box>
            <Box sx={{
              width:"100%",
              height:"33.33%",
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center"
            }}>
              <ProgressBar currentValue={props.currentProtein} goalValue={props.goalProtein} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
