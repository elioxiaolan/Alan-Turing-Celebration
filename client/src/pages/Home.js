import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllJobs } from "../redux/actions/jobActions";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

function Home() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <div>
      <DefaultLayout>
        <Row gutter={16}>
          {jobs.map((job) => {
            return (
              <Col lg={12} sm={24}>
                <div className="card job-div bs m-2 p-2">
                  <h6><b>{job.title}</b></h6>
                  <p>{job.company}</p>
                  <hr />
                  <p className="job-p">{job.description}</p>
                  <hr />
                  <div className="flex">
                    <p>
                      Job Type: <b>{job.jobType}</b>
                    </p>
                    <p style={{ marginLeft: 20 }}>
                      Employee Type: <b>{job.employeeType}</b>
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-content-between">
                    <Link to={`/jobs/${job._id}`}>
                      <Button class="btn" type="text">View</Button>
                    </Link>
                    <p>
                      Posted on: {moment(job.createdAt).format('MMM DD yyyy')}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DefaultLayout>
    </div>
  );
}

export default Home;
