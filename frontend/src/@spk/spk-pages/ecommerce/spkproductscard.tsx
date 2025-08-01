 import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { AddToCart } from '../../../redux/action';
import SpkBadge from '../../uielements/spk-badge';

interface Productscard {
    Custombodyclass?: string;
    Customcardclass?: string;
    card: any;
} 

 const SpkProductscard :React.FC<Productscard>= ({card, Customcardclass, Custombodyclass}) => {
   return (
     <Fragment>
         <div className={`box product-card ${Customcardclass}`}>
            <div className={`box-body ${Custombodyclass}`}>
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/product-details/${card.id}`}className="product-image">
                    <img src={card.preview} className="card-img mb-3 rounded-md"
                        alt="..." />
                </Link>
                <div className="product-icons">
                    <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`} className="wishlist"><i
                        className="ri-heart-line"></i></Link>
                    <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="cart" 
                        onClick={() => {
                            AddToCart(card.id); 
                        }}><i className="ri-shopping-cart-line"></i></Link>
                    <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/ecommerce/product-details/${card.id}`}className="view"><i
                        className="ri-eye-line"></i></Link>
                </div>
                <p
                    className="product-name font-semibold mb-0 flex items-center justify-between">
                    {card.title}<span className="ltr:float-right rtl:float-left text-warning text-xs">4.2<i
                        className="ri-star-s-fill align-middle ms-1 inline-block"></i></span>
                </p>
                <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                    {card.description}</p>
                <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                    <span>{card.newpr}<span
                        className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">{card.newpr}</span></span>
                        <SpkBadge customClass="bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">72% off</SpkBadge>
                </p>
                <p
                    className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                    <i className="ti ti-discount-2 text-[1rem] me-1"></i>Offer Price {card.offerprice}
                </p>
            </div>
        </div>

     </Fragment>
   )
 }
 
 export default SpkProductscard