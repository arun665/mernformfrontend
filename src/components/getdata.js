import { useReducer , useEffect } from 'react';

import {useSelector,useDispatch} from "react-redux";

import React from 'react';   
import ReactDOM from 'react-dom';   
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import {FetchData} from "../redux/action/formdata.js";


function GetData(){

const dispatch=useDispatch();
useEffect(()=>{
    dispatch(FetchData(Data));
})
var Data=useSelector(state=>state.pass.Data);

console.log(Data);

var AllCat=Data.map((val,i)=>(
    <tr key={i}>
    <td key={val._id}>{i+1}</td>
     <td >{val._id}</td>
      <td > {val.Name}</td>
      <td > {val.City}</td>
      <td > {val.Experience}</td>
      <td > {val.Organisation}</td>
      <td > {val.Designation}</td>
      <td > {val.Contact}</td>
    </tr>
  ))


return (
    <div>
    <h1> This is database page</h1>
    <Table striped bordered hover>
<thead>
<tr>
<th > S.No.</th>
  <th scope="col"> _id</th>
  <th scope="col"> name</th>    <th scope="col"> City /State</th>   <th scope="col"> Experience </th>   <th scope="col"> Organisation </th>   <th scope="col"> Designation</th>   <th scope="col"> Contact</th>






</tr>
</thead>
<tbody>
{
AllCat}
</tbody>
</Table>
    </div>
);
    
}


export default GetData;