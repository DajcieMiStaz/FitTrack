import { Box, Button } from "@mui/material";

type Props = {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
};

export default function TodayWeekHistorySwitch({ selectedTab, setSelectedTab }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "4px",
        backgroundColor: "secondary.main",
        gap: "16px",
        borderRadius: "22px",
        height: {xs:"40px", md:"45px"},
      }}
    >
      <Button
        sx={{
          backgroundColor:
            selectedTab === "today" ? "background.paper" : "secondary.main",
          width: "100%",
          color: "text.primary",
          borderRadius: "22px",
          fontSize: {xs:"12px", md:"14px"},
          textTransform: "none",
        }}
        onClick={() => setSelectedTab("today")}
      >
        Today
      </Button>
      <Button
        sx={{
          backgroundColor:
            selectedTab === "weekly" ? "background.paper" : "secondary.main",
          width: "100%",
          color: "text.primary",
          borderRadius: "22px",
          fontSize: {xs:"12px", md:"14px"},
          textTransform: "none",
        }}
        onClick={() => setSelectedTab("weekly")}
      >
        Weekly Plan
      </Button>
      <Button
        sx={{
          backgroundColor:
            selectedTab === "history" ? "background.paper" : "secondary.main",
          width: "100%",
          color: "text.primary",
          borderRadius: "22px",
          fontSize: {xs:"12px", md:"14px"},
            textTransform: "none",
        }}
        onClick={() => setSelectedTab("history")}
      >
        History
      </Button>
    </Box>
  );
}
