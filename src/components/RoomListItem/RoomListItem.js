import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './RoomListItem.scss'


const RoomListItem = (props) => {
  const { hall: { title, description, imageURL } } = props;

  return (
    <div className="room-listitem">
      <Card className='card'>
        <CardActionArea>
          <CardMedia
            className='media'
            image={imageURL}
            title={title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default RoomListItem;