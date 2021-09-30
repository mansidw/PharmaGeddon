import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const CartChild = (props) => {
    const [number,setNumber] = useState()
    const classes = useStyles();
    const plusd=()=>{
        setNumber(number+1)
    }
    return (
        <Grid container spacing={10} style={{'marginBottom':'70px'}}>
                {props.arr.map((item,key) => (
                <Grid item key={key} xs={12} sm={6}>
                    <Card className={classes.card}>
                    
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2" style={{'fontFamily':'Raleway'}}>
                        {item.med_name}
                        </Typography>
                        <Typography style={{'fontFamily':'Raleway'}}>
                        {item.price}
                        </Typography>
                        <Typography style={{'fontFamily':'Raleway'}}>
                        {item.quantity}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" target="_blank" href={item.email} color="primary" style={{'fontFamily':'Raleway','backgroundColor':'#082032','color':'white'}} >
                          Remove
                        </Button>
                        <AddCircleOutlineOutlinedIcon fontSize="large" onClick={plusd}/>
                        <RemoveCircleOutlineOutlinedIcon fontSize="large" onClick={() => console.log("masi-")}/>
                        <p style={{fontSize:'20px'}}>{number}</p>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
    )
}

export default CartChild
