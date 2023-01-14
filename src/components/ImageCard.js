import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


 const ImageCard =({onClick,image,detail})=> {
  return (
    <Card className = "shadow mb-5 rounded border black" sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="flag"
        />
        <CardContent>
          <div className = "text-center mx-auto">
           {detail}
          </div>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImageCard;