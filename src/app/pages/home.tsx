import React from "react";
import '@pages/styles/home.css';
import { createStyles, Divider, Grid, IconButton, InputBase, styled, Theme, Typography, useTheme } from "@mui/material";
import NavBar from "../components/appbar";
import SearchIcon from '@mui/icons-material/Search';
import RestaurantCard from "../components/restaurantCard";
import TopOfferCard from "../components/topOfferCard";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import PercentIcon from '@mui/icons-material/Percent';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CategoryCard from "../components/categoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCakeCandles, faEgg, faMugHot, faPizzaSlice, faSeedling } from "@fortawesome/free-solid-svg-icons";
import MiniFoodCard from "../components/miniFoodCard";
import AppFooter from "../components/appFooter";



const SectionTop = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(2),
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  height: 300,
}));

const SectionHeader = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'fit-content',
  padding: theme.spacing(1),
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const SearchWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '600px',
  height: 'fit-content',
  background: theme.palette.background.paper,
  padding: theme.spacing(1),
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));


const TopRestaurants = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
  boxSizing: 'border-box',
  height: 'fit-content',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  width: "100%",
  padding: theme.spacing(2),
  background: theme.palette.background.paper,
}));

const RestaurantCardsContainer = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(4),
  boxSizing: 'border-box',
  height: 'fit-content',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));
const SectionContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  overflowY: "scroll",
  paddingBottom: theme.spacing(10),
}));


const BestSellersSection = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
  boxSizing: 'border-box',
  height: 'fit-content',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  width: "80%",
  padding: theme.spacing(2),
  background: theme.palette.background.default,
}));

const BestSellerCardContainer = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(4),
  boxSizing: 'border-box',
  height: 'fit-content',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: theme.spacing(2),
}));


const ExploreSection = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
  boxSizing: 'border-box',
  height: 'fit-content',
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(8),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  width: "100%",
  background: theme.palette.background.default,
  flexDirection: 'column',
}));

const TopOffersSection = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
  boxSizing: 'border-box',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  width: "100%",
  padding: theme.spacing(2),
  background: theme.palette.background.paper,
}));


const TopOfferCardsContainer = styled(Grid)(({ theme }) => ({
  boxSizing: 'border-box',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(4),
}));


const CategoryCardContainer = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(8),
  boxSizing: 'border-box',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  width: "100%",
}));



interface HomeProps {
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const theme = useTheme();

  return (
    <>
      <NavBar />
      <SectionContainer>
        <SectionTop container>
          <SearchWrapper>
            <InputBase
              sx={{ minWidth: "200px", flex: 1 }}
              placeholder="burger, pizza ..."
              inputProps={{ 'aria-label': 'burger, pizza ...' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </SearchWrapper>
        </SectionTop>
        <TopOffersSection container>
          <SectionHeader container>
            <Typography variant="h2" component="h2" gutterBottom>
              Top Offers
            </Typography>
          </SectionHeader>

          <TopOfferCardsContainer container>
            <TopOfferCard icon={PlusOneIcon} displayText="BUY 1 GET 1 FREE" />
            <TopOfferCard icon={PercentIcon} displayText="FLAT 20% OFF" />
            <TopOfferCard icon={DeliveryDiningIcon} displayText="FREE DELIVERY" />
          </TopOfferCardsContainer>

        </TopOffersSection>


        <ExploreSection container>
          <SectionHeader container>
            <Typography variant="h2" component="h2" gutterBottom>
              Explore
            </Typography>
          </SectionHeader>

          <CategoryCardContainer container>
            <CategoryCard displayText="burger" icon={<FontAwesomeIcon icon={faBurger} size="xl" style={{ color: theme.palette.primary.main }} />} />
            <CategoryCard displayText="pizza" icon={<FontAwesomeIcon icon={faPizzaSlice} size="xl" style={{ color: theme.palette.primary.main }} />} />
            <CategoryCard displayText="eggs" icon={<FontAwesomeIcon icon={faEgg} size="xl" style={{ color: theme.palette.primary.main }} />} />
            <CategoryCard displayText="salads" icon={<FontAwesomeIcon icon={faSeedling} size="xl" style={{ color: theme.palette.primary.main }} />} />
            <CategoryCard displayText="cakes" icon={<FontAwesomeIcon icon={faCakeCandles} size="xl" style={{ color: theme.palette.primary.main }} />} />
            <CategoryCard displayText="coffee" icon={<FontAwesomeIcon icon={faMugHot} size="xl" style={{ color: theme.palette.primary.main }} />} />
          </CategoryCardContainer>

        </ExploreSection>
        <TopRestaurants container>

          <SectionHeader container>
            <Typography variant="h2" component="h2" gutterBottom>
              Top Restaurants
            </Typography>
          </SectionHeader>
          <Divider />
          <RestaurantCardsContainer container>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </RestaurantCardsContainer>
        </TopRestaurants>
        <BestSellersSection container>

          <SectionHeader container>
            <Typography variant="h2" component="h2" gutterBottom>
              Best Sellers
            </Typography>
          </SectionHeader>
          <Divider />
          <BestSellerCardContainer container>
            <MiniFoodCard />
            <MiniFoodCard />
            <MiniFoodCard />
            <MiniFoodCard />
            <MiniFoodCard />
            <MiniFoodCard />
            <MiniFoodCard />
            <MiniFoodCard />
          </BestSellerCardContainer>

        </BestSellersSection>
      </SectionContainer>
      <AppFooter />
    </>
  );
}

export default Home
