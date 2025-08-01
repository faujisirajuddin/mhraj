import React, { Fragment } from 'react'
import face1 from "../../../assets/images/faces/1.jpg";
import SpkButton from '../../uielements/spk-button';

interface SpkTimelineprops {
    title?: string;
    Customhoverclass?: string;
    Collapsable?: boolean;
    Time?: boolean;
    Date?: boolean;
    Imgtag?: boolean;
    Avatar?: boolean;
    SVG?: boolean;
}

const SpkTimeline :React.FC<SpkTimelineprops>= ({title, Collapsable=false, Imgtag=false,SVG=false,Avatar=false,Time=false, Customhoverclass, Date}) => {
  return (
    <Fragment>
      <div className="box">
            <div className="box-header">
                <h5 className="box-title">{title}</h5>
            </div>
            <div className="box-body">
                <div>
                    {Date? 
                    <div className="ps-2 my-4 first:mt-0">
                        <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                            1 Mar, 2024
                        </p>
                    </div>:''}
                        <div className={`flex gap-x-3 ${Customhoverclass}`}>
                            {Time? 
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                            </div>
                            :""}
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                 {Imgtag?   <img className="flex-shrink-0 size-7 rounded-full" src={face1} alt="Image Description"/>:  <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>}
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                                Created "Preline in React" task
                                </p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                Find more detailed insctructions here.
                                </p>
                                <SpkButton buttontype="button" customClass="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <img className="flex-shrink-0 size-4 rounded-full" src={face1} alt="Image Description"/>
                                James Collins
                                </SpkButton>
                            </div>
                        </div>
                        <div className={`flex gap-x-3 ${Customhoverclass}`}>
                        {Time? 
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                            </div>
                            :""}
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                {Avatar?   
                                 <span className="flex flex-shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                :  <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>}  
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8">
                                <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Release v5.2.0 quick bug fix &#128030;
                                </p>
                                <SpkButton buttontype="button" customClass="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    A
                                </span>
                                Alex Gregarov
                                </SpkButton>
                            </div>
                        </div>
                        <div className={`flex gap-x-3 ${Customhoverclass}`}>
                        {Time? 
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                            </div>
                            :""}
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                    {Imgtag?   <img className="flex-shrink-0 size-7 rounded-full" src={face1} alt="Image Description"/>:  <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>}
                                    </div>
                                </div>
                                <div className="grow pt-0.5 pb-8">
                                    <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                    Marked "Install Charts" completed
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                    Finally! You can check it out here.
                                    </p>
                                    <SpkButton buttontype="button" customClass="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:dark:bg-bodybg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10">
                                    <img className="flex-shrink-0 size-4 rounded-full" src={face1} alt="Image Description"/>
                                    James Collins
                                    </SpkButton>
                                </div>
                        </div>
                    {Date? 
                    <div className="ps-2 my-4 first:mt-0">
                        <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                            29 Feb, 2024
                        </p>
                    </div>
                    :''}
                    <div className={`flex gap-x-3 ${Customhoverclass}`}>
                    {Time? 
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-500 dark:text-white/70">12:05PM</span>
                        </div>
                        :""}
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                {SVG?     
                                <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-bodybg dark:border-white/10 dark:text-white/70">
                                    <svg className="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg>
                                </span>
                                :  <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>}
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                            Take a break &#9971;
                            </p>
                            <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                            Just chill for now... &#128521;
                            </p>
                        </div>
                    </div>
                    {Collapsable ? 
                        <>
                            <div id="hs-timeline-collapse" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-timeline-collapse-content">                   
                                <div className="ps-2 my-2">
                                    <p className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                    28 Feb, 2024
                                    </p>
                                </div>
                            <div className="flex gap-x-3">
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:dark:bg-bodybg2">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                    <div className="size-2 rounded-full bg-gray-400 dark:bg-bodybg2"></div>
                                </div>
                                </div>
                                <div className="grow pt-0.5 pb-8">
                                    <p className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Final touch ups
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                        Double check everything and make sure we're ready to go.
                                    </p>
                                </div>
                            </div>
                            </div> 
                            <div className="ps-[7px] flex gap-x-3">
                                <SpkButton buttontype="button" customClass="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-primary font-medium decoration-2 hover:underline dark:text-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"  Id="hs-timeline-collapse-content" Collapse="#hs-timeline-collapse">
                                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    Show older
                                </SpkButton>
                            </div>
                        </>
                    :""}
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SpkTimeline