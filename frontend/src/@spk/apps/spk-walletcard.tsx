import React, { Fragment } from 'react';
import SpkButton from '../uielements/spk-button';


interface WalletCardProps {
  title?: string;
  imgSrc?: string;
  available?: string;
  amount?: string;
  price?: string;
  data?: string;
}
interface Cardprops {
  depositAction?: () => void;
  withdrawAction?: () => void;
  card: WalletCardProps;
}

const SpkWalletcard: React.FC<Cardprops> = ({ card, depositAction, withdrawAction}) => {
  return (
    <Fragment>
      <div className="box custom-box">
        <div className="box-header">
          <div className="box-title">
            {card.title}
          </div>
        </div>
        <div className="box-body">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="leading-none">
                <span className="avatar avatar-rounded">
                  <img src={card.imgSrc} alt="Wallet Avatar" />
                </span>
              </div>
              <div>
                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">
                  {card.available}
                </span>
                <span className="font-semibold">{card.amount}</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">{card.price}</span>
              <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">
                {card.data}
              </span>
            </div>
          </div>
        </div>
        <div className="box-footer">
          <div className="btn-list text-center">
            <SpkButton
              buttontype="button"
              customClass="ti-btn ti-btn-primary min-w-[9.375rem] me-2 btn-wave"
              onclickfunc={depositAction}
            >
              Deposit
            </SpkButton>
            <SpkButton
              buttontype="button"
              customClass="ti-btn ti-btn-success min-w-[9.375rem] btn-wave"
              onclickfunc={withdrawAction}
            >
              Withdraw
            </SpkButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SpkWalletcard;
