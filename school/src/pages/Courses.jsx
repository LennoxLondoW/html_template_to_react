import React from "react";
import BreadCrumps from "../components/BreadCrumps";

function Courses() {
  return (
    <div>
      <BreadCrumps page="Courses" title="All Courses" />
      <section class="w3l-courses">
        <div class="blog pb-5" id="courses">
          <div class="container py-lg-5 py-md-4 py-2">
            <div class="row">
              <div class="col-lg-4 col-md-6 item">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/c1.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$35.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Open Programming Courses for everyone : Python
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 20 hrs </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/a1.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Olivia</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/c2.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="course-price-badge"> Free</div>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$0.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Learning to Write as a clean Professional Author
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 20 hrs </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/a2.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Isabella</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Teaching</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/c3.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="course-price-badge-new"> New</div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$49.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 20 hrs </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/a3.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Alexander</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/c4.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$35.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Open Programming Courses for everyone : Python
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 20 hrs </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/a4.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> William</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/c5.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="course-price-badge"> Free</div>
                    <div class="post-pos">
                      <a href="#reciepe" class="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$0.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Learning to Write as a clean Professional Author
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 20 hrs </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/a1.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Olivia</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/c6.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div class="course-price-badge-new"> New</div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$49.00</p>
                      <ul class="rating-star">
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star"></span>
                        </li>
                        <li>
                          <span class="fa fa-star-o"></span>
                        </li>
                      </ul>
                    </div>
                    <a href="#course-single" class="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div class="course-meta mt-4">
                      <div class="meta-item course-lesson">
                        <span class="fa fa-clock-o"></span>
                        <span class="meta-value"> 20 hrs </span>
                      </div>
                      <div class="meta-item course-">
                        <span class="fa fa-user-o"></span>
                        <span class="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="author align-items-center">
                      <img
                        src="assets/images/a2.jpg"
                        alt=""
                        class="img-fluid rounded-circle"
                      />
                      <ul class="blog-meta">
                        <li>
                          <span class="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Isabella</a>
                        </li>
                        <li>
                          <span class="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Teaching</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* pagination */}
            <div class="pagination-wrapper mt-5 pt-lg-3 text-center">
              <ul class="page-pagination">
                <li>
                  <a class="next" href="#url">
                    <span class="fa fa-angle-left"></span> Prev
                  </a>
                </li>
                <li>
                  <span aria-current="page" class="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    2
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    3
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    ....
                  </a>
                </li>
                <li>
                  <a class="next" href="#url">
                    Next <span class="fa fa-angle-right"></span>
                  </a>
                </li>
              </ul>
            </div>
            {/* //pagination */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
