import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Dish =({dish, editHandler, deleteHandler}) =>{
    const {image, title,price} = dish;

  return (
    <Card sx={{ width:'90%',justifyContent: 'space-between', display:'flex', flexDirection:'row', margin:'15px auto'}}>
      <CardMedia
        component="img"
        alt="Food image"
        height="140"
        sx={{width:'120px', margin:'10'}}
        image={image}
      />
      <CardContent sx={{width:'70%',justifyContent: 'flex-start',alignItems:'center', display:'flex', flexDirection:'row'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{marginLeft:'20px'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginLeft:'50px'}}>
        {price} KGS
        </Typography>
      </CardContent>
      <CardActions sx={{display:'row', marginRight:'30px'}}>
        <Button size="small" onClick={editHandler}>Edit</Button>
        <Button size="small" onClick= {deleteHandler}>Delete</Button>
      </CardActions>
    </Card>
  );

  }
  export default Dish;