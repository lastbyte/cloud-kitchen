import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';


const DescriptionContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 auto',
}));

const ActionsContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  pl: 1,
  pb: 1,
}));

const CardContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
}));

export default function RestaurantCard() {

  return (
    <Card variant="outlined" >
      <CardActionArea sx={{ display: 'flex' }} >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <CardContentContainer>
              <DescriptionContent>
                <Typography component="div" variant="h6">
                  Chatori
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  chinese, fast food
                </Typography>

              </DescriptionContent>
              <ActionsContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography variant="button">100+ orders</Typography>
                </Box>

              </ActionsContent>
            </CardContentContainer>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 180, height: 180, display: { sm: 'block' } }}
          image="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDY2NjE4LWltYWdlLWt3dnkzdnltLmpwZw.jpg"
          alt="Live from space album cover"
        />
      </CardActionArea>
    </Card >
  );
}
