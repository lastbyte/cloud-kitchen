import React from "react";
import '@pages/styles/home.css';
import { FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, IconButton, InputBase, InputLabel, MenuItem, NativeSelect, Paper, styled, Switch, useTheme } from "@mui/material";
import NavBar from "../components/appbar";
import SearchIcon from '@mui/icons-material/Search';
import AppFooter from "../components/appFooter";
import RestaurantMainCard from "../components/restaurantMainCard";
import Select, { SelectChangeEvent } from '@mui/material/Select';



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


const SearchWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content',
  boxSizing: 'border-box',
  background: theme.palette.background.paper,
  padding: theme.spacing(1),
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(2),
  border: "1px solid " + theme.palette.primary.main,
  minWidth: 300,
  maxWidth: 600,
  width: "75%",
}));


const SectionContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowY: "scroll",
  minHeight: "100vh",
}));

const SearchFilters = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  minWidth: 300,
  maxWidth: 600,
  boxSizing: 'border-box',
  width: "75%",
}));

const FilterSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(6),
  justifyContent: 'center',
  alignItems: 'center',
}));

const SearchResults = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(6),
  justifyContent: 'center',
  alignItems: 'center',
}));

interface SearchPageProps {
}


const FoodSwitch = styled(Switch)(({ theme }) => ({
  paddingBlock: 8,
  paddingInline: 4,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 24,
      height: 16,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));


const Search: React.FC<SearchPageProps> = (props: SearchPageProps) => {
  const theme = useTheme();

  return (
    <>
      <NavBar />
      <SectionContainer>
        <SectionTop container>
          <SearchWrapper>
            <InputBase
              sx={{ minWidth: "200px", minHeight: "48px", flex: 1, borderRadius: "24px", padding: "10px" }}
              placeholder="burger, pizza ..."
              inputProps={{ 'aria-label': 'burger, pizza ...' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </SearchWrapper>
          <SearchFilters variant="outlined">
            <FormGroup sx={{ display: "flex", width: "50%", flexDirection: "row" }}>
              <FormControlLabel control={<FoodSwitch color="success" />} label="veg only" />
              <FormControlLabel control={<FoodSwitch color="error" />} label="non-veg only" />
            </FormGroup>
            <FormControl sx={{ m: 1, minWidth: 150, maxWidth: 300, width: "40%" }}>
              <NativeSelect
                value=""
              >
                <option value="">None</option>
                <option value={"indian"}>Indian</option>
                <option value={"chinese"}>Chinese</option>
                <option value={"italian"}>Italian</option>
              </NativeSelect>
            </FormControl>
          </SearchFilters>

        </SectionTop>

        <FilterSection container>

        </FilterSection>

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

export default Search
