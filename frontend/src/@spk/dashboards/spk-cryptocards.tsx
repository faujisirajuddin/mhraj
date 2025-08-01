import { Fragment } from 'react';
import ApexchartsComponent from '../spk-packages/apexcharts-component';
import { Link } from 'react-router-dom';

interface Cryptocards {
    Options?: any;
    Series?: any;
    Image?: string;
    title?: string;
    Value?: string;
    ratio?: string | number;
    Text?: string;
    percentage?: string;
    amount?:string;
    rank?:string;
    badge?:string;
    dollarvalue?: string;
}
interface CardProps {
    card: Cryptocards;
    Id?: string;
    footerVisible?: boolean; 
}

const SpkCryptocards: React.FC<CardProps> = ({card, Id, footerVisible = false, }) => {
    return (
        <Fragment>
            <div className="box">
                <div className="box-body">
                    <div className="flex items-center mb-5">
                        <div className="flex items-center">
                            <div className="me-2">
                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                    <img src={card.Image} alt="" />
                                </span>
                            </div>
                            <div className="mb-0 font-semibold">
                                {card.title}
                            </div>
                        </div>
                        <div className="ms-auto">
                            <div id={Id}>
                                <ApexchartsComponent chartOptions={card.Options} chartSeries={card.Series} type="line" height={40} width={120} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <div>
                            <p className="mb-1">{card.Text}</p>
                            <p className="text-[1.25rem] mb-0 font-semibold leading-none !text-primary">
                                {card.Value}
                            </p>
                        </div>
                        <div className="ms-auto text-end">
                            <p className="mb-0">{card.dollarvalue}</p>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                <span className="text-[#8c9097] dark:text-white/50">Vol:</span>({card.percentage})
                            </p>
                        </div>
                    </div>
                </div>

                {footerVisible && (
                    <div className="box-footer !p-0">
                        <div className="list-group border-0">
                            <Link to="#" className="py-3 !px-[1.25rem] flex flex-col items-start border-t-0 border-x-0 !border-b dark:border-defaultborder/10">
                                <div className="sm:flex w-full justify-between items-center">
                                    <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change
                                        <span className="badge bg-primary/10 ms-4 text-primary">Increased</span>
                                    </p>
                                    <p className="text-success mb-0 font-weight-normal tx-13">
                                        <span className="numberfont">{card.amount}</span> <i className="fa fa-arrow-up"></i> today
                                    </p>
                                </div>
                            </Link>
                            <Link to="#" className="py-3 !px-[1.25rem] flex flex-col items-start border-t-0 border-x-0 ">
                                <div className="flex w-full justify-between items-center">
                                    <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank{card.badge}</p>
                                    <p className="text-dark mb-0 tx-15">
                                        <span className="numberfont">{card.rank}</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default SpkCryptocards;
