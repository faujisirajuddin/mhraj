import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SpkBadge from '../../uielements/spk-badge'
import SpkButton from '../../uielements/spk-button'

interface Orderscard {
    Customfooterclass?: string;
    Custombodyclass?: string;
    Customheaderclass?: string;
    Customcardclass?: string;
    card: any;
}

const SpkoOrderscard:React.FC<Orderscard> = ({card, Customcardclass, Customheaderclass, Custombodyclass, Customfooterclass}) => {
  return (
    <Fragment>
          <div className={`box ${Customcardclass}`}>
                <div className={`box-header block !justify-start ${Customheaderclass}`}>
                    <div className="sm:flex block items-center w-full">
                        <div className="me-2">
                            <span className="avatar bg-light avatar-md mb-1">
                                <img src={card.image} alt="" />
                            </span>
                        </div>
                        <div className="flex-grow">
                            <Link to="#">
                                <span className="text-[0.875rem] font-semibold">{card.product}</span>
                            </Link>
                            <span className="block text-success">${card.price}</span>
                        </div>
                        <div className="sm:text-center">
                            <span className="text-[0.875rem] font-semibold">Order Id :</span>
                            <span className="sm:block">#{card.orderId}</span>
                        </div>
                    </div>
                </div>
                <div className={`box-body ${Custombodyclass}`}>
                    <div className="flex items-center">
                        <div className="orders-delivery-address">
                            <p className="mb-1 font-semibold">Delivery Address</p>
                            <p className="text-[#8c9097] dark:text-white/50 mb-0">
                               {card.deliveryAddress}
                            </p>
                        </div>
                        {card.deliveryData.length ?   
                            <div className="delivery-date text-center ms-auto">
                                <span className="text-[1.125rem] text-primary font-bold">{card.deliveryData[0]}</span>
                                <span className="font-semibold">{card.deliveryData[1]}</span>
                            </div>
                        :""}
                        {card.deliveryStatus? 
                         <div className="ms-auto">
                            <SpkBadge customClass={card.deliveryStatusClass}>{card.deliveryStatus}</SpkBadge>
                        </div>
                      :""}
                    </div>
                </div>
                {card.status ?  
                    <div className="box-footer sm:flex block items-center w-full justify-between">
                        <div>
                            <span className="text-[#8c9097] dark:text-white/50 me-2">Status :</span>
                            <SpkBadge customClass={`bg-${card.statusClass}/10 text-${card.statusClass}`}>{card.status}</SpkBadge>
                        </div>
                        <div className="sm:mt-0 mt-2">
                            <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-danger">Cancel Order</SpkButton>
                        </div>
                    </div>
                :""}
                {card.deliveredOn ?
                    <div className={`box-footer sm:flex block items-center w-full justify-between ${Customfooterclass}`}>
                        <div className="text-[0.6875rem]">
                                <span>Delivered on : </span>
                                <span className="font-semibold">{card.deliveredOn}</span>
                            </div>
                            <div className="sm:mt-0 mt-2">
                                <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 ti-btn-primary !text-[0.75rem] !font-medium">Rate Product
                                    <i className="bi bi-star-fill ms-2 text-xs text-warning"></i></SpkButton>
                            </div>
                    </div>
                :""}
                {card.deliveryStatus == 'Cancelled' ? 
                <div className="box-footer">
                    <div className="ltr:float-right rtl:float-left">
                        <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-light">Buy Now</SpkButton>
                    </div>
                </div>:""}
            </div>
    </Fragment>
  )
}

export default SpkoOrderscard