import React from "react";
import '@pages/styles/home.css';
import { Divider, Grid, IconButton, InputBase, styled, Typography, useTheme } from "@mui/material";
import NavBar from "../components/appbar";
import SearchIcon from '@mui/icons-material/Search';
import RestaurantCard from "../components/restaurantCard";
import CategoryCard from "../components/categoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCakeCandles, faEgg, faMugHot, faPizzaSlice, faSeedling } from "@fortawesome/free-solid-svg-icons";
import MiniFoodCard from "../components/miniFoodCard";
import AppFooter from "../components/appFooter";



const SectionTop = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
  boxSizing: 'border-box',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: "nowrap",
  paddingBlock: theme.spacing(8),
  paddingTop: theme.spacing(16),
  background: theme.palette.primary.main,
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
  height: 'fit-content',
  background: theme.palette.background.paper,
  padding: theme.spacing(1),
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(10),
  minWidth: 300,
  maxWidth: 600,
  width: "80%"
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
  background: theme.palette.background.default,
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
}));


const BestSellersSection = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(1),
  boxSizing: 'border-box',
  height: 'fit-content',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  background: theme.palette.background.paper,
  paddingBottom: theme.spacing(10),
}));

const BestSellerCardContainer = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(2),
  boxSizing: 'border-box',
  height: 'fit-content',
  paddingInline: theme.spacing(2),
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: "100%",
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
  background: theme.palette.background.paper,
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
  background: theme.palette.background.default,
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
          <Typography variant="h2" component="h1" gutterBottom>
            Chatori
          </Typography>
          <Typography variant="h4" component="h4" gutterBottom sx={{ textAlign: "center" }}>
            Order from the best Restaurant in town
          </Typography>
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
        </SectionTop>

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

        {/* <TopOffersSection container>
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

        </TopOffersSection> */}



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
