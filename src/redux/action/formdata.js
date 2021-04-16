import axios from 'axios';

import {FORM_DATA ,  FETCH_DATA} from './passType.js';



export const addFormData=(name,email,states,contact,organisation,designation,experience)=>{
    var OPTIONS = {
        url: "http://localhost:5000/api/add_data",
        method: "POST",
        data:{name:name,email:email,number:contact,city:states,organisation:organisation,experience:experience,designation:designation},
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYXJ1biBzaGFybSIsImlhdCI6MTYxODU2Njc4MiwiZXhwIjoxNjE4NTk1NTgyfQ._IG6mrJjyywd775-QmHgE0kzjtKf2ARgVwxH-vfoods",
          "Content-Type": "application/json"
        }
      };


      axios(OPTIONS).then(res=>console.log(res)).catch(err=>console.log(err));


    return{
        type:FORM_DATA,
        payload:name,
        email:email,
        states:states,
        contact:contact,
        organisation:organisation,
        designation:designation,
        experience:experience
    }
}




export const FetchData=(name,email,states,contact,organisation,designation,experience)=>{


    return function(dispatch){
    var OPTIONS = {
        url: "http://localhost:5000/api/getdata",
        method: "GET",

        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYXJ1biBzaGFybSIsImlhdCI6MTYxODU2Njc4MiwiZXhwIjoxNjE4NTk1NTgyfQ._IG6mrJjyywd775-QmHgE0kzjtKf2ARgVwxH-vfoods",
          "Content-Type": "application/json"
        }
      };


      axios(OPTIONS).then(res=>{
const data=res.data.results;

dispatch(PassData(data));
      }).catch(err=>console.log(err));


   
}
}


export const PassData=(data)=>{
    return{
        type:FETCH_DATA,
        payload:data
    }
}





