import React, { type SyntheticEvent } from "react";

class LoginClassForm extends React.Component
{
    state = {
        email:'',
        password:''
    }

    submitForm = ((ev: SyntheticEvent)=> {
        ev.preventDefault();
        //console.log(email);       
        //console.log(password)
        const currentForm = ev.target as HTMLFormElement        
        console.log(currentForm, this.state);
    });

    render():React.ReactNode{
    return (
       <form className="mb-6 flex flex-col gap-4" onSubmit={this.submitForm.bind(this)}>
    <h1 className="mb-6">Login Class Form</h1>
    <input type="email" name="email" placeholder="Enter your email" onChange={(ev)=>{
        this.setState({email:ev.target.value})
    }} />
    <input type="password" name="password" placeholder="Enter your password" onChange={(ev)=>{
        this.setState({password:ev.target.value})
    }}  />
    <button>Submit</button>
    </form>
       )
    }
}

export default LoginClassForm

