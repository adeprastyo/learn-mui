/*  cara import => import Typography from "@mui/material/Typography"
    kita bisa mendefinisikan nama component typography dengan bebas, 
    contoh misal kita ingin menamai component typography dengan "Teks"
    kita bisa menuliskannya seperti ini,
    import Teks from "@mui/material/Typography"

    sedangkan cara import => import { Typography } from "@mui/material/Typography" 
    kita tidak bisa mendefinisikan nama component seperti cara pertama, tapi harus ditulis
    spesifik nama component yang ada di materialUI
*/

import { Container, Typography, Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { styled } from "@mui/system";

const CustButton = styled(Button)({
  "&:hover": {
    backgroundColor: "white",
    color: "blue",
  },
});

export default function Create() {
  return (
    <Container>
      <Typography variant="h6" component="h1" color="textSecondary">
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
