import React, { useContext } from "react";
import classNames from "classnames";
import { Button, Badge } from "../../shared";
import { store } from "../../../store/store";
import { ADD_FILTER } from "../../../constants/actionTypes";
import "./JobCard.scss";

function JobCard({ job }) {
  const { state, dispatch } = useContext(store);
  const { filters } = state;
  const features = [job.role, job.level, ...job.languages, ...job.tools];

  const shouldNotRender =
    filters.length && !filters.every((filter) => features.includes(filter));

  if (shouldNotRender) return null;

  const handleFilterClick = (filter) => {
    if (!filters.includes(filter))
      dispatch({ type: ADD_FILTER, payload: filter });
  };

  return (
    <div
      className={classNames("JobCard rounded-block", {
        "JobCard--featured": job.featured,
      })}
    >
      <div className="JobCard__description">
        <img src={job.logo} className="JobCard__image" alt="" />
        <div className="JobCard__content">
          <div className="JobCard__content-upper">
            <small>{job.company}</small>
            <div className="JobCard__badges">
              {job.new && <Badge>New!</Badge>}
              {job.featured && <Badge inverted>Featured</Badge>}
            </div>
          </div>
          <div className="JobCard__content-title">{job.position}</div>
          <div className="JobCard__content-details">
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="JobCard__languages">
        {features.map((feature) => (
          <Button
            onClick={() => handleFilterClick(feature)}
            type="roundedHoverable"
            text={feature}
          />
        ))}
      </div>
    </div>
  );
}

export default JobCard;
