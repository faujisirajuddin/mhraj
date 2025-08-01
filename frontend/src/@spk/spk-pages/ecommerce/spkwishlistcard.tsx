import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { AddToCart } from '../../../redux/action';
import SpkBadge from '../../uielements/spk-badge';

interface Wishlistcard {
    Custombodyclass?: string;
    Customcardclass?: string;
    card: any;
    Removefunc: any;
} 
const Spkwishlistcard :React.FC<Wishlistcard>= ({card, Customcardclass ,Custombodyclass, Removefunc}) => {

  return (
    <Fragment>
        <div className={`box product-card ${Customcardclass}`}>
            <div className={`box-body ${Custombodyclass}`}>
                <Link to="#" className="product-image">
                    <img src={card.preview} className="card-img mb-3 rounded-sm" alt="..." />
                </Link>
                <div className="product-icons">
                    <Link aria-label="anchor" onClick={Removefunc} to="#" className="wishlist btn-delete"><i className="ri-close-line"></i></Link>
                </div>
                <p className="product-name font-semibold mb-0 flex items-center justify-between">{card.title}<span className="ltr:float-right rtl:float-left text-warning text-xs">4.2<i className="ri-star-s-fill align-middle ms-1"></i></span></p>
                <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">{card.description}</p>
                <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between"><span>{card.oldpr}<span className="text-[#8c9097] dark:text-white/50 line-through ms-1 opacity-[0.6] inline-block">{card.newpr}</span></span>
                <SpkBadge variant="secondary/10" customClass="text-secondary ltr:float-right rtl:float-left !text-[.625rem]">{card.percentage}</SpkBadge></p>
                <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                    <i className="ti ti-discount-2 text-[1rem] me-1"></i>Offer Price {card.offerprice}
                </p>
            </div>
            <div className="box-footer text-center ">
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="ti-btn ti-btn-primary !m-2 !font-medium" onClick={() => { AddToCart(card.id); }}><i className="ri-shopping-cart-2-line me-1 align-middle inline-block "></i>Move To Cart</Link>
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/product-details/${card.id}`} className="ti-btn ti-btn-success !m-2 !font-medium"><i className="ri-eye-line me-1 align-middle inline-block "></i>View Product</Link>
            </div>
        </div>
    </Fragment>
  )
}

export default Spkwishlistcard