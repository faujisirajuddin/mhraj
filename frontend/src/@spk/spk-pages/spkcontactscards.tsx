import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SpkDropdown from '../uielements/spk-dropdown';
import SpkButton from '../uielements/spk-button';


interface Contacts {
    planType?: string;
    landing?: boolean;
    card:any;
}

const SpkContactscards :React.FC<Contacts>= ({card}) => {
  return (
    <Fragment>
     <div className="box">
        <div className="box-body contact-action">
            <div className="contact-overlay"></div>
            <div className="flex items-start ">
            <div className="flex flex-grow flex-wrap gap-2">
                <div className="avatar avatar-xl avatar-rounded me-3">
                <img src={card.src} alt="" />
                </div>
                <div>
                <h6 className=" mb-1 font-semibold text-[1rem]">
                    {card.class}
                </h6>
                <p className="mb-1 text-[#8c9097] dark:text-white/50 contact-mail text-truncate">{card.email}</p>
                <p className="font-semibold text-[0.6875rem] mb-0 !text-primary">
                    {card.phn}
                </p>
                </div>
            </div>
            <div>
                {card.icon}
            </div>
            </div>
            <div className="flex items-center justify-center gap-2 contact-hover-buttons">
            <SpkButton buttontype="button" customClass="ti-btn btn-sm ti-btn-light contact-hover-btn !py-1 !px-2 !text-[0.75rem] !font-medium">
                View Contact
            </SpkButton>
            <SpkDropdown Customclass="contact-hover-dropdown" Icon={true} IconClass="ri-more-2-fill" CustomToggleclass='ti-btn-sm ti-btn-light'>
                <li><Link className="ti-dropdown-item flex !gap-x-0 !px-[0.9375rem] !text-[0.8125rem] !font-medium" to="#"><i className="ri-share-line me-2 align-middle inline-block"></i>Share</Link></li>
                <li><Link className="ti-dropdown-item flex !gap-x-0" to="#"><i className="ri-phone-line me-2 align-middle inline-block"></i>Call</Link></li>
                <li><Link className="ti-dropdown-item flex !gap-x-0" to="#"><i className="ri-chat-2-line me-2 align-middle inline-block"></i>Message</Link></li>
                <li><Link className="ti-dropdown-item flex !gap-x-0" to="#"><i className="ri-video-chat-line me-2 align-middle inline-block"></i>Video Call</Link></li>
                <li><Link className="ti-dropdown-item flex !gap-x-0" to="#"><i className="ri-delete-bin-5-line me-2 align-middle inline-block"></i>Delete</Link></li>
                <li><Link className="ti-dropdown-item flex !gap-x-0" to="#"><i className="ri ri-heart-3-line me-2 align-middle inline-block"></i>Favourite</Link></li>
            </SpkDropdown>
            <SpkButton aria-label="button" customClass="ti-btn !py-[0.14rem] !px-2 ti-btn-light contact-hover-dropdown1" buttontype="button">
                <i className="ri-heart-3-fill text-danger"></i>
            </SpkButton>
            </div>
        </div>
     </div>
    </Fragment>
  )
}

export default SpkContactscards