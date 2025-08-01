import React, { Fragment } from 'react';

interface SpkDealsProps {
    title?: string;
    leads?: string;
    price?: string;
    color?: string;
    customClass?:string;
}

const SpkDeals: React.FC<SpkDealsProps> = ({ title, leads, price, color,customClass }) => {
    return (
        <Fragment>
            <div className="box custom-box">
                <div className="box-body !p-4 deals-content">
                    <div className="flex items-start flex-wrap justify-between">
                        <div>
                            <div className={`font-semibold text-[.9375rem] ${customClass}`}>{title}</div>
                            <span className="badge bg-light text-default">{leads}</span>
                        </div>
                        <div>
                            <span className={`text-${color} font-semibold`}>{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SpkDeals;
