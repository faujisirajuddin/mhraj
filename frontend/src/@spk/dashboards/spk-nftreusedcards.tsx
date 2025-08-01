import  { Fragment } from 'react'
import ethereumsq from "../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import SpkBadge from '../uielements/spk-badge';
import SpkButton from '../uielements/spk-button';

interface SpkNFTCardsProps {
    image1?: string;      
    image2?: string;       
    name?: string;       
    mail?: string;       
    likes?: string;     
    bid?: string | number; 
    title?: string;           
    button?: boolean;   
    avatarclass?: string;   
}
interface Cardprops { 
    button?: boolean;   
    card: SpkNFTCardsProps; 
    customClass?: string;  
}

const SpkNFTAuctionCards:React.FC<Cardprops>  = ({ button=true, card, customClass}) => {
  return (
    <Fragment>  
            <div className={`box ${customClass}`}>
                <img src={card.image1} className="card-img-top" alt="..." />
                <div className="flex items-center justify-between nft-like-section w-full px-4">
                    <div className="flex-grow">
                        <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn ti-btn-icon bg-success text-white !rounded-full ti-btn-wave">
                            <i className="ri-heart-fill"></i>
                        </SpkButton>
                    </div>
                    <div>
                        <SpkBadge customClass="nft-like-badge text-white"><i
                            className="ri-heart-fill me-1 text-danger align-middle inline-block"></i>{card.likes}</SpkBadge>
                    </div>
                </div>
                <div className="box-body">
                    <div className="flex items-center mb-3">
                        <img src={card.image2} alt="" className={`avatar avatar-md ${card.avatarclass}`} />
                        <div>
                            <p className="mb-0 font-semibold">{card.name}</p>
                            <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">{card.mail}</p>
                        </div>
                    </div>
                    <p className="mb-0 text-white nft-auction-time">
                        04hrs : 24m : 38s
                    </p>
                    <p className="text-[0.9375rem] font-semibold mb-2">{card.title}</p>
                    <div className="flex flex-wrap itesm-center justify-between mb-4">
                        <div className="font-semibold">
                            Highest Bid -
                        </div>
                        <div className="flex flex-wrap items-center leading-none">
                            <span className="avatar avatar-xs me-1">
                                <img src={ethereumsq}
                                    alt="" />
                            </span>{card.bid}
                        </div>
                    </div>
                   {button?  
                   <div className="grid">
                        <SpkButton buttontype="button" variant="primary" customClass="ti-btn ti-btn-wave">Place Bid</SpkButton>
                    </div>
                    :""}
                </div>
            </div>
    </Fragment>
  )
}

export default SpkNFTAuctionCards