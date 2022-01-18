// import '.css';
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

function SliderImages() {
  return (
 <div style={{marginBottom:"4%" ,background:"grey", padding:"20px"}}>
  <Carousel  indicators={false}>
  <Carousel.Item>
    <CardGroup style={{display:"flex",gap:"20px",justifyContent:"space-between"}} >
            <Card className="bg-dark text-black"  style={{height:"300px",width:"300px"}}>
                <Card.Img src="./KGF2.jpeg" alt="Card image" style={{height:"300px",width:"422px"}} />
                <Card.ImgOverlay>
                    <Card.Title>KGF-2</Card.Title>
                    <Card.Text>
                    <b>Mass and class</b>
                    </Card.Text>
                    <Card.Text>Languages-Kan,Hin,Eng</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-black"  style={{height:"300px",width:"300px"}}>
                <Card.Img src="./avatar2.jpg" alt="Card image" style={{height:"300px",width:"422px"}} />
                <Card.ImgOverlay>
                    <Card.Title>AVATAR-2</Card.Title>
                    <Card.Text>
                    <b>Blue</b>
                    </Card.Text>
                    <Card.Text>Languages-Eng</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-black"  style={{height:"300px",width:"300px"}}>
                <Card.Img src="./Dr.strange2.jpg" alt="Card image" style={{height:"300px",width:"422px"}}/>
                <Card.ImgOverlay>
                    <Card.Title>DOCTOR STRANGE</Card.Title>
                    <Card.Text>
                    <b>Mystic art</b>
                    </Card.Text>
                    <Card.Text>Languages-Eng</Card.Text>
                </Card.ImgOverlay>
            </Card>
         </CardGroup>
    </Carousel.Item>
    <Carousel.Item >
    <CardGroup style={{display:"flex",gap:"20px",justifyContent:"space-between"}}>
            <Card className="bg-dark text-black"  style={{height:"300px",width:"300px"}}>
                <Card.Img src="./James.jpg" alt="Card image" style={{height:"300px",width:"422px"}}/>
                <Card.ImgOverlay>
                    <Card.Title>JAMES</Card.Title>
                    <Card.Text>
                    <b>appu, the lost treasure</b> 
                    </Card.Text>
                    <Card.Text>Languages-Kan,Hin,Eng</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-black"  style={{height:"300px",width:"300px"}}>
                <Card.Img src="./junglecruise.jpg" alt="Card image" style={{height:"300px",width:"422px"}}/>
                <Card.ImgOverlay>
                    <Card.Title>JUNGLE CRUISE</Card.Title>
                    <Card.Text>
                     <b><i>Adventures</i></b>
                    </Card.Text>
                    <Card.Text>Languages-Kan,Hin,Eng</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-black"  style={{height:"300px",width:"300px"}}>
                <Card.Img src="./radheshyam.jpg" alt="Card image" style={{height:"300px",width:"422px"}} />
                <Card.ImgOverlay>
                    <Card.Title>RADHE SHYAM</Card.Title>
                    <Card.Text>
                    <b>Releasing on 14 Jan, 2022</b>
                    </Card.Text>
                    <Card.Text>Languages-Kan,Hin,Eng</Card.Text>
                </Card.ImgOverlay>
            </Card>
         </CardGroup>
    </Carousel.Item>

    {/* second part */}
  </Carousel>
  </div>
  );
}

export default  SliderImages;