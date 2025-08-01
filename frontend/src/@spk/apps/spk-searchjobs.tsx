import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SpkButton from '../uielements/spk-button';
import SpkOverlay from '../uielements/spk-overlay';

interface SpkSearchjobsProps {
    cardClass?: string;
    wishlist?: string;
    jobs?: string;
    logo?: boolean;
    title?: string;
    technology?: string;
    badge?: string;
    openBadge?: string;
    graduateBadge?: string;
    yearBadge?: string;
    shiftBadge?: string;
    price?: string;
    apply?: string;
    svgIcon?:any
}
interface Cardprops {
    cardClass?: string;
    card: SpkSearchjobsProps;
    logo?: boolean;
    apply?: string;
}

const SpkSearchjobs: React.FC<Cardprops> = ({ cardClass, apply, card, logo}) => {
    return (
        <Fragment>
            <div className={`box custom-box ${cardClass}`}>
                <div className="box-body">
                    <div className="btn-list ltr:float-right rtl:float-left space-x-1 rtl:space-x-reverse">
                        <SpkOverlay>
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                <span><i className="bi bi-heart"></i></span>
                                <span
                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    {card.wishlist}
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                        <SpkOverlay>
                            <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                <span><i className="bi bi-star-fill"></i></span>
                                <span
                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    {card.jobs}
                                </span>
                            </SpkButton>
                        </SpkOverlay>
                    </div>
                    <div className="flex mb-4 flex-wrap gap-2 items-center">
                        {logo && (
                            <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10">
                                {card.svgIcon}
                            </span>
                        )}
                        <div>
                            <h5 className="font-semibold mb-0 flex items-center">
                                <Link to="#">{card.title}</Link>
                            </h5>
                            <Link to="#">{card.technology}</Link>
                        </div>
                    </div>
                    <div className="popular-tags mb-4">
                        <Link to="#" className="badge me-2 !rounded-full bg-light !text-defaulttextcolor">
                            <i className="bi bi-geo-alt text-muted me-1"></i>{card.badge}
                        </Link>
                        <Link to="#" className="badge me-2 !rounded-full bg-light !text-defaulttextcolor">
                            <i className="bi bi-briefcase text-muted me-1"></i>{card.openBadge}
                        </Link>
                        <Link to="#" className="badge me-2 !rounded-full bg-light !text-defaulttextcolor">
                            <i className="bi bi-mortarboard text-muted me-1"></i>{card.graduateBadge}
                        </Link>
                        <Link to="#" className="badge me-2 !rounded-full bg-light !text-defaulttextcolor">
                            <i className="bi bi-clock text-muted me-1"></i>{card.yearBadge}
                        </Link>
                        <Link to="#" className="badge me-2 !rounded-full bg-light !text-defaulttextcolor">
                            <i className="bi bi-moon-stars text-muted me-1"></i>{card.shiftBadge}
                        </Link>
                    </div>
                    <div className="flex justify-between">
                        <h6 className="font-semibold mb-0">{card.price}</h6>
                        <Link to="#" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                            {apply} <i className="fe fe-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SpkSearchjobs
