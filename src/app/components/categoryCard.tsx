import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Theme, useTheme } from '@mui/material';
import { capitalize, toUpper } from 'lodash';

interface CategoryCardProps {
  displayText: string;
  icon: any;
}

const CategoryCard = (props: CategoryCardProps) => {

  return (
    <Card sx={{ width: 100, height: 100, background: "transparent", border: "none", }} variant="outlined">
      <CardActionArea sx={{ height: "100%" }}>
        <CardContent>
          <Grid sx={{ fontSize: "2rem" }} gap="8px" container direction="column" alignItems="center" >
            {props.icon}
            <Typography gutterBottom variant="body1" component="div">
              {capitalize(props.displayText)}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
