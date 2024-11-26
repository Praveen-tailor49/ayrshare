import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import axios from 'axios';

function App() {
  const [theme, colorMode] = useMode();
  const [data, setData] = useState(null);  // Store the API response
  const [loading, setLoading] = useState(true);  // To show a loading state
  const [error, setError] = useState(null);  


  useEffect(() => {

    const apiKey = "AMZG58T-P1H4BWZ-NN349BV-RH46W65";

    const url = `https://api.ayrshare.com/v1/analytics?access_token=${apiKey}&platform=twitter&start_date=2024-01-01&end_date=2024-11-01`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Analytics Data:', data);
      })
      .catch(error => {
        console.error('Error fetching analytics data:', error);
      });

  }, []); 

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
