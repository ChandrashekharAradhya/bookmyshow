import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Footer() {
  return (
 <div style={{background:"black",color:"white"}} >
  <Container>
      <Row  style={{padding:"3%"}}>
      <Col xs={2}>
          <b>List your show</b>
      </Col>
      <Col  xs={4}>
          Got a show,event or a great experience?Pratner with us&get listed on BookMyShow
      </Col>
      <Col style={{display:"flex",flexDirection:"row-reverse"}} >
          <Button><b>Contact Today</b></Button>
      </Col>
      </Row>
      <Row style={{textAlign:"center",padding:"3%"}} >
      <Col>
         <b>24/7 customer care</b>
      </Col>
      <Col>
          <b>Resend booking confirmation</b>
      </Col>
      <Col>
          <b>Subscribe to newspaper</b>
      </Col>
      </Row>
  </Container>
  </div>
  );
}

export default Footer;