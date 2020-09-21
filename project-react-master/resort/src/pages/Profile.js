import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    Button
  } from "shards-react";
  import {
    Card,
    CardHeader
  } from "shards-react";


  var raya;
  
 

class Profile extends Component {


    constructor(props) {
        super(props)
        this.state = {
            firstname:'',
            lastName: '',
            password:'',
            address:'',
            email:'',
            birthDate:''
        }

    }

  


    onSubmit(e) {

      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      var id;
      id=decoded.id

    console.log(id)
     
      e.preventDefault();
      fetch("/api/update/"+id,{
          "method": "PUT",
          "headers": {
              "x-rapidapi-host": "fairestdb.p.rapidapi.com",
              "accept": "application/json",
                    "Content-Type": "application/json",
          },
          "body": JSON.stringify({
            firstName:this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            image:this.state.image,
            birthDate: this.state.birthDate
             
          })
      })
          .then(response => response.text())
          .then(response => {
              console.log(response)


              
            //  localStorage.setItem('usertoken', response)
             // this.props.history.push('/profile')

          
           this.props.history.push('/login')
           window.location.reload();
          })
          .catch(err => {
              console.log(err);
          });
  }


    componentDidMount() {

    
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)

       console.log(raya)

  



        this.setState({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
            address:decoded.address,
            password:decoded.password,
            image:decoded.image,
            birthDate:decoded.birthDate
        })

        console.log(decoded.id)
        
        console.log(decoded.image)

        // this.raya=decoded.image;


        fetch("/api/find/"+decoded.id,{
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "fairestdb.p.rapidapi.com",
              "accept": "application/json",
                    "Content-Type": "application/json",
          },
         
      })
          .then(response => response.json())
          .then(response => {
              console.log(response)
  
  
           
              
          })
          .catch(err => {
              console.log(err);
          });
    }

    handleChange(changeObject) {
        this.setState(changeObject)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }







    

 




    




    
   
    render() {
        const token = localStorage.usertoken

        const decoded = jwt_decode(token)
        localStorage.setItem('userId', decoded.id)
        localStorage.setItem('firstName', decoded.firstName)


        return (
          
            <>
              <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
      <Col lg="4">

      <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
     <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={require(`../upload/${decoded.image}`)} alt={decoded.image}
        // alt={raya.name}
          width="200"
        />
      </div>
        <h4 className="mb-0"></h4>
        <span className="text-muted d-block mb-2">{decoded.firstName}  {decoded.lastName}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
     {decoded.address}
          </strong>
          
           
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
       {decoded.email}
        </strong>
        <span>
        {decoded.birthDate}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>











      </Col>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feFirstname">firstName</label>
                <input type="firstname" className="form-control" placeholder=""
                                        value={this.state.firstName}
                                        onChange={(e) => this.handleChange({ firstName: e.target.value })}
                                    required />
              </Col>

              <Col md="6">
                <label htmlFor="fePassword">LastName</label>
                <input type="lastname" className="form-control" placeholder="Enter your "
                                        value={this.state.lastName}
                                        onChange={(e) => this.handleChange({ lastName: e.target.value })}
                                    required />
              </Col>


                
             
            </Row>

            <FormGroup><label htmlFor="feInputAddress">Address</label>
              <input type="address" className="form-control" placeholder=""
                                        value={this.state.address}
                                        onChange={(e) => this.handleChange({ address: e.target.value })}
                                    required /></FormGroup>
             
            

            <FormGroup>
              <label htmlFor="feInputAddress2">Email</label>
              <input type="email" className="form-control" placeholder="" 
                                        value={this.state.email}
                                        onChange={(e) => this.handleChange({ email: e.target.value })}
                                    required />
            </FormGroup>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">Password</label>
                <input type="password" className="form-control" placeholder=" "
                                        value={this.state.password}
                                        onChange={(e) => this.handleChange({ password: e.target.value })}
                                    required />
              </Col>
            
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">Birthdate</label>
                <input type="birthDate" className="form-control" placeholder="Enter your "
                                        value={this.state.birthDate}
                                        onChange={(e) => this.handleChange({ birthDate: e.target.value })}
                                    required />
              </Col>
            
            </Row>
            <Button type="submit"   onClick={(e) => this.onSubmit(e)}>Update</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>



  
            </>
        );
    };

    
}
export default Profile;