import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface SpkDealsCardProps {
    imgSrc?: string; 
    title?: string;
    price?: string;
    company?: string;
    date?: string;
}

const SpkDealsCard: React.FC<SpkDealsCardProps> = ({ imgSrc, title, price, company, date }) => {
    return (
        <Fragment>
            <div className="box custom-box">
                <div className="box-body deals-content">
                    <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                        <div className="flex items-center gap-2">
                            <div className="lh-1">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={imgSrc} alt={title} />
                                </span>
                            </div>
                            <div className="text-sm">{title}</div>
                        </div>
                        <div>{price}</div>
                    </div>
                    <div className="deal-description">
                        <div className="my-1">
                            <Link to="#" className="company-name">{company}</Link>
                        </div>
                        <div className="text-muted text-xs">{date}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SpkDealsCard;
