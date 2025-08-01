import React from "react";
import { Link } from "react-router-dom";
import SpkButton from "../uielements/spk-button";
import SpkOverlay from "../uielements/spk-overlay";


interface Cardprops{
    imgSrc?: string;
    title?: string;
    role?: string;
    ratings?: React.ReactNode;
    rate?: string | number;
    graduateBadge?: string;
    shiftBadge?: string;
    joinBadge?: string;
    goodBadge?: string;
    price?: string | number;
    price1?: string;
    languages?: string[];
    skillbadge?: string;
    skillbadge1?: string;
    skillbadge2?: string;
    bond?: string;
    experience?: string;
    location?: string;
}
interface SpkCandidateProps {
    
    tooltip?: string;
    tooltipwishlist?: string;
    profiletooltip?: string;
    showPackageAndLanguages?:boolean;
    card:Cardprops;
}

const SpkCandidate: React.FC<SpkCandidateProps> = ({card,  tooltip, tooltipwishlist, profiletooltip, showPackageAndLanguages = false}) => {
    return (
        <div className="box custom-box">
            <div className="box-body">
                <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                    <SpkOverlay>
                        <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                            <span><i className="bi bi-download"></i></span>
                            <span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                {tooltip}
                            </span>
                        </SpkButton>
                    </SpkOverlay>
                    <SpkOverlay>
                        <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                            <span><i className="bi bi-heart"></i></span>
                            <span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                {tooltipwishlist}
                            </span>
                        </SpkButton>
                    </SpkOverlay>
                    <SpkOverlay>
                        <SpkButton buttontype="button" customClass="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                            <span><i className="bi bi-eye"></i></span>
                            <span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                {profiletooltip}
                            </span>
                        </SpkButton>
                    </SpkOverlay>
                </div>
                <div className="flex mb-3 items-center flex-wrap">
                    <span className="avatar avatar-lg">
                        <img src={card.imgSrc} alt={card.title} className="!rounded-full" />
                    </span>
                    <div className="ms-2">
                        <h5 className="font-semibold mb-0 flex items-center">
                            <Link to={`${import.meta.env.BASE_URL}/apps/jobs/candidate-details/`}>
                                {card.title}
                                <i className="bi bi-check-circle-fill text-success text-base ms-2" title="Verified candidate"></i>
                            </Link>
                        </h5>
                        <div className="sm:flex gap-2">
                            <Link to="#">{card.role}</Link>
                            <p className="mb-0 text-xs text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> {card.location}</p>
                        </div>
                        <div className="flex items-center text-xs text-[#8c9097] dark:text-white/50">
                            <p className="text-xs mb-0">Ratings: </p>
                            <div className="min-w-fit ms-2">
                                {card.ratings}
                            </div>
                            <Link to="#" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                <span>{card.rate}</span>
                                <span>Ratings</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="popular-tags mb-4">
                    <Link to="#" className="badge !rounded-full bg-light me-1 !text-defaulttextcolor">
                        <i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i>{card.graduateBadge}
                    </Link>
                    <Link to="#" className="badge !rounded-full bg-light me-1 !text-defaulttextcolor">
                        <i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i>{card.shiftBadge}
                    </Link>
                    <Link to="#" className="badge !rounded-full bg-light me-1 !text-defaulttextcolor">
                        <i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i>{card.joinBadge}
                    </Link>
                    <Link to="#" className="badge !rounded-full bg-light me-1 !text-defaulttextcolor">
                        <i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i>{card.goodBadge}
                    </Link>
                </div>
                {showPackageAndLanguages && (
                    <div className="flex items-center">
                        <p className="mb-0 flex-grow">
                            <span className="text-[#8c9097] dark:text-white/50">Package (Yearly):</span>
                            <span className="font-semibold" title="Current">{card.price}</span> - 
                            <span className="font-semibold" title="Expected">{card.price1}</span>
                        </p>
                        <p className="mb-0">
                            <span className="text-[#8c9097] dark:text-white/50">Languages:</span>
                            <span className="font-semibold">{card.languages}</span>
                        </p>
                    </div>
                )}
            </div>
            <div className="box-footer">
                <div className="sm:flex items-center gap-3">
                    <h6 className="mb-0 font-semibold">Skills:</h6>
                    <div className="popular-tags flex-grow">
                        <Link to="#" className="badge !rounded-full bg-light me-1 text-default">{card.skillbadge}</Link>
                        <Link to="#" className="badge !rounded-full bg-light me-1 text-default">{card.skillbadge1}</Link>
                        <Link to="#" className="badge !rounded-full bg-light me-1 text-default">{card.skillbadge2}</Link>
                        <Link to="#" className="badge !rounded-full bg-primary/10 text-primary">More</Link>
                    </div>
                    <div>
                        <SpkOverlay>
                            <Link to="#" className="hs-tooltip-toggle badge badge-md !rounded-full bg-info/10 me-1 text-info">
                                <i className="bi bi-hand-thumbs-up me-1"></i>{card.bond}
                                <span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                    {card.bond}
                                </span>
                            </Link>
                        </SpkOverlay>
                        <Link to="#" className="badge badge-md !rounded-full bg-primary/10 text-primary">
                            <i className="bi bi-briefcase me-1"></i>{card.experience}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpkCandidate;
