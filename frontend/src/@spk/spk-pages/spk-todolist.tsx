import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import SpkBadge from '../uielements/spk-badge';
import SpkButton from '../uielements/spk-button';


interface Avatar {
  src: string;
  alt: string;
}

interface TaskCardProps {
  title?: string;
  assignedOn?: string;
  targetDate?: string;
  assignedTo: Avatar[];
  Badgetext?: string;
  BadgeClass?: string;
  Navigate: string;
  Rating?: string;
  Customcardclass?: string;
}

const SpkTodolist: React.FC<TaskCardProps>  = ({
  title,
  assignedOn,
  targetDate,
  assignedTo,
  Badgetext,
  BadgeClass,
  Rating,
  Navigate,
  Customcardclass
}) => {
  return (
    <Fragment>
          <div className={`box ${Customcardclass}`}>
                <div className="box-body">
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-semibold mb-4 flex items-center">
                        <Link aria-label="anchor" to={Navigate}>
                          <i className={`ri-star-s-fill text-[1rem] ${Rating}`}></i>
                        </Link>
                        {title}
                      </p>
                      <p className="mb-4">
                        Assigned On :{' '}
                        <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">
                          {assignedOn}
                        </span>
                      </p>
                      <p className="mb-4">
                        Target Date :{' '}
                        <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">
                          {targetDate}
                        </span>
                      </p>
                      <p className="mb-0">
                        Assigned To :
                        <span className="avatar-list-stacked ms-1">
                          {assignedTo.map((avatar, index) => (
                            <span key={index} className="avatar avatar-sm avatar-rounded">
                              <img src={avatar.src} alt={avatar.alt} />
                            </span>
                          ))}
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className="btn-list">
                        <SpkButton
                          buttontype="button"
                          customClass="ti-btn ti-btn-sm ti-btn-primary me-[0.375rem]"
                        >
                          <i className="ri-edit-line"></i>
                        </SpkButton>
                        <SpkButton
                          buttontype="button"
                          customClass="ti-btn ti-btn-sm ti-btn-danger me-0"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </SpkButton>
                      </div>
                      <SpkBadge customClass={`${BadgeClass} block`}>{Badgetext}</SpkBadge>
                    </div>
                  </div>
                </div>
          </div>
    </Fragment>
  )
}

export default SpkTodolist