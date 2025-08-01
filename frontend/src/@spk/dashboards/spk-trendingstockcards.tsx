import React, { Fragment } from 'react'
import SpkButton from '../uielements/spk-button';


interface StockItem {
    icon?: string;       
    title?: string;      
    ratio?: string;            
    text?: string;     
    increment?: string ;      
}
interface SpkTrendingstockcardsProps {
    customClass?: string ;   
    customBodyClass?: string ;
    avatarclass?: string ;
    stockItem: StockItem; // Accept a single stockItem object
}

const SpkTrendingstockcards :React.FC<SpkTrendingstockcardsProps> = ({ stockItem ,customBodyClass,customClass, avatarclass}) => {
    const { icon, title, ratio, text, increment } = stockItem;
  return (
    <Fragment>
    <div className={` box ${customClass}`}>
        <div className={`box-body ${customBodyClass}`}>
            <div className="flex gap-2 flex-wrap items-center justify-between mb-4">
                <div className="flex flex-grow items-center">
                    <div className="me-2">
                        <span className={`avatar border ${avatarclass}`}>
                            <i className={`${icon} text-primary text-[1.125rem]`}></i>
                        </span>
                    </div>
                    <div className="leading-none">
                        <span className="font-semibold block mb-2 text-default">{title}</span>
                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">{ratio}</span>
                    </div>
                </div>
                <div className="text-success text-[0.75rem] text-end">
                    <span className="block">{text}<i className="ti ti-arrow-bear-right"></i></span>
                    <span className="block">{increment}</span>
                </div>
            </div>
            <div className="flex gap-2">
                <SpkButton buttontype="button" customClass="ti-btn ti-btn-sm ti-btn-light flex-grow font-medium">Short</SpkButton>
                <SpkButton buttontype="button" customClass="ti-btn ti-btn-sm ti-btn-primary flex-grow font-medium">Buy</SpkButton>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default SpkTrendingstockcards
