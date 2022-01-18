// import '.css';
import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

function Premiere() {
  return (
 <div style={{marginTop:"4%",marginBottom:"4%" ,background:"grey", padding:"20px"}}>
     <h2 style={{color:"black"}}>Premieres</h2>
  <Carousel  indicators={false}>
    <Carousel.Item>
        <CardGroup style={{display:"flex",gap:"20px",justifyContent:"space-between"}} >
                <Card>
                    <Card.Img variant="top" src="./1917.jpg" style={{height:"300px",width:"300px"}}/>
                    <Card.Body>
                        <Card.Title>1917<b></b></Card.Title>
                        {/* style={{background:"grey",color:"black"}} */}
                        <Card.Text>
                        Tucked into the plot of Sam Mendes’s new film is a
                         portrayal of the youth and innocence that is so readily destroyed in war
                        </Card.Text>
                    </Card.Body>
                </Card>
            <Card>
                <Card.Img variant="top" src="./raya.jpg" style={{height:"300px",width:"300px"}}/>
                <Card.Body>
                    <Card.Title><b>Raya</b></Card.Title>
                    <Card.Text>
                    In the fantasy world of Kumandra, humans&dragons lived together in harmony.However, 
                    when sinister monsters known as the Druun threatened the land,
                     the dragons sacrificed themselves to save humanity
                    </Card.Text>
                </Card.Body>
               
            </Card>
            <Card>
                <Card.Img variant="top" src="./transporter.jpg" style={{height:"300px",width:"300px"}}/>
                <Card.Body>
                    <Card.Title><b>Transporter</b></Card.Title>
                    <Card.Text>
                    Ex-Special Forces operator Frank lives what seems to be a quiet life along the French Mediterranean,
                     hiring himself out as a mercenary transporter who moves goods - human from one place to another
                    </Card.Text>
                </Card.Body>
               
            </Card>
       </CardGroup>
    </Carousel.Item>
    <Carousel.Item >
            <CardGroup style={{display:"flex",gap:"20px",justifyContent:"space-between"}} >
                <Card>
                    <Card.Img variant="top" src="./encanto.jpeg" style={{height:"300px",width:"300px"}}/>
                    <Card.Body>
                        <Card.Title><b>Encanto</b></Card.Title>
                        <Card.Text>
                        Encanto explores the themes of family expectations,
                         love, acceptance, sibling rivalry, and generational trauma.
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="./togo.jpg" style={{height:"300px",width:"300px"}} />
                    <Card.Body>
                        <Card.Title><b>Togo</b></Card.Title>
                        <Card.Text>
                        The film centers on Leonhard Seppala and his titular sled dog in the 1925 serum run to Nome to transport
                         diphtheria antitoxin serum through harsh conditions during an epidemic of diphtheria
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="./rio2.jpeg" style={{height:"300px",width:"300px"}}/>
                        <Card.Body>
                        <Card.Title><b>Rio 2</b></Card.Title>
                        <Card.Text>
                        Blue macaws Blu, Jewel and their three children are comfortably settled in the city, perhaps too comfortably. 
                        Jewel fears that the children are becoming more like humans than birds
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
           </CardGroup>
        </Carousel.Item>
    </Carousel>
    {/* second part */}
    <h2 style={{color:"grey"}}>-</h2>
    <h2 style={{color:"black"}}>Recommended</h2>
    <Carousel  indicators={false}>
    <Carousel.Item>
        <CardGroup style={{display:"flex",gap:"20px",justifyContent:"space-between"}} >
                <Card>
                    <Card.Img variant="top" src="./cars.jpg" style={{height:"300px",width:"300px"}}/>
                    <Card.Body>
                        <Card.Title><b>CARS</b></Card.Title>
                        {/* style={{background:"grey",color:"black"}} */}
                        <Card.Text>
                        The message in "Cars" is simplicity itself: Life was better in the old days, 
                        when it revolved around small towns where everybody knew each other, and around small highways like Route 66, 
                        </Card.Text>
                    </Card.Body>
                </Card>
            <Card>
                <Card.Img variant="top" src="./fnf.png" style={{height:"300px",width:"300px"}}/>
                <Card.Body>
                    <Card.Title><b>Fast and Furious</b></Card.Title>
                    <Card.Text>
                    Dominic Toretto enjoys the adrenaline of street car racing and his fans treat him like a rock star. 
                    After a blazing encounter with the ruthless Johnny Tran, Dom decides to take Brian,
                    a newcomer to street racing, under his wing
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="./eternals.jpg" style={{height:"300px",width:"300px"}}/>
                <Card.Body>
                    <Card.Title><b>Eternals</b></Card.Title>
                    <Card.Text>
                    'Eternals' follows a group of immortal beings led by  Ajak, who have lived on earth since the beginning of
                     civilization in order to protect Earth's peoples from mysterious otherworldly creatures known as Deviants.
                    </Card.Text>
                </Card.Body>
               
            </Card>
       </CardGroup>
    </Carousel.Item>
    <Carousel.Item >
            <CardGroup style={{display:"flex",gap:"20px",justifyContent:"space-between"}} >
                <Card>
                    <Card.Img variant="top" src="./insideout.jpg" style={{height:"300px",width:"300px"}}/>
                    <Card.Body>
                        <Card.Title><b>Inside Out</b></Card.Title>
                        <Card.Text>
                        A major aspect of Inside Out is the way emotions and memories are portrayed in the film. The core memories in the film
                        allow Riley to recall previous experiences which control her emotions, and can allow "mental time travel".
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="./realsteel.jpg" style={{height:"300px",width:"300px"}} />
                    <Card.Body>
                        <Card.Title><b>Real Steel</b></Card.Title>
                        <Card.Text>
                        Charlie Kenton (Hugh Jackman) used to be a prizefighter but lost his chance to win a title when heavy, towering robots took over the boxing ring
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="./freeguy.jpg" style={{height:"300px",width:"300px"}}/>
                        <Card.Body>
                        <Card.Title><b>Free Guy</b></Card.Title>
                        <Card.Text>
                        Free Guy is the tale of Guy becoming self-aware, realizing that he can,
                         and should, make choices in life
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
           </CardGroup>
        </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default  Premiere;