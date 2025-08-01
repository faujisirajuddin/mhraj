import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface SpkReviewcardsprops {
    Imgsrc?: string;
    Name?: string;
    Customclass?: string;
    Title?: string;
    Rating?: string;
    Timevalue?: string;
    Navigate: string;
    Color?: string;
}
const SpkReviewcards :React.FC<SpkReviewcardsprops>= ({Imgsrc, Customclass,Name, Title, Rating, Timevalue,Navigate, Color}) => {
  return (
    <Fragment>
         <div className={`box ${Customclass}`}>
            <div className="box-body">
                <div className="flex items-center mb-4">
                    <span className="avatar avatar-md avatar-rounded me-4">
                        <img src={Imgsrc} alt="" />
                    </span>
                    <div>
                        <p className={`mb-0 font-semibold text-[.875rem] text-${Color}`}>{Name}</p>
                        <p className="mb-0 text-[.625rem] font-semibold text-[#8c9097] dark:text-white/50">{Title}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="text-[#8c9097] dark:text-white/50">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- 
                    <Link to={Navigate}  className="font-semibold text-[.6875rem] text-primary">  Read More</Link></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-[#8c9097] dark:text-white/50">Rating : </span>
                        <span className="text-warning block ms-1">
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className={`ri-star-${Rating} me-1`}></i>
                        </span>
                    </div>
                    <div className="ltr:float-right rtl:float-left text-[0.75rem] font-semibold text-[#8c9097] dark:text-white/50 text-end">
                        <span>{Timevalue}</span>
                        <span className="block font-normal text-[0.75rem] text-success"><i>{Name}</i></span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SpkReviewcards