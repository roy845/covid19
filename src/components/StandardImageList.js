import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from "@mui/material/Tooltip";

 const StandardImageList = ({items})=> {
  return (
    <ImageList sx={{ width: 800, height: 500 }} cols={3} rowHeight={164}>
      {items.map((item) => (
        <ImageListItem key={item.img}>
          <Tooltip title = {item.title}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />

          </Tooltip>
         
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StandardImageList;



