import { Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  styled,
  type PaletteMode,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./theme";

import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contacts from "./page/contacts/Contacts";
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";
import Calendar from "./page/calendar/Calendar";
import FAQ from "./page/faq/FAQ";
import BarChart from "./page/barChart/BarChart";
import PieChart from "./page/pieChart/PieChart";
import LineChart from "./page/lineChart/LineChart";
import Geography from "./page/geography/Geography";
import NotFound from "./page/notFound/NotFound";
import { useState,useMemo } from "react";
import AddProduct from "./page/addProduct/AddProduct";
import Products from "@/components/Products/Products";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function AdminApp() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("currentMode") as PaletteMode) || "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <TopBar
          open={open}
          handleDrawerOpen={() => setOpen(true)}
          setMode={setMode}
        />
        <SideBar open={open} handleDrawerClose={() => setOpen(false)} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addproduct" element={<AddProduct head="ADD PRODUCT"/>} />
            <Route path="editproduct/:id" element={<AddProduct head="EDIT PRODUCT"/>} />
            <Route path="edit_delete_product" element={<Products edit_delete={true} homePage={false}/>}/>
            <Route path="team" element={<Team/>} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="form" element={<Form/>} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="bar" element={<BarChart />} />
            <Route path="pie" element={<PieChart />} />
            <Route path="line" element={<LineChart />} />
            <Route path="geography" element={<Geography />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
