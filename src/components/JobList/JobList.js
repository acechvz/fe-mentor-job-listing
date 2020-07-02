import React, { useContext } from "react";
import FilterBar from "./FilterBar/FilterBar";
import JobCard from "./JobCard/JobCard";
import jobsList from "../../data.json";
import { store } from "../../store/store";
import { REMOVE_FILTER, CLEAR_FILTERS } from "../../constants/actionTypes";
import "./JobList.css";

function JobList() {
  const { state, dispatch } = useContext(store);
  const { filters } = state;

  const handleFilterRemove = (filter) => {
    dispatch({ type: REMOVE_FILTER, payload: filter });
  };

  const handleFiltersClear = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <div className="JobList">
      <FilterBar
        items={filters}
        onDismiss={handleFilterRemove}
        onClearFilters={handleFiltersClear}
        isVisible={filters.length > 0}
      />
      <div className="JobList__list">
        {jobsList.map((jobItem) => (
          <JobCard job={jobItem} key={jobItem.id} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
