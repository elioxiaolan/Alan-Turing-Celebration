import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Tag } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import { applyJob } from "../redux/actions/jobActions";

function JobInfo({ match }) {
  const { jobs } = useSelector((state) => state.jobsReducer);

  const job = jobs.find((job) => job._id == match.params.id);

  const userid = JSON.parse(localStorage.getItem("user"))._id;

  const appliedCandidates = job.appliedCandidates;

  const alreadyApplied = appliedCandidates.find(
    (candidate) => candidate.userid == userid
  );

  const dispatch = useDispatch();

  function applyNow() {
    dispatch(applyJob(job));
  }

  return (
    <div>
      <DefaultLayout>
        {job && (
          <div>
            <p>
              <b>Title:</b> {job.title}
            </p>
            <p>
              <b>Company:</b> {job.company}
            </p>
            <p>
              <b>Job Type:</b> {job.jobType}
            </p>
            <p>
              <b>Employee Type:</b> {job.employeeType}
            </p>
            <p>
              <b>Minimum Qualification:</b> {job.minimumQualification}
            </p>
            <p>
              <b>Preferred Qualification:</b> {job.preferredQualification}
            </p>
            <p>
              <b>Responsibility:</b> {job.responsibility}
            </p>

            <hr />
            <p>
              <b>Company Description:</b> {job.companyDescription}
            </p>
            <p>
              <b>Mentor Description:</b> {job.mentorDescription}
            </p>
            <p>
              <b>Email:</b> {job.email}
            </p>
            <p>
              <b>Total Candidates Applied:</b> {job.appliedCandidates.length}
            </p>

            <hr />

            <div className="flex justify-content-between">
              {job.postedBy == userid ? (
                <Button>
                  <Link to={`/editjob/${job._id}`}>Edit Now</Link>
                </Button>
              ) : alreadyApplied ? (
                <Tag color="green">Already Applied</Tag>
              ) : (
                <Button type="text" onClick={applyNow}>Apply Now</Button>
              )}
              <p>
                <b>Posted on</b> {moment(job.createdAt).format("MMM DD yyyy")}
              </p>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default JobInfo;
