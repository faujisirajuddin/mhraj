import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SpkDropdown from '../uielements/spk-dropdown'
import SpkButton from '../uielements/spk-button';

interface SpkTeamcardsprops {
  Mainimg?: string;
  Avatarimg?: string;
  Name?: string;
  Projects?: string;
  Mail?: string;
  Membership?: string;
  Position?: string;
  Ratingclass?: string;
}
interface Maincard {
 card: SpkTeamcardsprops;
}

const SpkTeamcards:React.FC<Maincard> = ({card}) => {
  return (
    <Fragment>
        <div className="box team-member-card">
            <div className="teammember-cover-image">
                <img src={card.Mainimg} className="card-img-top" alt="..." />
                <span className="avatar avatar-xl avatar-rounded">
                    <img src={card.Avatarimg} alt="" />
                </span>
                <Link aria-label="anchor" to="#" className={`team-member-star text-${card.Ratingclass}`}>
                    <i className="ri-star-fill text-[1rem]"></i>
                </Link>
            </div>
            <div className="box-body !p-0">
                <div className="flex flex-wrap align-item-center sm:mt-0 mt-[3rem] justify-between border-b border-dashed dark:border-defaultborder/10 p-4">
                    <div className="team-member-details flex-grow">
                        <p className="mb-0 font-semibold text-[1rem] text-truncate">
                            <Link to="#">{card.Name}</Link>
                        </p>
                        <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 text-truncate">{card.Mail}</p>
                    </div>
                    <SpkDropdown Icon={true} Customclass="" Linktag={false}  arialexpand={false}  IconClass="ti ti-dots-vertical"
                        CustomToggleclass="ti-btn-sm ti-btn-light">
                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Move To</Link></li>
                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Edit</Link></li>
                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" to="#">Remove</Link></li>
                    </SpkDropdown>
                </div>
                <div className="team-member-stats sm:flex items-center justify-evenly">
                    <div className="text-center p-4 w-full">
                        <p className="font-semibold mb-0">Member Since</p>
                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{card.Membership}</span>
                    </div>
                    <div className="text-center p-4 w-full">
                        <p className="font-semibold mb-0">Projects</p>
                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{card.Projects}</span>
                    </div>
                    <div className="text-center p-4 w-full">
                        <p className="font-semibold mb-0">Position</p>
                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{card.Position}</span>
                    </div>
                </div>
            </div>
            <div className="box-footer border-block-start-dashed dark:border-defaultborder/10 text-center">
                <div className="btn-list">
                    <div className="btn-list">
                        <SpkButton buttontype="button" Label="button" customClass="ti-btn ti-btn-sm ti-btn-light !me-[0.375rem]">
                            <i className="ri-facebook-line font-bold"></i>
                        </SpkButton>
                        <SpkButton buttontype="button" Label="button" customClass="ti-btn ti-btn-sm ti-btn-secondary !me-[0.375rem]">
                            <i className="ri-twitter-x-line font-bold"></i>
                        </SpkButton>
                        <SpkButton buttontype="button" Label="button" customClass="ti-btn ti-btn-sm ti-btn-warning me-[0.375rem]">
                            <i className="ri-instagram-line font-bold"></i>
                        </SpkButton>
                        <SpkButton buttontype="button" Label="button" customClass="ti-btn ti-btn-sm ti-btn-success me-[0.375rem]">
                            <i className="ri-github-line font-bold"></i>
                        </SpkButton>
                        <SpkButton buttontype="button" Label="button" customClass="ti-btn ti-btn-sm ti-btn-danger">
                            <i className="ri-youtube-line font-bold"></i>
                        </SpkButton>
                    </div>
                </div>
            </div>
        </div>
        
    </Fragment>
  )
}

export default SpkTeamcards