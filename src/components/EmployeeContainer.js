import React, { Component } from "react";
import * as employees from '../employee.json';
import TableRow from './tableRow';
import { Col, Row, Container } from "../components/Grid";


class EmployeeContainer extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    inputValue: ''
  };

componentDidMount(){
  this.setState({employees:employees.default})
  console.log(this.state.employees)
}

handleInput=(e)=>{
  e.preventDefault()
  console.log(e.target.value)
this.setState({inputValue:e.target.value})
this.filterEmp(e.target.value)
}

filterEmp =(phrase)=>{
  let filteredList = this.state.employees.filter(emp => emp.name.toLowerCase().includes(phrase))
  this.setState({filteredEmployees:filteredList})
}


  render() {
    return (
     
        <Container fluid>
      <div>
        
        <Row>
        <Col size="md-4"></Col>
        <Col size="md-6"><h1> Employee Tracker App </h1></Col>
        </Row>

        <Row>
        <Col size="md-5"></Col>
        <Col size="md-5">
        <input onChange={this.handleInput} value={this.state.inputValue}/>
        </Col>
        </Row>

        <Row>
        <Col size="md-4"></Col>
        <Col size="md-5">
        <h4> Enter the search term below:</h4>
        </Col>
        </Row>

        
        <div>
        {this.state.filteredEmployees.length ? (
       
        this.state.filteredEmployees.map(employee=>{
          return (<TableRow data={employee} key={employee.id}/>)
        }) 
     
        ) : (
        
        this.state.employees.map(employee=>{
          return (<TableRow data={employee} key={employee.id}/>)
        })

        )}
        </div>
        
      </div>
      </Container>
  
    );
  }
}

export default EmployeeContainer;
