import React, { useRef, useState, useEffect } from "react"
import axios from 'axios'
import Myheader from '../Basics/Myheader'
import "../../css/cart.css"
import CartChild from "../Basics/CartChild"
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom"

const Cart = () => {
    const [message,setMessage] = useState([])
    const history = useHistory()

    useEffect(()=>{
        //axios get method to fetch the user cart data for displaying in cart
      axios.get('http://127.0.0.1:8000/pres/cart/').then(
          //res=>setMessage([res.data])
          //])
      )
      setMessage(
        [...message,
            {
                
                med_name:'ventolin hfa',
                price:'98.00',
                quantity:'1'
            },
            {
                med_name:'fluticasone cream',
                price:'79.50',
                quantity:'1'
            },
        ]
    )
      //firestore.collection("users").doc(currentUser.uid)
      //.get()
      //.then((doc) => {
      //  console.log("mansi1")
      //    if (doc.exists) {
      //      console.log("mansi2")
      //      setMessage(doc.data())
      //      console.log(doc.data())
      //  }})
      //  .catch((error) => {
      //    console.log("Error getting document:", error);
      //});
    },[])

    const payChange=()=>{
        axios.get('http://127.0.0.1:8000/pres/pay/').then(
          res=>history.push("/pay"))

    }


    return (
        <div>
            <Myheader/>
            <div className="content">
                <div className="container mt-5 mb-3">
                    <div className="row">

                    {message ? <CartChild arr={message} />:<></>}
                    </div>
                    <Button color="primary" className="button" component={RouterLink} onClick={payChange} size="large" variant="contained" style={{'backgroundColor':'#2C394B','marginTop':'20px','margin':'10px','textDecoration':'none','paddingTop':'10px'}}>
                    Pay
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart
