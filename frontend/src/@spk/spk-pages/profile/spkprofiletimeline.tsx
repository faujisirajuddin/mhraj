import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

interface ProfiletimelineProps {
    activity:any;
}
const Spkprofiletimeline:React.FC<ProfiletimelineProps> = ({ activity }) => {
  return (
    <Fragment>
         <div>
        {activity.avatar.img && (
          <span className={`avatar avatar-sm avatar-rounded profile-timeline-avatar ${activity.avatar.bgClass || ""}`}>
            <img src={activity.avatar.img} alt={activity.avatar.alt || "Avatar"} />
          </span>
        )}
        {activity.avatar.text && (
          <span className={`avatar avatar-sm avatar-rounded profile-timeline-avatar ${activity.avatar.bgClass || ""}`}>
            {activity.avatar.text}
          </span>
        )}
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: activity.description }}></p>
        {activity.additionalText && (
          <p className="text-[#8c9097] dark:text-white/50 mb-0">{activity.additionalText}</p>
        )}
        {activity.media && activity.media.length > 0 && (
          <p className="profile-activity-media mb-3 flex w-full mt-2 sm:mt-0 items-center flex-wrap">
            {activity.media.map((media:any, index:any) => (
            <Fragment key={index}>
                <Link  aria-label="anchor" to="#">
                <img src={media.img} alt={media.name || "media"} className="mr-2" />
              </Link>
                {media.size && <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">{media.size}</span>}
            </Fragment>
            ))}
          </p>
        )}
        {activity.avatarList && activity.avatarList.length > 0 && (
          <div className="avatar-list-stacked">
            {activity.avatarList.map((avatar:any, index:any) => (
              <span key={index} className="avatar avatar-sm avatar-rounded">
                <img src={avatar.img} alt={avatar.alt || "Avatar"} />
              </span>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Spkprofiletimeline