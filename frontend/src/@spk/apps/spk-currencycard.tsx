import React, { Fragment } from 'react';
import ApexchartsComponent from '../spk-packages/apexcharts-component';

interface SpkCurrencyCardProps {
    title?: string;
    imgSrc?: string;
    percentage?: string;
    opacity?: string;
    badge?: string;
    amount?: string;
    price?: string;
    amountColor?: string;
    priceColor?: string;
    options?: any;
    series?: object[];
    type?: string;
    height?: string | number;
}
interface Cardprops{
    card:SpkCurrencyCardProps;
    height:string;
}
const SpkCurrencyCard: React.FC<Cardprops> = ({card, height }) => {
    return (
        <Fragment>
            <div className="box custom-box overflow-hidden">
                <div className="box-body mb-4">
                    <div className="flex items-start justify-between mb-4 flex-wrap">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="leading-none">
                                    <span className="avatar avatar-rounded avatar-xs">
                                        <img src={card.imgSrc} alt="" />
                                    </span>
                                </div>
                                <h6 className="font-semibold mb-0">{card.title}</h6>
                            </div>
                            <span className="text-[1.5625rem] flex items-center mb-2">
                                {card.percentage}{' '}
                                <span className="text-[0.75rem] text-warning opacity-[0.7] ms-2">
                                    {card.opacity}
                                    <i className="ti ti-arrow-big-up-line ms-1 inline-flex"></i>
                                </span>
                                <span className="badge bg-success-transparent text-[.625rem] ms-2">
                                    {card.badge}
                                </span>
                            </span>
                        </div>
                        <div className="text-end">
                            <span className={`block text-[.875rem] mb-1 text-${card.amountColor}`}>
                                {card.amount}
                            </span>
                            <span className={`block text-${card.priceColor} font-semibold`}>
                                {card.price}
                            </span>
                        </div>
                    </div>
                </div>
                <div id="btc-currency-chart" className="mt-1 w-full">
                    <ApexchartsComponent
                        chartOptions={card.options}
                        chartSeries={card.series}
                        type={card.type}
                        height={height}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default SpkCurrencyCard;
