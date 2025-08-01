import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SpkButton from '../uielements/spk-button';

interface Blogimg {
    readMore?: string
    cardFooterClass?: string;
    customCardClass?: string;
    Navigate: string;
    buttonclass?: string;
    card: any;
}

const SpkBlogimgcards:React.FC<Blogimg> = ({card,customCardClass,cardFooterClass, Navigate, buttonclass}) => {
  return (
    <Fragment>
        <div className={`box ${customCardClass}`}>
            <Link to="#">
                <img src={card.img} className="card-img-top rounded-t-sm" alt="..." />
            </Link>
            <div className="box-body">
                <Link to={Navigate} className="font-semibold text-[0.875rem] text-dark mb-1">{ card.title }</Link>
                <p className="card-text text-[#8c9097] dark:text-white/50 mb-3">{ card.content }</p>
                <Link to="#" className="ti-btn ti-btn-primary !font-medium !mb-0">Read More</Link>
            </div>
            <div className={`box-footer ${cardFooterClass}`}>
                <div className={`flex items-center justify-between ${buttonclass}`}>
                    <div className="flex items-center">
                        <div className="avatar avatar-sm avatar-rounded me-2">
                            <img src={card.src} alt="" />
                        </div>
                        <div>
                            <p className="mb-0 font-semibold">{ card.name }</p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[.625rem] mb-0">{ card.date }</p>
                        </div>
                    </div>
                    <div>
                        <SpkButton Label="button" buttontype="button"  variant="light" Size="sm" customClass="ti-btn !me-[0.375rem]"><i className="ri-thumb-up-line"></i></SpkButton>
                        <SpkButton Label="button" buttontype="button"  variant="light" Size="sm" customClass="ti-btn"><i className="ri-chat-2-line"></i></SpkButton>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SpkBlogimgcards