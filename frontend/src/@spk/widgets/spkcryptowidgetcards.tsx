import  { Fragment } from 'react'
import ApexchartsComponent from '../spk-packages/apexcharts-component'
import SpkBadge from '../uielements/spk-badge';

interface Spkcryptowidgetcards {
    options?: any;      
    series?: any;     
    SvgIcon?: React.ReactNode;     
    Title?: string | number;
    SubTitle: string;       
    Value?: string;       
    Percentage?: string;      
    Id?: string;       
}

interface CardProps {
  card: Spkcryptowidgetcards
 }

const Spkcryptowidgetcards :React.FC<CardProps> = ({card}) => {
  return (
    <Fragment>
          <div className="box custom-box">
                <div className="box-body">
                    <div className="flex items-start">
                        <div className="me-4">
                            <span className="avatar avatar-sm shadow-sm !rounded-full">
                                {card.SvgIcon}
                            </span>
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-wrap items-center justify-between text-[.875rem] mb-1">
                                <span className="flex-grow">{card.Title}</span>
                                <span className="ms-1 text-[#8c9097] dark:text-white/50">{card.SubTitle}</span>
                            </div>
                            <div className="flex flex-wrap items-center justify-between">
                                <h5 className="font-semibold mb-0">{card.Value}</h5>
                                <div className="flex-grow">
                                    <SpkBadge variant="success/10" customClass="ms-2 text-success rounded-full">{card.Percentage}</SpkBadge>
                                </div>
                                <div id={card.Id}>
                                <ApexchartsComponent chartOptions={card.options} chartSeries={card.series} type="line" height={20} width={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default Spkcryptowidgetcards