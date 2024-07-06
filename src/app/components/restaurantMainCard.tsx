import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";

interface RestaurantMainCardProps {
}

const RestaurantMainCard = (props: RestaurantMainCardProps) => {
  return (
    <Card sx={{ maxWidth: 800, display: "flex" }} variant="outlined" >
      <CardActionArea >
        <CardMedia
          component="img"
          height="240"
          image="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDY2NjE4LWltYWdlLWt3dnkzdnltLmpwZw.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography variant="h5" component="div">
            Chatori
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            get lost in the taste of chinese and fast food with mouth watering dishes, served hot and fresh.
          </Typography>
          <Chip label="flat 20% off +2 more offers" color="primary" sx={{ width: "fit-content" }} />
        </CardContent>
        <CardActionArea>
        </CardActionArea>
      </CardActionArea>
    </Card>

  );
}


export default RestaurantMainCard;
