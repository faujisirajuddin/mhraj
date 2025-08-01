import React from 'react';
import SpkButton from '../uielements/spk-button';

interface SpkWalletProps {
  title?: string;
  btnTitle?: string;
  address?: string;
  copy?: string;
  imgSrc?: string;
  recieve?: string;
  price?: string;
  sent?: string;
  sentPrice?: string;
  balance?: string;
  balancePrice?: string;
}
interface CardProps {
  card: SpkWalletProps
}

const SpkWallet: React.FC<CardProps> = ({card}) => {
  return (
    <div className="box custom-box">
      <div className="box-header justify-between">
        <div className="box-title">{card.title}</div>
        <div>
          <SpkButton buttotype="button"  customClass="ti-btn ti-btn-outline-primary ti-btn-wave">
            {card.btnTitle}
          </SpkButton>
        </div>
      </div>
      <div className="box-body">
        <div className="flex items-center flex-wrap justify-between gap-4 mb-3">
          <div className="flex-grow">
            <label htmlFor="btc-wallet-address1" className="form-label">
              {card.address}
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control !border-s"
                id="btc-wallet-address1"
                defaultValue="afb0dc8bc84625587b85415c86ef43ed8df"
                placeholder="Placeholder"
              />
              <SpkButton buttotype="button"  customClass="ti-btn ti-btn-primary-full !mb-0">
                {card.copy}
              </SpkButton>
            </div>
          </div>
          <div>
            <span className="avatar avatar-xxl border dark:border-defaultborder/10">
              <img src={card.imgSrc} className="p-1 qr-image" alt="" />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="xl:col-span-4 col-span-12">
            <div className="rounded-md p-4 bg-light">
              <div className="flex items-center gap-4">
                <div className="leading-none">
                  <span className="avatar bg-success/10 !text-success">
                    <i className="ti ti-arrow-narrow-down text-[1.25rem]"></i>
                  </span>
                </div>
                <div>
                  <span className="block text-[#8c9097] dark:text-white/50">{card.recieve}</span>
                  <span className="block font-semibold">
                    {card.price} <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">BTC</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 col-span-12">
            <div className="rounded-md p-4 bg-light">
              <div className="flex items-center gap-3">
                <div className="leading-none">
                  <span className="avatar bg-danger/10 !text-danger">
                    <i className="ti ti-arrow-narrow-up text-[1.25rem]"></i>
                  </span>
                </div>
                <div>
                  <span className="block text-[#8c9097] dark:text-white/50">{card.sent}</span>
                  <span className="block font-semibold">
                    {card.sentPrice} <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">BTC</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 col-span-12">
            <div className="rounded-md p-4 bg-light">
              <div className="flex items-center gap-3">
                <div className="leading-none">
                  <span className="avatar bg-secondary/10 !text-secondary">
                    <i className="ti ti-wallet text-[1.25rem]"></i>
                  </span>
                </div>
                <div>
                  <span className="block text-[#8c9097] dark:text-white/50">{card.balance}</span>
                  <span className="block font-semibold">
                    {card.balancePrice} <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">BTC</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpkWallet;
