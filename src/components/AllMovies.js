import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import  Container  from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import data from "./movies.json";

function Allmovies() {
    console.log(data);
  return (
      <div>
       <Container fluid style={{padding:"6%",background:"grey"}}>
            <Row style={{textAlign:"center",padding:"3%"}} >
                {data.map((mov)=>
                    <Col onClick={()=>window.location.href="/movies/"+mov.id} id={mov.id} key={mov.id}  xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{cursor:"pointer"}}>
                            <Card.Img variant="top" src={mov.image}/>
                            <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>
                                {mov.actor}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
       </Container>
      </div>
      );
}

export default Allmovies;