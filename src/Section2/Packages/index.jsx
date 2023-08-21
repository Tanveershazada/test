import React from "react";
import "./style.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import {
  FiletextIcon,
  LayerIcon,
  SliderIcon,
  TickIcon,
} from "../../components/Icons";

const Package = () => {
  return (
    <div className="package__section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="package__main">
              <Heading
                className="Package__heading"
                type="medium"
                labelType="blue"
                label="CHOOSE PACKAGE"
                title="Innovative Solutions for Digital Success."
              />
            </div>
          </div>
          <div className="col 12 colmd-6">
            <div className="package__second-main">
              <p>
                "Unlock unparalleled digital success with our innovative
                solutions. We blend <br /> creativity, strategy, and technology to
                propel your brand to new heights."
              </p>
              <Button className="btn__primary mt-3 package__button-one">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="package__card-main">
              <div className="package__icon">
                <FiletextIcon className="layer__icon" />
              </div>
              <div className="package__card-title">
                <h2>Package 1 </h2>
              </div>
              <div className="package__card-des">
               
              </div>
              <div className="package__number">
                <span className="p__dollar">$</span>
                <span className="p__number">399</span>
                <h6 className="p__month">/MONTHLY</h6>
                <span className="package__border-bottom"></span>
              </div>

              <span className="p__top-title">Include :</span>
              <div className="package__card-research">
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>2 Social Platforms  </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>15 Posts Per Month </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Ad Copies</span>
                </div>

                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Page Monitoring</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Basic Ad Campaigns</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Post Designs</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Account Manager</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Content Creation</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Stock Photos</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>No setup cost</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Monthly Consultation</span>
                </div>
                <div className="pacage__last">
                  <Button className="btn__primary mt-3 package__button">
                    GET STARTED
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="package__card-main">
              <div className="package__icon">
                <LayerIcon className="layer__icon" />
              </div>
              <div className="package__card-title">
                <h2>Package 2 </h2>
              </div>
              <div className="package__card-des">
              </div>
              <div className="package__number">
                <span className="p__dollar">$</span>
                <span className="p__number">799</span>
                <h6 className="p__month">/MONTHLY</h6>
                <span className="package__border-bottom"></span>
              </div>

              <span className="p__top-title">Includes :</span>
              <div className="package__card-research">
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>4 Social Platforms</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>20 Posts Per Month </span>
                </div>

                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Ad Copies</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Page Monitoring </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Basic Ad Campaigns</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Post Designs</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Account Manager </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Content Creation</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Stock Photos</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>No setup cost</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Monthly Consultation</span>
                </div>
                <div className="pacage__last">
                  <Button className="btn__primary mt-3 package__button">
                    GET STARTED
                  </Button>
                  <span>
                    14 Day Free Trial • Cancel Anytime • No Credit Card <br />{" "}
                    Required
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="package__card-main">
              <div className="package__icon">
                <SliderIcon className="layer__icon" />
              </div>
              <div className="package__card-title">
                <h2>Package 3</h2>
              </div>
              <div className="package__card-des">
              </div>
              <div className="package__number">
                <span className="p__dollar">$</span>
                <span className="p__number">799</span>
                <h6 className="p__month">/MONTHLY</h6>
                <span className="package__border-bottom"></span>
              </div>

              <span className="p__top-title">Includes :</span>
              <div className="package__card-research">
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Call for price</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Up to 9 social platforms</span>
                </div>

                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>15 Posts Per Month </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Ad Copies</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Page Monitoring </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Basic Ad Campaigns </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Post Designs</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Account Manager  </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Content Creation </span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Stock Photos</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Monthly Consultation</span>
                </div>
                <div className="pacage__last">
                  <Button className="btn__primary mt-3 package__button">
                    GET STARTED
                  </Button>
                  <span>
                    14 Day Free Trial • Cancel Anytime • No Credit Card <br />{" "}
                    Required
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
