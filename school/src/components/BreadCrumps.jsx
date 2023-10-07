import React from "react";

function BreadCrumps(props) {
  return (
    <div>
      {/* about breadcrumb */}
      <section class="w3l-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-about py-5">
          <div class="container pt-lg-5 pt-3 p-lg-4 pb-3">
            <h2 class="title mt-5 pt-lg-5 pt-sm-3">{props.title}</h2>
            <ul class="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-md-5">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active"> / {props.page} </li>
            </ul>
          </div>
        </div>
        <div class="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none" }}
            ></path>
          </svg>
        </div>
      </section>
      {/* //about breadcrumb */}
    </div>
  );
}

export default BreadCrumps;
