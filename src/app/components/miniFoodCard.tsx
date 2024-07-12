import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MiniFoodCard() {
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Card variant="outlined" sx={{ maxWidth: 240 }}>
      <CardActionArea>
        <CardHeader />
        <CardMedia
          component="img"
          height="160"
          width="120"
          image="https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Grid container direction="column" justifyContent="space-between" gap="8px">
            <Typography variant="h6" color="text.secondary">
              Hamburger
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Classic Hamburger with cheese and veggies in it, served with fries and coke.
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Rs. 299
            </Typography>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Button variant="contained" color="primary">Order Now</Button>
          </ExpandMore>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
