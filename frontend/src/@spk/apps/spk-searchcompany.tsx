import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SpkButton from '../uielements/spk-button';
import SpkOverlay from '../uielements/spk-overlay';

interface Cardprops {
  tooltip?: string;
  card:SpkSearchcompanyProps
  Shareicon?: boolean;
  sharetooltip?: string;
}
interface SpkSearchcompanyProps {
  imgSrc?: string;
  title?: string;
  address?: string;
  year?: string | number;
  ratings?: React.ReactNode;
  rate?: string;
  employees?: string | number;
  vacancies?: string | number;
  tooltip?: string;
}

const SpkSearchcompany: React.FC<Cardprops> = ({ tooltip,  sharetooltip, Shareicon, card}) => {
  return (
    <Fragment>
      <div className="box custom-box">
        <div className="box-body">
          <div className="btn-list ltr:float-right rtl:float-left">
            <SpkOverlay>
              <SpkButton
                buttontype="button"
                customClass="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm"
              >
                <span><i className="bi bi-heart"></i></span>
                <span
                  className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm"
                  role="tooltip"
                >
                  {tooltip}
                </span>
              </SpkButton>
              {Shareicon?               
              <SpkOverlay> 
                    <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm ms-1"> 
                      <span><i className="bi bi-share"></i></span> 
                      <span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip"  data-popper-placement="top">
                        {sharetooltip} 
                    </span>
                  </SpkButton> 
              </SpkOverlay>:""}
            </SpkOverlay>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <span className="avatar avatar-xl bg-white dark:bg-bodybg shadow-sm border dark:border-defaultborder/10 p-2 !rounded-full">
              <img src={card.imgSrc} alt="Company Avatar" />
            </span>
            <div className="ms-2">
              <h5 className="font-semibold mb-0 flex items-center">
                <Link to={`${import.meta.env.BASE_URL}pages/profile`}>{card.title} <i className="bi bi-check-circle-fill text-success text-base" title="Verified company"></i></Link>
              </h5>
              <div className="flex gap-2">
                <Link to="#"><i className="bi bi-geo-alt text-[0.6875rem]"></i> {card.address}</Link>
                <p className="mb-0 text-[#8c9097] dark:text-white/50">{card.year}</p>
              </div>
              <div className="flex items-center text-[0.74rem] text-[#8c9097] dark:text-white/50">
                <p className="text-[0.75rem] mb-0">Ratings: </p>
                <div className="min-w-fit ms-2 space-x-1">
                  {card.ratings}
                </div>
                <Link to="#" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                  <span>{card.rate}</span> <span>Ratings</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-footer">
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex-grow">
              <Link to="#" className="badge me-2 badge-md !rounded-full bg-info/10 text-info" title="No of employees">
                <i className="bi bi-people me-1"></i>{card.employees}
              </Link>
              <Link to="#" className="badge badge-md !rounded-full bg-primary/10 text-primary">
                <i className="bi bi-briefcase me-1"></i>{card.vacancies}
              </Link>
            </div>
            <Link to="#" className="ti-btn btn-wave ti-btn-primary-full">
              View Profile <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SpkSearchcompany;
