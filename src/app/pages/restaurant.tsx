import React from "react";
import '@pages/styles/home.css';
import { Grid, IconButton, InputBase, styled, useTheme } from "@mui/material";
import NavBar from "../components/appbar";
import SearchIcon from '@mui/icons-material/Search';
import AppFooter from "../components/appFooter";
import RestaurantMainCard from "../components/restaurantMainCard";
import SearchFilters from "../components/searchFilters";
import SearchBox from "../components/searchBox";



const SectionTop = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
  boxSizing: 'border-box',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: "nowrap",
  paddingTop: theme.spacing(16),
  paddingBottom: theme.spacing(8),
  background: theme.palette.primary.main,
}));


const SectionContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: "scroll",
  minHeight: "100vh",
}));


const SearchResults = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(2),
  paddingInline: theme.spacing(2),
  paddingBottom: theme.spacing(6),
  justifyContent: 'center',
  alignItems: 'center',
}));

interface RestaurantPageProps {
}

const Restaurant: React.FC<RestaurantPageProps> = (props: RestaurantPageProps) => {

  return (
    <>
      <NavBar />
      <SectionContainer>
        <SectionTop container>
          <SearchBox />
          <SearchFilters />
        </SectionTop>

        <SearchResults>
          <RestaurantMainCard />
          <RestaurantMainCard />
          <RestaurantMainCard />
          <RestaurantMainCard />
        </SearchResults>
      </SectionContainer>
      <AppFooter />
    </>
  );
}

export default Restaurant
