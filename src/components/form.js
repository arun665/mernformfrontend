import '../css/form.css';
import react ,{useState} from 'react';
import {connect} from "react-redux";
import {addFormData} from "../redux/action/formdata.js";



function Form(props) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState('');
  const [states,setState]=useState('');
  const [organisation,setOrganisation]=useState('');
  const [designation,setDesignation]=useState('');
  const [experience,setExperience]=useState('');
  
  



  return (
    <div className="formdiv">
<div className="row">
    <div className="col-sm-0 col-md-3 col-xs-0"> </div>
     <div  className="col-sm-12 col-xs-12 col-md-6" >
     <div className="container">

  
   <div className="head">
       <h3> Apply for the program</h3>
   </div>
     <form>
     <div className="form-group">
    <input type="text" placeholder="Name"   onChange={e=>setName(e.target.value)}  className="form-control"  />
  </div>
  <div className="form-group">
    <input type="email" placeholder="Email"  onChange={e=>setEmail(e.target.value)}  className="form-control" />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Contact No." onChange={e=>setContact(e.target.value)}  className="form-control" />
  </div>
  <div className="form-group">
    <input type="text" placeholder="State"  className="form-control" onChange={e=>setState(e.target.value)}  />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Organization/College"  className="form-control" onChange={e=>setOrganisation(e.target.value)}  />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Designation"  className="form-control" onChange={e=>setDesignation(e.target.value)}  />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Experience"  className="form-control" onChange={e=>setExperience(e.target.value)}  />
  </div>


 <button className="btn"  onClick={()=>props.addFormData(name,email,states,contact,organisation,designation,experience)} className="btn btn-outline-primary"
   > Submit Now</button>
     </form>
</div>
     </div>
     </div>
    </div>
  );
}




const mapStatetoProps=(state)=>{
  return{
      name:state.pass.name,
      email:state.pass.email,
      states:state.pass.states,
contact:state.pass.contact,
organisation:state.pass.organisation,
designation:state.pass.designation,
experience:state.pass.experience,
    
  }
}


const mapDispatchtoProps=(dispatch)=>{
return{
  addFormData:function(name,email,states,contact,organisation,designation,experience){
   dispatch(addFormData(name,email,states,contact,organisation,designation,experience));
  }
}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Form);






