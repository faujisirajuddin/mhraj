import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface SpkKanbanCardProps {
    createdDate?: string;
    badges?: React.ReactNode;
    imgSrc?: any;
    title?: string;
    description?: string;
    likes?: number | string;
    message?: number | string;
    avatars?: React.ReactNode;
    showImage?: boolean;
    showDescription?: boolean;
    days?:string;
    
}
interface Cardprops{
    card:SpkKanbanCardProps
    customCardclass?:string;
    successtag?:boolean;
}
const SpkKanbancard: React.FC<Cardprops> = ({ card, customCardclass, successtag=false}) => {
    return (
        <Fragment>
            <div className={`box kanban-tasks ${customCardclass}`}>
                <div className="box-body !p-0">
                    <div className="p-4 kanban-board-head">
                        <div className="flex text-[#8c9097] dark:text-white/50 justify-between mb-1 text-[.75rem] font-semibold">
                            <div className="inline-flex">
                                <i className="ri-time-line me-1 align-middle"></i>{card.createdDate}
                            </div>
                            <div>{card.days}
                                {
                                    successtag ?
                                    <div className="text-success"><i className="ri-check-fill me-1 align-middle"></i>Done</div>:""
                                }
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="task-badges">
                                {card.badges}
                            </div>
                            <div className="hs-dropdown ti-dropdown ltr:[--placement:bottom-right] rtl:[--placement:bottom-left]">
                                <Link
                                    aria-label="anchor"
                                    to="#"
                                    className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"
                                    aria-expanded="false"
                                >
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium !inline-flex" to="#"><i className="ri-eye-line me-1 align-middle"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium !inline-flex" to="#"><i className="ri-delete-bin-line me-1 align-middle"></i>Delete</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium !inline-flex" to="#"><i className="ri-edit-line me-1 align-middle"></i>Edit</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="kanban-content !mt-1">
                            {card.showImage && card.imgSrc && (
                                <div className="task-image mt-2">
                                    <img src={card.imgSrc} className="img-fluid rounded kanban-image" alt="task" />
                                </div>
                            )}

                            <h6 className="font-semibold mb-1 !text-[.9375rem] mt-2">{card.title}</h6>

                            {card.showDescription && card.description && (
                                <div className="kanban-task-description">{card.description}</div>
                            )}
                        </div>
                    </div>
                    <div className="p-4 border-t dark:border-defaultborder/10 border-dashed">
                        <div className="flex items-center justify-between">
                            <div className="inline-flex items-center">
                                <Link to="#" className="inline-flex items-center me-2 text-primary">
                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle font-normal"></i></span>
                                    <span className="font-semibold text-[.75rem]">{card.likes}</span>
                                </Link>
                                <Link to="#" className="inline-flex items-center text-[#8c9097] dark:text-white/50">
                                    <span className="me-1"><i className="ri-message-2-line align-middle font-normal"></i></span>
                                    <span className="font-semibold text-[.75rem]">{card.message}</span>
                                </Link>
                            </div>
                            <div className="avatar-list-stacked">
                                {card.avatars}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SpkKanbancard;
