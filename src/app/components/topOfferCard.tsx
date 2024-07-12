import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Theme } from '@mui/material';

interface TopOfferCardProps {
  displayText: string;
  icon: any;
}

const TopOfferCard = (props: TopOfferCardProps) => {
  return (
    <Card sx={{ width: 200, minHeight: 100, background: "transparent", border: "none" }} variant="outlined">
      <CardActionArea>
        <CardContent>
          <Grid container direction="column" alignItems="center">
            <props.icon color="primary" sx={(theme: Theme) => ({ fontSize: "3rem", colors: theme.palette.primary.main })} />
            <Typography gutterBottom variant="body1" component="div">
              {props.displayText}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TopOfferCard;
