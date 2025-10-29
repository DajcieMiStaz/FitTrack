import "./App.css";
import Box from "@mui/material/Box";
import Layout from "./components/Layout";
import { ThemeProviderWrapper } from "./theme/ThemeProviderWrapper";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import BarcodeScannerComponent from "./components/BarcodeScannerComponent.tsx";
import Home from "./Pages/Home.tsx";


function App() {
  return (
    <>
      <ThemeProviderWrapper>
        <Layout>
          <Box>

          </Box>
        </Layout>
      </ThemeProviderWrapper>
    </>
  );
}

export default App;
