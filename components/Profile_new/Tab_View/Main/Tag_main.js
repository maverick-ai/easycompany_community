import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "react-bootstrap";
import Details from "../Active_Details/Details";
import Guide from '../Guide_Level/Guide';
import Navbar from "../Navbar/Navbar";
import Points_Badges from '../Points_Badges/Points_Badges';
import Wrapper from '../Wrapper/Wrapper';

export default function Tag_main(props) {
  const name = `${props.data.first_name} ${props.data.last_name}`;
  const datejoined= props.data.date_joined.slice(5,7);
  const date= props.data.date_joined.slice(8,10);
  let month="";
  switch(datejoined){
      case "01": {
          month = "January";
          break;
      }
      case "02": {
          month = "February";
          break;
      }
      case "03": {
          month = "March";
          break;
      }
      case "04": {
          month = "April";
          break;
      }
      case "05": {
          month = "May";
          break;
      }
      case "06": {
          month = "June";
          break;
      }
      case "07": {
          month = "July";
          break;
      }
      case "08": {
          month = "August";
          break;
      }
      case "09": {
          month = "September";
          break;
      }
      case "10": {
          month = "October";
          break;
      }
      case "11": {
          month = "November";
          break;
      }
      case "12": {
          month = "December";
          break;
      }
  }
  let suffix="";
  if(date[1]==="1" && (date[0]==="0"||date[0]==="2"||date[0]==="3"))
  suffix="st";
  else if(date[1]==="2" && (date[0]==="0"||date[0]==="2"))
  suffix="nd";
  else if(date[1]==="3" && (date[0]==="0"||date[0]==="2"))
  suffix="rd";
  else
  suffix="th";
  let datefinal = `${date}${suffix} ${month}`;

  return (
    <> 
          <Row>
            <Col>
              <Navbar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Details username={name} date={datefinal}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Points_Badges points={props.data.stats.total_score} badges={props.data.stats.badges.length} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Guide level={props.data.rating} badges={props.data.stats.badges}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Wrapper data={props}/>
            </Col>
          </Row>
    </>
  )
}
