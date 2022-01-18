// import '.css';
import Carousel from "react-bootstrap/Carousel"

function SliderImages() {
  return (
 <div>
  <Carousel style={{height:"50%",width:"100%"}} fade variant="dark">
    <Carousel.Item>
     <img
      className="d-block w-40"
      src="./1917.jpg"
      alt="First slide"
      style={{height:"270px",width:"230px"}}
      />
      <Carousel.Caption>
      <h3>1917</h3>
      <p>Tucked into the plot of Sam Mendes’s new film is a portrayal of the youth and
         innocence that is so readily destroyed in war.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-40"
      src="./marvel.jpg"
      alt="Second slide"
      />
      <Carousel.Caption>
      <h3>Marvel Avengers
        IRON MAN
      </h3>
      <p>Stark develops his suit, adding weapons and other technological devices he designed through his company, 
        Stark Industries. He uses the suit and successive versions to protect the world as Iron Man.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      className="d-block w-40"
      src="./KGF2.JPEG"
      alt="Third slide"
      style={{height:"270px",width:"230px"}}
      />
      <Carousel.Caption>
      <h3>KGF 2</h3>
      <p>KGF is the story of the most dreaded criminal Rocky and
         his quest to gain more power in the world. Despite Rocky's criminal background, 
         he fights for the poor and the injustice against them. It is being helmed by Prashanth Neel.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  );
}

export default  SliderImages;