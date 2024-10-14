import { Container, Carousel } from "react-bootstrap";
import "../assets/bootstrap/css/bootstrap.min.css";
import "../Styles/Home.css";
import img1 from "../assets/psycho.png";
import img2 from "../assets/hapy life.jpg";
import img3 from "../assets/meditation.png";
import Footer from "./Footer";

import Therepist from "./Tharepist";
function Home() {
  return (
    <>
    <h2 className=" text-center mt-4 mb-5">
          𝑯𝒆𝒂𝒍𝒕𝒉𝒚 𝑴𝒊𝒏𝒅, 𝑯𝒆𝒂𝒍𝒕𝒉𝒚 𝑳𝒊𝒇𝒆: 𝒀𝒐𝒖𝒓 𝑱𝒐𝒖𝒓𝒏𝒆𝒚 𝒕𝒐 𝑰𝒏𝒏𝒆𝒓 𝑷𝒆𝒂𝒄𝒆 𝑺𝒕𝒂𝒓𝒕𝒔 𝑯𝒆𝒓𝒆
        </h2>
    
   
    <div className="home">
      <Container>
        
        
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              style={{ objectFit: "cover", height: "400px", borderRadius: "10px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Mental Health</h3>
              <p>Your Mental Health is Our Top Priority</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              style={{ objectFit: "cover", height: "400px", borderRadius: "10px" }}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Happy Life</h3>
              <p>Happy Family, Happy Life</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              style={{ objectFit: "cover", height: "400px", borderRadius: "10px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Meditation</h3>
              <p>The Best Way to Regain Your Focus</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary btn-lg">Compare Now</button>
        </div> */}
      </Container>
      <Therepist/>
      <Footer/>
    </div>
    </>
  );
}

export default Home;
