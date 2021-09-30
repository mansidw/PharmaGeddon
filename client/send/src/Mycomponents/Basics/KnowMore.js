import React from 'react'
import { Header } from '../Basics/Header'
import '../../css/know.css'
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo1 from '../../img/pres.png'
import logo2 from '../../img/order.png'
import logo3 from '../../img/cart.png'
import logo4 from '../../img/pay.png'

const KnowMore = () => {
    return (
        <div>
            <Header/>
            <section style={{backgroundColor:'#082032'}}>
                <div class="container py-2">
                    <div class="h1 text-center text-light" id="pageHeaderTitle">Just 4 east steps!</div>

                    <article class="postcard light blue">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={logo1} alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title blue">Upload</h1>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt" style={{fontSize:'20px'}}>Just with a click upload the prescribed bill in the form of an image or a pdf!</div>
                            <ul class="postcard__tagbox">
                                
                                <Button color="primary" className="button" component={RouterLink} to="/upload" size="large" variant="contained" style={{'backgroundColor':'#082032','margin':'10px','textDecoration':'none','paddingTop':'10px','color':'white'}}>
                                    Upload Image
                                </Button>
                            </ul>
                        </div>
                    </article>


                    <article class="postcard light red">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={logo2} alt="Image Title" />	
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title red">Confirm Order</h1>
                            
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt" style={{fontSize:'20px'}}>Just with a click, confirm your order or add and delete items!</div>
                            
                        </div>
                    </article>


                    <article class="postcard light green">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={logo3} alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title green">Add to Cart / Checkout</h1>
                            
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt" style={{fontSize:'20px'}}>Have the option of either adding the items to cart or proceed to checkout!</div>
                            <ul class="postcard__tagbox">
                            <Button color="primary" className="button" component={RouterLink} to="/cart" size="large" variant="contained" style={{'backgroundColor':'#082032','margin':'10px','textDecoration':'none','paddingTop':'10px','color':'white'}}>
                                    Cart
                                </Button>
                            </ul>
                        </div>
                    </article>


                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={logo4} alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">Proceed to Pay</h1>
                            
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt" style={{fontSize:'20px'}}>Finally pay for the items and get healthy!</div>
                            <ul class="postcard__tagbox">
                                <Button color="primary" className="button" component={RouterLink} to="/pay" size="large" variant="contained" style={{'backgroundColor':'#082032','margin':'10px','textDecoration':'none','paddingTop':'10px','color':'white'}}>
                                    Pay
                                </Button>
                            </ul>
                        </div>
                    </article>


                </div>
            </section>
        </div>
    )
}

export default KnowMore
