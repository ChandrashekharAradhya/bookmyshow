import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import  Container  from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"

function Allmovies() {
  return (
      <div>
       <Container fluid style={{padding:"6%",background:"pink"}}>
            <Row style={{textAlign:"center",padding:"3%"}} >
                <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                    <Card>
                        <Card.Img variant="top" src="./1917.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                movie name 1917..//
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                    <Card>
                        <Card.Img variant="top" src="./1917.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                movie name 1917..//
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                    <Card>
                        <Card.Img variant="top" src="./1917.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                movie name 1917..//
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                    <Card>
                        <Card.Img variant="top" src="./1917.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                movie name 1917..//
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
       </Container>
      </div>
      );
}

export default Allmovies;