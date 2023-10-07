import React from "react";
import BreadCrumps from '../components/BreadCrumps'
function About() {
  return (
    <div>
      <BreadCrumps  page="About us"  title="About Company"  />
      <section id="about" className="home-services pt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-graduation-cap"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Mission</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                  If you are looking for high-quality and reliable online
                  courses.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-book"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Vision</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                  If you are looking for high-quality and reliable online
                  courses.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-trophy"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Goal</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                  If you are looking for high-quality and reliable online
                  courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-aboutblock1 py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self">
              <span className="title-small mb-2">About Us</span>
              <h3 className="title-big mx-0">
                Welcome to the Coursing - all available online courses
              </h3>
              <p className="mt-lg-4 mt-3">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Non quae, fugiat.
              </p>
              <p className="mt-3 mb-lg-5">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices ligula. Semper at. Lorem ipsum dolor sit amet elit. Non
                quae.
              </p>
            </div>
            <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-servicesblock w3l-servicesblock1 py-5" id="progress">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self pr-lg-4">
              <div className="progress-info info1">
                <h6 className="progress-tittle">
                  Figma illustrations <span className="">80%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">
                  PHP programming <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info3">
                <h6 className="progress-tittle">
                  Web design & development <span className="">90%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info4">
                <h6 className="progress-tittle">
                  Adobe Photoshop <span className="">75%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2 mb-0">
                <h6 className="progress-tittle">
                  Wordpress design <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
              <span className="title-small mb-2">Progress bars</span>
              <h3 className="title-big">
                {" "}
                What you have in our Popular Online Courses
              </h3>
              <p className="mt-md-4 mt-3">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit.
                Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem
                ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa!
                elit ut et.
              </p>
              <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">
                Get started now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-block py-5" id="">
        <div className="container py-lg-5 py-md-3">
          <div className="row">
            <div className="col-lg-6 about-right-faq align-self">
              <span className="title-small mb-2">Start online course</span>
              <h3 className="title-big mx-0">
                {" "}
                Enhance your skills with best online courses
              </h3>
              <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet elit. Non quae, fugiat libero ut justo, ultrices in ligula
                amet dolor sit
              </p>
              <div className="two-grids mt-md-0 mt-md-5 mt-4">
                <div className="grids_info">
                  <h4>Global Certificate</h4>
                  <p className="">
                    Pellen tesque libero ut justo, ultrices in ligula elit sed.
                  </p>
                </div>
                <div className="grids_info">
                  <h4>Books and library</h4>
                  <p className="">
                    Pellen tesque libero ut justo, ultrices in ligula elit sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about1.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
            <div className="col-lg-3 col-6  left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about2.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* stats */}
      <section className="w3l-stats py-5" id="stats">
        <div className="gallery-inner container py-lg-5 py-md-4">
          <span className="title-small text-center mb-1">Our Achievements</span>
          <h3 className="title-big text-center mb-5">Our progress never Ends</h3>
          <div className="row stats-con">
            <div className="col-md-3 col-6 stats_info counter_grid">
              <p className="counter">500 </p>
              <span className="plus">+</span>
              <br />
              <h3>Students Enrolled</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid1">
              <p className="counter">56</p>
              <span className="plus">+</span>
              <br />
              <h3>Courses Uploaded</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
              <p className="counter">130</p>
              <span className="plus">k</span>
              <br />
              <h3>Certified students</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
              <p className="counter">243 </p>
              <span className="plus">+</span>
              <br />
              <h3>Global Teachers </h3>
            </div>
          </div>
        </div>
      </section>
      {/* //stats */}

    </div>
  );
}

export default About;
