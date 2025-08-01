import React, { Fragment } from 'react'
import ApexchartsComponent from '../spk-packages/apexcharts-component'

interface SpksalescardsProps {
  series?: any;      
  options?: any;       
  Value: string;            
  title?: string;     
  Color?: string ;   
  Id?: string ;   
  Icon?: string ;   
}

const SpkStockscards:React.FC<SpksalescardsProps> = ({options, series, Value, Icon, title, Color, Id}) => {
  return (
    <Fragment>
          <div className="box">
                <div className="box-body">
                    <div className="flex gap-3 flex-wrap items-start justify-between">
                        <div className="flex-grow flex items-start sm:mb-0">
                            <div className="me-4">
                                <span className={`avatar avatar-rounded bg-${Color}`}>
                                    <i className={`ti ti-${Icon} text-[1rem] text-white`}></i>
                                </span>
                            </div>
                            <div>
                                <span className="block text-[#8c9097] dark:text-white/50">{title}</span>
                                <span className="text-[1rem] font-semibold">{Value}
                                    {Value.includes("12")? 
                                    <i className="ti ti-arrow-narrow-up ms-1 text-success"></i>
                                    :""
                                    } 
                                    </span>
                            </div>
                        </div>
                        <div>
                            <div id={Id}>
                                <ApexchartsComponent chartOptions={options} chartSeries={series} type="line" height={40} width={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default SpkStockscards