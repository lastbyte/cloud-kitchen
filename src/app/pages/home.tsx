import React from "react";
import '@pages/styles/home.css';
import { Grid } from "@mui/material";
import NavBar from "../components/appbar";
import { useSelector } from "react-redux";

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props: HomeProps) => {

  return <>
    <NavBar />
    <Grid container sx={(theme) => ({
      gap: theme.spacing(4),
      boxSizing: 'border-box',
      background: theme.palette.background.default,
      flexDirection: 'column',
      height: '100%',
      width: "100%",
      flexWrap: 'nowrap'
    })}>
    </Grid>
  </>;
}

export default Home;
