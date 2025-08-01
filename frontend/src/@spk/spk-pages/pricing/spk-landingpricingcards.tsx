import  { Fragment } from 'react'
import SpkButton from '../../uielements/spk-button'
import SpkBadge from '../../uielements/spk-badge'



const SpkLandingpricingcards = ({card, showBadgeClass, planType }:any) => {
  return (
    <Fragment>
           <div className={card.pricingOfferClass}>
                {showBadgeClass?   
                    <span className="pricing-offer-details shadow">
                        <span className="font-semibold">10%</span> <span className="text-[0.625rem] op-8 ms-1">Off</span>
                    </span>
                :""}
                <h6 className="font-semibold text-center text-[1rem]">{card.title}</h6>
                <div className="py-4 flex items-center justify-center">
                    <div className={card.svgClass}>
                       {card.svgIcon}
                    </div>
                    <div className="text-end ms-5">
                        <p className={`text-[1.5625rem] font-semibold mb-0 ${card.text}`}>{ planType == "monthly" ? card.price : card.yearPrice }</p>
                        <p className="text-[#8c9097] dark:text-white/50 opacity-50 text-[.6875rem] font-semibold mb-0">{  planType == "monthly" ? "per month" : "per Year" }</p>
                    </div>
                </div>
                <ul className="list-none text-center text-[0.75rem] px-4 pt-4 mb-0">
                        {card.providerList.map((plan:any, key:any) => (
                            <li key={key} className="mb-4">
                                <span className="text-[#8c9097] dark:text-white/50">
                                    {plan.title}
                                        {plan.value && (
                                            <SpkBadge variant="light"  customClass="text-defaulttextcolor ms-1">
                                                {plan.value}
                                            </SpkBadge>
                                        )}
                                </span>
                            </li>
                        ))}
                    </ul>
                <div className="grid">
                    <SpkButton buttontype="button" customClass={`ti-btn ti-btn-${card.buttonClass}`}>Get Started</SpkButton>
                </div>
            </div>
    </Fragment>
  )
}

export default SpkLandingpricingcards