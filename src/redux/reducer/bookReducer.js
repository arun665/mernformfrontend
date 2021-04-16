import {FORM_DATA ,FETCH_DATA} from "../action/passType.js";


const initialState={
 name:'',
 email:'',states:'',contact:'',organisation:'',designation:'',experience:'',
 Data:[]
   
}

const passReducer=(state=initialState,action)=>{

    switch(action.type){
        case FORM_DATA:return{
            ...state,
        name:action.payload,
        email:action.email,
        states:action.states,
        contact:action.contact,
        organisation:action.organisation,
        designation:action.designation,
        experience:action.experience
        }
        case FETCH_DATA:return{
            ...state,
            Data:action.payload
        }
        

        default:return state
    }

}

export default passReducer;