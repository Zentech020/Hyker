import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from "react-slick";



import List from './images/tools.png';
import Unicorn from './images/unicorn.png';
import Users from './images/users.png';
import Validate from './images/validation.png';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow-right"

      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow-left"

      onClick={onClick}
    />
  );
}

class App extends Component {

  render() {
    const istrue = true;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    return (

      <div className="container-fluid">
        <div class="hero">
          <div class="container">
            <nav>
              <h3>Hyker</h3>
              <a class="btn-white" href="">Join Beta list</a>
            </nav>
          </div>
          <div class="container">
            <div class="row">
              <div class="landing-content">

                <div class="col-sm-12 col-md-6  image">
                  <img src={List} />
                </div>



                <div class="col-sm-12 col-md-6 content">
                  <h1>A voting tool to validate your features</h1>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a data-hide-headers={istrue} data-hide-footer={istrue} target="_blank" data-mode="popup" href="https://zenobruinsma.typeform.com/to/NcmtTG" className="btn-white big ">Join Beta List</a>

                </div>

              </div>
            </div>
          </div>
        </div >
        <div class="spacer"></div>

        <div class="why-hyker">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2>Why Hyker</h2>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="cards-container">
                <div class="col-sm-6 col-md-4 ">

                  <div class="card">
                    <div class="card-icon">
                      <img src={Unicorn} />
                    </div>
                    <div class="card-content">
                      <h3>Startups</h3>
                      <p>Submit your upcoming features and see what will succeed.</p>
                    </div>
                  </div>

                </div>

                <div class="col-sm-6 col-md-4 ">
                  <div class="card">
                    <div class="card-icon">
                      <img src={Users} />
                    </div>
                    <div class="card-content">
                      <h3>Users</h3>
                      <p>Be apart of the company by voting on your favourite features.</p>
                    </div>
                  </div>

                </div>

                <div class="col-sm-6 col-md-4 ">
                  <div class="card">
                    <div class="card-icon">
                      <img src={Validate} />
                    </div>
                    <div class="card-content">
                      <h3>Validate</h3>
                      <p>We are living in a stage of uncertainty , its really important to validate your features before spending time in designing , developing.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="spacer"></div>

        <div class="cases">
          <div class="container">
            <div class="row">
              <div class="header-title">
                <h4>CASES</h4>
                <h1>They wish they had our solution</h1>
              </div>
              <div class="cases-block-container">
                <div class="cases-block">
                  <Slider {...settings}>
                    <div class="cases-content">
                      <h2>Gymlisted</h2>
                      <img src="https://png.icons8.com/ios/40/000000/flex-biceps.png" />
                      <h4>The developer problem</h4>
                      <p>In hindsight, it was way over developed to be a “basic” application. The biggest lesson I learned is that it’s important to get real validation before building the next feature. But being a developer, it’s really easy to get caught up in assuming you know what users want and escaping to our comfort zones: a text editor and terminals ;)</p>
                    </div>
                    <div class="cases-content">
                      <h2>Gymlisted</h2>
                      <h5>-</h5>
                      <h4>The developer problem</h4>
                      <p>In hindsight, it was way over developed to be a “basic” application. The biggest lesson I learned is that it’s important to get real validation before building the next feature. But being a developer, it’s really easy to get caught up in assuming you know what users want and escaping to our comfort zones: a text editor and terminals ;)</p>
                    </div>
                    <div class="cases-content">
                      <h2>Gymlisted</h2>
                      <h5>-</h5>
                      <h4>The developer problem</h4>
                      <p>In hindsight, it was way over developed to be a “basic” application. The biggest lesson I learned is that it’s important to get real validation before building the next feature. But being a developer, it’s really easy to get caught up in assuming you know what users want and escaping to our comfort zones: a text editor and terminals ;)</p>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="container">
            <div class="row">

            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
