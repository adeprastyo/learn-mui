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

import { Container, Typography, Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { styled } from "@mui/system";

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

export default function Create() {
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
      <CustButton
        onClick={() => {
          alert("terklik");
        }}
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
    </Container>
  );
}
