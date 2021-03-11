import React from 'react';
import Header from './header'
import Congratulations from './congratulations'

import Errors from './error'
import axios from 'axios';
import { save_form, isCompletedFunc, onError } from '../store/actions/formAction'
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            company_name: "",
            about_project : "",
            budget : 0,
            interested_in : "",
            email : "",
            file_upload: null
        }   
    }
    cancel = () =>{
        let choice = window.confirm("Are you want to cancel")
        if(choice){
            let Error = {
                error: "Your Data as been cancelled"
            }

            this.props.onError(Error)
            this.props.save_form(this.state)
            setTimeout(()=> window.location.href = "/", 3000)
        }
    }

    submit_form = (e) => {
        e.preventDefault();
        let form_data = new FormData();  
        form_data.append('first_name', this.state.first_name);
        form_data.append('last_name', this.state.last_name);
        form_data.append('about_project', this.state.about_project);
        form_data.append('email', this.state.email);
        form_data.append('company_name', this.state.company_name);
        form_data.append('contact_number', this.state.contact_number);
        form_data.append('budget', this.state.budget);
        form_data.append('interested_in', this.state.interested_in);
        try{
            form_data.append('file_upload', this.state.file_upload, this.state.file_upload.name);
        }
        catch(e){
            console.log(e)
        }
        
        let url = 'http://localhost:8000/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            if(res.data.id){
                this.props.isCompletedFunc()
                let clearError = {
                    error: ''
                }
                this.props.onError(clearError)
                setTimeout(()=> window.location.href = "/", 3000)

            }
            else{
                this.props.onError(res.data)
                
            }

        })
        .catch(err => console.log(err))
    }

    render(){
        return(
                    <div>
                        <Header />
                        <div className="m-2">
                        <div className="p-5 rounded-lg w-72 space-around p-auto bg-white">
                        <form onSubmit={this.submit_form} method="post">
                            <p className="md:text-2xl sm:text-xl font-semibold text-blue-700">Personal info</p>
                            <br />  
                            <div className="grid grid-cols-2">
                                <div>
                                    <label>First Name</label>
                                    <input className="my-2 w-full border-2 border-blue-600 placeholder-sm placeholder-gray-500 rounded-sm py-1 px-2 focus:border-1 focus:border-gray-500 shadow-inner-lg" placeholder="First name" type="text" onChange={(e) => this.setState({first_name: e.target.value}) } required></input>
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input className="my-2 w-full border-2 border-blue-600 placeholder-sm placeholder-gray-500 rounded-sm py-1 px-2 focus:border-1 focus:border-gray-500 shadow-inner-lg" placeholder="Last name" type="text" onChange={(e) => this.setState({last_name: e.target.value}) } required></input>
                                </div>
                                <div>
                                    <label>E-mail</label>
                                    <input className="my-2 w-full border-2 border-blue-600 placeholder-sm placeholder-gray-500 rounded-sm py-1 px-2 focus:border-1 focus:border-gray-500 shadow-inner-lg" placeholder="E-mail" type="email" onChange={(e) => this.setState({email: e.target.value}) } required></input>
                                </div> 
                                <div>
                                    <label>Contact Number</label>
                                    <input className="my-2 w-full border-2 border-blue-600 placeholder-sm placeholder-gray-500 rounded-sm py-1 px-2 focus:border-1 focus:border-gray-500 shadow-inner-lg" placeholder="Phone" type="text" onChange={(e) => this.setState({contact_number: e.target.value}) } required></input>
                                </div>
                            </div>
                            <br />
                            <p className="md:text-2xl sm:text-xl font-semibold text-blue-700">Requirements</p>
                            <br />  
                        
                        <label>Company Name</label> 
                        <input className="my-2 w-full border-2 border-blue-600 placeholder-sm placeholder-gray-500 rounded-sm py-1 px-2 focus:border-1 focus:border-gray-500 shadow-inner-lg" placeholder="Company name " type="text" onChange={(e) => this.setState({company_name: e.target.value}) } required></input>
    
                        <br />    
                        <label>Interested in</label>
                        <select className="my-2 w-full border-2 border-blue-600 placeholder-sm placeholder-gray-500 rounded-sm py-1 px-2 focus:border-1 focus:border-gray-500 shadow-inner-lg" onChange={(e) => this.setState({interested_in: e.target.value}) } required>
                            <option value="">interested in</option>
                            <option value="django + react job">The Job</option>
                        </select>

                        <br />                        
                        <label>budget</label>
                        <select  className="my-2 w-full border-2 border-blue-600 placeholder-sm placeholder-gray-500 rounded-sm py-1 px-2 focus:border-1 focus:border-gray-500 shadow-inner-lg" onChange={(e) => this.setState({budget: e.target.value}) } required>
                            <option value="">budget</option>
                            <option value="100">100k+</option>
                        </select>
                        
                        <br />    
                        <input type="file" onChange={(event) => this.setState({ file_upload: event.target.files[0] })} />
                        <br />    
                        <br />    
      

                        <textarea placeholder="About project" className="w-full border-2 border-blue-800 rounded-md my-2" onChange={(e) => this.setState({about_project: e.target.value}) } rows="5"></textarea>
                        <br />  
                        { this.props.error ? <Errors /> : null }
                        { this.props.isCompleted ? <Congratulations /> : null }
                        
                        <input className="border-2 border-yellow-400 border-lg rounded-full bg-white mr-2 p-1 px-4" type="button" onClick={this.cancel} value="Cancel"></input>
                        <input className="border-2 border-blue-400 border-lg rounded-full bg-white mr-2 p-1 px-4" type="submit" value="Save"></input>
                        </form>
                    </div>
                </div>        
            </div> 
        );
    }
}



const mapDispatchToProps = {
    save_form,
    isCompletedFunc,
    onError
}

function mapStateToProps(state){
    console.log(state)
    return {
        first_name: state.formdata.form.first_name,
        last_name: state.formdata.form.last_name,
        isCompleted: state.formdata.isCompleted,
        error: state.formdata.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)