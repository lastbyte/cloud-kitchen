import { Facebook, Instagram } from "@mui/icons-material"
import { Box, Grid, Typography } from "@mui/material"
import { blue } from "@mui/material/colors";

const AppFooter = () => {
  return (
    <Grid container sx={(theme) => ({ background: theme.palette.primary.main, padding: theme.spacing(4), paddingBottom: theme.spacing(10) })}>
      <Grid item container xs={6} sx={(theme) => ({ gap: theme.spacing(2) })}>
        <Grid item container sx={(theme) => ({ gap: theme.spacing(2) })}>
          <Box>
            <Typography>About</Typography>
          </Box>
          <Box>
            <Typography>Help</Typography>
          </Box>
          <Box>
            <Typography>Contact</Typography>
          </Box>
        </Grid>
        <Grid item container>
          <Typography>Chatori@2024</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={6} sx={(theme) => ({ flexDirection: "row-reverse", gap: theme.spacing(1) })}>
        <Facebook sx={(theme) => ({ fontSize: "2rem" })} />
        <Instagram sx={(theme) => ({ fontSize: "2rem" })} />
      </Grid>
    </Grid>
  )
}

export default AppFooter;
