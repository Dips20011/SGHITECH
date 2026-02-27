import React from "react";


function Career() {
  return (
    <>
    <div className="page-title accent-background" >
          <div className="container r">
            <h1 className="mb-2 mb-lg-0 text-center">Career</h1>

          </div>
        </div>
     
    <section className="career-section py-5">
      
      <div className="container">

        {/* Top description */}
        <div className="career-info mb-4" >
          <p>
            A list of our current job openings is provided below.
          </p>

          <p>
            If you are looking for positions at Junior levels in engineering /
            delivery / corporate functions, please Register Below. We will get
            in touch with you for a personal discussion and your application
            will be treated with complete confidentiality.
          </p>
        </div>

        {/* Job card */}
        <div className="job-card p-4 shadow-sm">
          <h4 className="job-title text-warning fw-bold">
            Trainee - Software Developer
          </h4>

          <p className="text-primary mb-1">Location: Pune</p>
          <p className="text-primary mb-1">Experience: 0-1 Year</p>
          <p className="text-primary mb-3">
            Qualification: B.E/B.Tech/MCA/MCS
          </p>

          <h5 className="fw-bold">Job description:</h5>
          <ul>
            <li>
              Develop new applications and modify existing applications written
              in C#, ASP.Net and related technology to increase efficiency.
            </li>
            <li>
              Own the problem — from requirements to architecture, coding,
              testing and deployment.
            </li>
            <li>Excellent communication skills.</li>
            <li>
              Handle technical discussions, identify alternatives and formulate
              technical solutions.
            </li>
          </ul>

          <h5 className="fw-bold mt-3">Technical Skills:</h5>
          <ul>
            <li>ASP.NET Web development (4.0/3.5/2.0)</li>
            <li>.NET framework server-side development</li>
            <li>UI development for ASP.NET applications</li>
            <li>Ajax, XHTML, CSS, JavaScript, JQuery</li>
            <li>MS SQL Server query design & performance tuning</li>
            <li>Stored Procedures, Views, Triggers</li>
            <li>Experience with data intensive web applications</li>
          </ul>
        </div>
        <div className="text-end mt-3">
  <button className="btn btn-success apply-btn">
    Apply Job
  </button>
</div>
      </div>
    </section>
    </>
    
  );
}

export default Career;