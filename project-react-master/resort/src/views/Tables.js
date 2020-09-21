import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody , Button} from "shards-react";
import PageTitle from "../components/common/PageTitle";

import { Link } from "react-router-dom";


class Tables extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
   
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })

}

onChangeHandler=event=>{

  console.log(event.target.files[0])

}

onSubmit(e,id) {
    e.preventDefault();
    fetch("/room/deleteRoom/"+id,{
      "method": "DELETE",
        
        "headers": {
            "x-rapidapi-host": "fairestdb.p.rapidapi.com",
            "accept": "application/json",
                  "Content-Type": "application/json",
        },
      
    })
    //console.log(id)
 
        .then(response => response.text())
        .then(response => {
            console.log(response)
         
           // this.props.history.push('/profile')
        })
        .catch(err => {
            console.log(err);
        });
}


  componentDidMount() {
    fetch('/room/allRoom')
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result,
         
        });
      });
  }
 

  render() {
    const { items } = this.state;
   
    return(
      
      <>
      <Container fluid className="main-content-container px-4">
  {/* Page Header */}
  <Row noGutters className="page-header py-4">
  <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
  </Row>
  
  {/* Default Light Table */}
  <Row>
  <Col>
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Active Rooms</h6>
    </CardHeader>
    <CardBody className="p-0 pb-3">
      <table className="table mb-0">
        <thead className="bg-light">
          <tr>
            <th scope="col" className="border-0">
              #
            </th>
            <th scope="col" className="border-0">
             roomType
            </th>
            <th scope="col" className="border-0">
              image
            </th>
            <th scope="col" className="border-0">
              nbRoomAvailable
            </th>
            <th scope="col" className="border-0">
              price
            </th>
            <th scope="col" className="border-0">
            
            </th>
          
          </tr>
        </thead>
       
        <tbody>
         
       
          { items.map(item => (
            
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.roomType}</td>
              <td >
              <img src={require(`../upload/${item.image}`)} alt={item.image} width="200" height="90"/>
        
             
                </td>
             

        
              <td>{item.nbRoomAvailable}</td>
              <td>{item.price}</td>
           <td>  <Button type="submit"  onClick={(e) => this.onSubmit(e,item.id)} >Delete</Button></td>
            </tr>
          ))}
         </tbody>
         </table>
        
        
    </CardBody>
  </Card>
       <center>
             
       <Link to="/ComponentsOverview" className="btn btn-primary">return</Link>
         </center>
        
  </Col>
  </Row>
  
 </Container>
      </>
      );
  }}

























export default Tables;