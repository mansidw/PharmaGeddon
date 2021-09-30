import React from 'react'
import { Header } from '../Basics/Header'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import "../../css/cart.css"
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import avil from "../../img/avil.png"
import crocin from "../../img/crocin.jpeg"
import meftal from "../../img/meftal-spas.jpg"
import metrogyl from "../../img/metrogyl.jpg"
import seacod from "../../img/seacod.jpeg"
import soframycin from "../../img/soframycin.jpeg"
import volini from "../../img/volini.jpeg"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  export default function AboutUs() {
  

  return (
    <>
    <Header/>
    <div className="content">
        <div className="container mt-5 mb-3">
            <div className="row">


                    <Card sx={{ maxWidth: 345 }} style={{'margin':'40px','fontFamily': 'Raleway'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                द
                            </Avatar>
                            }
                            title="Avil"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={avil}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{'fontFamily': 'Raleway'}}>
                            PRICE : Rs.250 <br/>
                            Avil 25 Tablet is an antiallergic medication used in the treatment of various allergic conditions. It provides relief from runny nose, sneezing, congestion, itching, and watery eyes.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Add to Cart">
                                <ShoppingCartIcon/>
                            </IconButton>
                        
                        </CardActions>
                        </Card>


                        <Card sx={{ maxWidth: 345 }} style={{'margin':'40px','fontFamily': 'Raleway'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                द
                            </Avatar>
                            }
                            title="Crocin"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={crocin}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{'fontFamily': 'Raleway'}}>
                            PRICE : Rs.250 <br/>
                            Crocin Advance Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headaches, body aches, toothaches, and the common cold. It works by inhibiting the release of certain chemicals that cause pain and fever.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Add to Cart">
                                <ShoppingCartIcon/>
                            </IconButton>
                        
                        </CardActions>
                        </Card>



                        <Card sx={{ maxWidth: 345 }} style={{'margin':'40px','fontFamily': 'Raleway'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                द
                            </Avatar>
                            }
                            title="Meftal P"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={meftal}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{'fontFamily': 'Raleway'}}>
                                PRICE : Rs.250 <br/>
                            Meftal-Spas Tablet is a prescription medicine that helps to provide symptomatic relief from menstrual (period-related) pain and cramps. It is also used to treat abdominal pain by relieving spasms of the muscles in the stomach and intestines.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Add to Cart">
                                <ShoppingCartIcon/>
                            </IconButton>
                        
                        </CardActions>
                        </Card>



                        <Card sx={{ maxWidth: 345 }} style={{'margin':'40px','fontFamily': 'Raleway'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                द
                            </Avatar>
                            }
                            title="Metrogyl"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={metrogyl}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{'fontFamily': 'Raleway'}}>
                            PRICE : Rs.250 <br/>
                            Metrogyl Tablet is an antibiotic medicine that helps your body fight infections caused by bacteria and parasites. It is used to treat infections of the liver, stomach, intestines, vagina, brain, heart, lungs, bones, and skin.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Add to Cart">
                                <ShoppingCartIcon/>
                            </IconButton>
                        
                        </CardActions>
                        </Card>



                        <Card sx={{ maxWidth: 345 }} style={{'margin':'40px','fontFamily': 'Raleway'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                द
                            </Avatar>
                            }
                            title="Seacod"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={seacod}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{'fontFamily': 'Raleway'}}>
                            PRICE : Rs.250 <br/>
                            Seacod capsule contains pure cod liver oil. Pure Cod liver oil is a rich natural source of omega-3 that includes the nutrients EPA and DHA which are essential to good health. They support a healthy heart and helps maintain vision and brain function.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Add to Cart">
                                <ShoppingCartIcon/>
                            </IconButton>
                        
                        </CardActions>
                        </Card>




                        <Card sx={{ maxWidth: 345 }} style={{'margin':'40px','fontFamily': 'Raleway'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                द
                            </Avatar>
                            }
                            title="Soframycin"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={soframycin}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{'fontFamily': 'Raleway'}}>
                            PRICE : Rs.250 <br/>
                            Soframycin Skin Cream is an antibiotic used to treat bacterial skin infections. It is effective in treating infected cuts, wounds, and minor burns. This medicine stops the bacteria from growing, which helps to resolve your symptoms and cure the underlying infection.

                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Add to Cart">
                                <ShoppingCartIcon/>
                            </IconButton>
                        
                        </CardActions>
                        </Card>




                        <Card sx={{ maxWidth: 345 }} style={{'margin':'40px','fontFamily': 'Raleway'}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                द
                            </Avatar>
                            }
                            title="Volini"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={volini}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{'fontFamily': 'Raleway'}}>
                            PRICE : Rs.250 <br/>
                            Volini Spray is a pain relief spray that provides instant relief from muscle pain, sprain and pain in the joints. Scientifically formulated with the ingredients such as Diclofenac diethylamine, Methyl Salicylate and Menthol, it contains microparticles that provide quick relief from pain by penetrating deeply. Musculoskeletal and joint pain can also be cured by its use.

                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="Add to Cart">
                                <ShoppingCartIcon/>
                            </IconButton>
                        
                        </CardActions>
                        </Card>

            </div>
        </div>
    </div>
    </>
  );
}