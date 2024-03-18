import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./index.css";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  document.title = "Tabs";
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async (url) => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(url);
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, title, duties, dates } = jobs[value];
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline" />
        </div>

        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setValue(index);
                  }}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="jobs-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default Tabs;
