import React, { Fragment } from 'react'
import SpkButton from '../../uielements/spk-button';
import SpkBadge from '../../uielements/spk-badge';

interface Friends {
    planType?: string;
    landing?: boolean;
    card:any;
}
const Spkfriendscard :React.FC<Friends> = ({card}) => {

  return (
    <Fragment>
         <div className="box !shadow-none border dark:border-defaultborder/10">
            <div className="box-body p-6">
                <div className="text-center">
                    <span className="avatar avatar-xl avatar-rounded">
                        <img src={card.src} alt="" />
                    </span>
                    <div className="mt-2">
                        <p className="mb-0 font-semibold">{card.name}</p>
                        <p className="text-[0.75rem] opacity-[0.7] mb-1 text-[#8c9097] dark:text-white/50">{card.mail}</p>
                        <SpkBadge variant={`${card.color}/10`} customClass={`rounded-full text-${card.color}`}>{card.badge}</SpkBadge>
                    </div>
                </div>
            </div>
            <div className="box-footer text-center">
                <div className="btn-list">
                    <SpkButton buttontype="button" customClass="ti-btn btn-sm !py-1 !px-2 !text-[0.75rem] me-1 ti-btn-light">{card.Buttontext1}</SpkButton>
                    <SpkButton buttontype="button" customClass="ti-btn btn-sm !py-1 !px-2 !text-[0.75rem] text-white bg-primary">{card.Buttontext2}</SpkButton>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Spkfriendscard