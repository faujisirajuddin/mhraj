
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


type MediaItem = {
  img?: string;
  alt?: string;
  storage?:boolean;
};

type Activity = {
  avatar?: string; 
  description?: string;
  message?:string;
  task?:string;
  timestamp?: string;
  additionalInfo: string;
  media: MediaItem[];
  pClass?:string;
  text?:string;
  avatarList: string[]; 
  SpanContent:string;
  color:string;
};

interface SpkTasktimelineProps {
  activities: Activity[]; 
}

const SpkTasktimeline: React.FC<SpkTasktimelineProps> = ({ activities }) => {
  return (
    <Fragment>
        {activities.map((activity, index) => (
          <li key={index}>
            <div>
            {activity.avatar ? (
                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                  {activity.avatar.includes(" ") ? activity.SpanContent : <img src={activity.avatar} alt="Avatar" />}
                </span>
              ) : (
                <span className={`avatar avatar-sm bg-${activity.color}/10 !text-${activity.color} avatar-rounded profile-timeline-avatar`}>
                  {activity.SpanContent}
                </span>
              )}
  
              {/* Activity Description */}
              <p className={activity.pClass}>
              <span className="text-default">
                <b>{activity.message}</b></span> {activity.description} <b className="sm:text-sm text-[0.7rem]">{activity.text}</b><Link className="text-secondary" to="#">
                  <u>{activity.task}</u>
                </Link>
                .<span className="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">{activity.timestamp}</span>
              </p>
              <p className="text-[#8c9097] dark:text-white/50 mb-0">
                {activity.additionalInfo}
              </p>
  
              {/* Media Section */}
              {activity.media.length > 0 && (
                <p className="profile-activity-media mb-2 flex items-center">
                  {activity.media.map((mediaItem, idx) => (
                   <>
                    <Link key={idx} to="#" aria-label="anchor">
                      <img src={mediaItem.img} alt={mediaItem.alt} />
                    </Link>
                    {mediaItem.storage? <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">432.87KB</span>:''}
                   </>
                  ))}
                </p>
              )}
  
              {/* Avatar List */}
              {activity.avatarList.length > 0 && (
                <div className="avatar-list-stacked">
                  {activity.avatarList.map((avatarUrl, idx) => (
                    <span key={idx} className="avatar avatar-sm avatar-rounded">
                      <img src={avatarUrl} alt="avatar" />
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
    </Fragment>
  );
};

export default SpkTasktimeline;
