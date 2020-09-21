import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Link,
 
} from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  
  Button
} from "shards-react";

import axios from 'axios'; 



class CompleteFormExample extends Component {


  constructor(props) {
      super(props)
      this.state = {
          id:'',
        roomType: '',
        image: '',
        nbRoomAvailable: '',
        price: ''
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);

  }

  state = { 
    // Initially, no file is selected 
    selectedFile: null
  }; 
   
  // On file select (from the pop up) 
  onFileChange = event => { 
   
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
   
  }; 
   
  // On file upload (click the upload button) 
  onFileUpload = () => { 
   
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      'file', 
     this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
   
    // Details of the uploaded file 
    console.log(this.state.selectedFile); 
   
    // Request made to the backend api 
    // Send formData object 
    axios.post('/room/upload', formData); 
    console.log(this.state.selectedFile.name); 
  }; 
   
  // File content to be displayed after 
  // file upload is complete 
  fileData = () => { 
   
    if (this.state.selectedFile) { 
        
      return ( 
        <div> 
          <h2>File Details:</h2> 
          <p>File Name: {this.state.selectedFile.name}</p> 
          <p>File Type: {this.state.selectedFile.type}</p> 
          <p> 
            Last Modified:{" "} 
            {this.state.selectedFile.lastModifiedDate.toDateString()} 
          </p> 
        </div> 
      ); 
    
     
    } 
  }; 

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value })

  }


  onSubmit(e) {
      e.preventDefault();
      fetch("/room/newRoom",{
          "method": "POST",
          "headers": {
              "x-rapidapi-host": "fairestdb.p.rapidapi.com",
              "accept": "application/json",
                    "Content-Type": "application/json",
          },
          "body": JSON.stringify({
           roomType: this.state.roomType,
            image: this.state.selectedFile.name,
            nbRoomAvailable: this.state.nbRoomAvailable,
            price: this.state.price,
            
          })
      })
          .then(response => response.text())
          .then(response => {
              console.log(response)
          //  localStorage.setItem('roomtoken', response)


             
             this.props.history.push('/Tables');
              
             // localStorage.setItem('usertoken', response)
             // this.props.history.push('/profile')
              
          })
          .catch(err => {
              console.log(err);
          });
  }


  handleChange(changeObject) {
      this.setState(changeObject)
  }

  
handleChange1(event) {
    this.setState({roomType: event.target.value});
  }


  render () {
      return (
          <>
          
           <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">image</label>
              
               
           
                <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload
                </button> 
            </div> 
          {this.fileData()} 
        

              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Price</label>
                <input type="text" className="form-control" placeholder=""
                                        value={this.state.price}
                                        onChange={(e) => this.handleChange({ price: e.target.value })}
                                    required />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="feInputAddress">nbRoomAvailable</label>
              <input type="text" className="form-control" placeholder=""
                                        value={this.state.nbRoomAvailable}
                                        onChange={(e) => this.handleChange({ nbRoomAvailable: e.target.value })}
                                    required />
            </FormGroup>

         

            <Row form>
              
              <Col md="4" className="form-group">
                <label htmlFor="roomType">roomType</label>
          <select value={this.state.roomType} onChange={this.handleChange1}>
                  <option>vip</option>
                  <option>suite</option>
                  <option>normal</option>
                  <option>single</option>
                  <option>double</option>
           </select>
              </Col>
          

              <Col md="12" className="form-group">
            
              </Col>
            </Row>
           
           
           
               <center>
            <Button type="submit"   onClick={(e) => this.onSubmit(e)} >Create New Room</Button> <br></br>
            <br></br>
        
            
         <Link to="../../Tables" className="btn btn-primary">see all Rooms</Link>
         </center>
        
         
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>


          </>
      );
  };
}







export default CompleteFormExample;