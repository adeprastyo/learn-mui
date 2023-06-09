import "./App.css";
import { Route, Routes } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

/*
  createTheme() adalah cara untuk mengubah/override default theme dari Material UI
  ThemeProvider adalah cara untuk memakai custom theme mana yang mau dipakai.
  di bawah ini saya mengubah default theme untuk warna palete primary secondary dan mengubah
  jenis font dan fontweight
*/
const custTheme = createTheme({
  palette: {
    primary: {
      main: "#00ba06",
    },
    secondary: blue,
  },
  typography: {
    fontFamily: "Lato",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

const defaultTheme = createTheme(); // ini adalah cara jika ingin menggunakan kembali defaultTheme

function App() {
  const theme = custTheme;
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
