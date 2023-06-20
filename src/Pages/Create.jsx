/*  
    cara import => import Typography from "@mui/material/Typography"
    kita bisa mendefinisikan nama component typography dengan bebas, 
    contoh misal kita ingin menamai component typography dengan "Teks"
    kita bisa menuliskannya seperti ini,
    import Teks from "@mui/material/Typography"

    sedangkan cara import => import { Typography } from "@mui/material/Typography" 
    kita tidak bisa mendefinisikan nama component seperti cara pertama, tapi harus ditulis
    spesifik nama component yang ada di materialUI

    styled() adalah cara untuk mengcustom style pada component yang kita ingin custom 
    style nya.
*/

import {
  Container,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { styled } from "@mui/system";
import { useState } from "react";

/* 
  contoh di bawah ini adalah saya mengcustom style component Button dari bawaan Mui.
  saya ingin agar button nya saat di hover mengubah warna button menjadi white dan warna tulisan nya 
  menjadi #00ba06 dan juga mengubah warna tulisan saat tidak di hover menjadi white.
*/
const CustButton = styled(Button)({
  "&:hover": {
    backgroundColor: "white",
    color: "#00ba06",
  },
  color: "white",
});

const CustTextField = styled(TextField)({
  margin: "20px 0", //margin atasbawah dan kirikanan
  display: "block",
});

const CustFormControl = styled(FormControl)({
  margin: "20px 0", //margin atasbawah dan kirikanan
  display: "block",
});

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todos");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(title === "");
    setDetailsError(details === "");

    if (title && details) {
      console.log(title, details, category);
    }
    // setTitleError(false);
    // setDetailsError(false);

    // if (title == "") {
    //   setTitleError(true);
    // }
    // if (details === "") {
    //   setDetailsError(true);
    // }
    // if (title && details) {
    //   console.log(title, details);
    // }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h1"
        color="textPrimary"
        fontWeight="bold"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <CustTextField
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />

        <CustTextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="primary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <CustFormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </CustFormControl>

        <CustButton
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          startIcon={
            <AddOutlinedIcon fontSize="large" sx={{ marginRight: -1 }} />
          }
        >
          Submit
        </CustButton>
      </form>
    </Container>
  );
}
