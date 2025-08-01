import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SpkButton from '../uielements/spk-button';
import SpkOverlay from '../uielements/spk-overlay';

interface SpkJobdetailsCardProps {
  cardClass?: string;
  wishlist?: string;
  jobs?: string;
  src?: any;
  heading?: string;
  data?: string;
  badge?: string;
  graduateBadge?: string;
  yearsBadge?: string;
  Price?: string;
  apply?: string;
  ShiftBadge?: string;
  openingBadge?: string;
  Landingbadges?: boolean;
  card:any
}

const SpkJobdetailsCard: React.FC<SpkJobdetailsCardProps> = ({ cardClass, wishlist, jobs, card, badge, openingBadge , Landingbadges=false  ,ShiftBadge, graduateBadge, yearsBadge, Price, apply}) => {
  return (
    <Fragment>
      <div className={`box custom-box ${cardClass}`}>
        <div className="box-body">
          <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
            <SpkOverlay>
              <SpkButton
                buttontype="button"
                customClass={`hs-tooltip-toggle ti-btn ti-btn-sm ti-btn-icon !rounded-full ${card.wishlistclass} !text-defaulttextcolor`}
              >
                <span><i className="bi bi-heart"></i></span>
                <span
                  className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm"
                  role="tooltip"
                >
                  {wishlist}
                </span>
              </SpkButton>
            </SpkOverlay>
            <SpkOverlay>
              <SpkButton
                buttontype="button"
                customClass={`hs-tooltip-toggle ti-btn ti-btn-sm ti-btn-icon !rounded-full ${card.ratingclass} !text-warning`}
              >
                <span><i className="bi bi-star-fill"></i></span>
                <span
                  className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm"
                  role="tooltip"
                >
                  {jobs}
                </span>
              </SpkButton>
            </SpkOverlay>
          </div>

          <div className="sm:flex mb-4">
            <span className="avatar avatar-lg !rounded-full !bg-primary/10 !fill-primary border dark:border-defaultborder/10">
              {card.src}
            </span>
            <div className="ms-2">
              <h5 className="font-semibold mb-0 flex items-center">
                <Link to="#">{card.heading}</Link>
              </h5>
              <Link to="#">
              {Landingbadges == false ?
                <i className="bi bi-building"></i> 
                :""
                }
                {card.data}
              </Link>
            </div>
          </div>

          <div className="popular-tags mb-4 space-x-2 rtl:space-x-reverse">
            <Link to="#" className="badge !rounded-full bg-light text-default">
              <i className="bi bi-geo-alt text-muted me-1"></i> {badge}
            </Link>
            {Landingbadges? 
                <Link to="#" className="badge !rounded-full bg-light text-default">
                  <i className="bi bi-briefcase text-[#8c9097] dark:text-white/50 me-1"></i> {openingBadge}
                </Link>
            :""}
            <Link to="#" className="badge !rounded-full bg-light text-default">
              <i className="bi bi-mortarboard text-muted me-1"></i> {graduateBadge}
            </Link>
            <Link to="#" className="badge !rounded-full bg-light text-default">
              <i className="bi bi-clock text-muted me-1"></i> {yearsBadge}
            </Link>
            {Landingbadges?
                <Link to="#" className="badge !rounded-full bg-light text-default">
                  <i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> {ShiftBadge}
                </Link>
            :""}
          </div>

          <div className="sm:flex justify-between">
            <h6 className="font-semibold mb-0">{Price}</h6>
            <Link to="#" className="text-primary font-semibold text-[.875rem]">
              {apply} <i className="fe fe-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SpkJobdetailsCard;
