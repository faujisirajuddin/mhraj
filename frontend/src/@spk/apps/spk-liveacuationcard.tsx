import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


interface CardProps {
  imgSrc1?: string; 
  imgSrc2?: string; 
  name?: string;
  text1?: string;
  text2?: string;
  heading?: string;
  highestBid?: string;
}
interface SpkLiveacuationCardProps {
  imgSrc1?: string; 
  imgSrc2?: string; 
  name?: string;
  text1?: string;
  text2?: string;
  heading?: string;
  highestBid?: string;
  bidImgSrc?: string;
  timeLeft?: string;
  card:CardProps
}

const SpkLiveacuationCard: React.FC<SpkLiveacuationCardProps> = ({card, bidImgSrc, timeLeft}) => { return (
    <Fragment>
      <div className="box custom-box">
        <div className="box-body !p-4">
          <div className="mb-4 overflow-hidden relative">
            <Link aria-label="anchor" to="#" className="stretched-link"></Link>
            <img src={card.imgSrc1} alt="img" className="nft-img img-fluid" />
            <Link to="#" className="nft-btn" aria-label="Like">
              <i className="ti ti-heart"></i>
            </Link>
            <span className="nft-timer-container">
              <i className="ti ti-bolt text-[.875rem]"></i>
              <span className="nft-timer ms-1 text-[0.6875rem]">{timeLeft}</span>
            </span>
          </div>

          <div className="flex justify-between items-start mb-4 flex-wrap">
            <div className="inline-flex items-start relative">
              <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/profile/`} className="stretched-link"></Link>
              <div className="me-2">
                <span className="avatar avatar-rounded">
                  <img src={card.imgSrc2} alt="img" />
                </span>
              </div>
              <div className="flex-grow">
                <span className="mb-0 block text-[.875rem] font-semibold">{card.name}</span>
                <span className="text-[.8125rem] text-[#8c9097] dark:text-white/50">
                  {card.text1}
                  <i className="bi bi-patch-check-fill text-success ms-1 text-[.9375rem]"></i>
                </span>
              </div>
            </div>
            <span className="text-[.8125rem] text-[#8c9097] dark:text-white/50">{card.text2}</span>
          </div>

          <div className="text-[.9375rem] font-semibold mb-2">
            <Link to="#">{card.heading}</Link>
          </div>

          <div className="flex items-end flex-wrap gap-2">
            <div className="flex-grow">
              <p className="text-[.875rem] mb-1 text-[#8c9097] dark:text-white/50">Highest Bid</p>
              <div className="text-[1rem] mb-0 flex items-center font-semibold">
                <span className="avatar avatar-xs me-1">
                  <img src={bidImgSrc} alt="Bid Avatar" />
                </span>
                {card.highestBid}
              </div>
            </div>
            <Link to="#" className="ti-btn ti-btn-primary btn-wave">
              Place Bid
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SpkLiveacuationCard;
