import  { Fragment } from 'react'
import SpkBadge from '../../uielements/spk-badge';
import SpkButton from '../../uielements/spk-button';

const SpkPricingcards= ({ customCardClass, cardBodyClass, cardHeadColor, planType,  card}:any) => {
  return (
    <Fragment>
          <div className={`box ${customCardClass}`}>
                <div className={`box-body ${cardBodyClass} `}>
                    <div className={`px-1 py-2 ${cardHeadColor}`}></div>
                    <div className="!p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-[1.125rem] font-semibold">{card.type}</div>
                            <div>
                                <SpkBadge customClass={card.badgecolor}>{card.badgeText}</SpkBadge>
                            </div>
                        </div>
                        <div className="text-[1.5625rem] font-bold mb-1">{ planType == "monthly" ? card.price : card.yearPrice }
                            <sub className="text-[#8c9097] dark:text-white/50 font-semibold text-[.6875rem] ms-1">/ { planType == "monthly" ? "Per Month" : "Per Year" }</sub>
                        </div>
                        <div className="mb-1 text-[#8c9097] dark:text-white/50">{card.description}</div>
                        <div className="text-[0.75rem] mb-4"><u>{ planType == "monthly" ? "Billed Monthly" : "Billed Yearly" }</u></div>
                         <ul className="list-none mb-0">
                            {card.providerList.map((plan:any, key:any) => (
                                <li key={key} className="flex items-center mb-4">
                                    <span className="me-2">
                                        <i className={`ri-checkbox-circle-line text-[.9375rem] ${plan.status}`}></i>
                                    </span>
                                    <span dangerouslySetInnerHTML={{ __html: plan.title }}></span>
                                </li>
                            ))}
                             <li className="grid">
                                <SpkButton type="button" customClass={`ti-btn ti-btn-${card.Buttonclass}`}>Choose Plan</SpkButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default SpkPricingcards