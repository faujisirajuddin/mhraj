import React, { Fragment, ReactNode } from 'react'
import SpkBadge from '../uielements/spk-badge';

interface SpkEcommerceCardsProps {
    svg?: ReactNode;      
    title?: string;       
    ratio?: string | number; 
    text: string;        
    color?: string;       
  }
const SpkEcommerceCards: React.FC<SpkEcommerceCardsProps> = ({svg, title, ratio, text, color}) => {
  return (
    <Fragment>
        <div className="box">
                <div className="box-body">
                    <div className="grid grid-cols-12">
                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon px-0">
                            <span className={`rounded-md p-4 bg-${color}/10`}>
                               {svg}
                            </span>
                        </div>
                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                            <div className="mb-2">{title}</div>
                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                                    {ratio}
                                </span>
                            </div>
                            <div>
                                <span className="text-[0.75rem] mb-0">{text.includes("+")? "Increased": "Decreased"} by <SpkBadge customClass={`bg-${text.includes("+")? "success" : "danger"}/10 text-${text.includes("+")? "success": "danger"} mx-1`}>{text}</SpkBadge> this month</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </Fragment>
  )
}

export default SpkEcommerceCards