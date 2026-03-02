import { useState, type SyntheticEvent } from "react";

export const LoginForm = (()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const submitForm = ((ev: SyntheticEvent)=> {
        ev.preventDefault();
        //console.log(email);       
        //console.log(password)
        const currentForm = ev.target as HTMLFormElement
        console.log(currentForm,{email,password});
    });

    return (        
    <form className="mb-6 flex flex-col gap-4" onSubmit={submitForm}>
    <h1 className="mb-6">Login Form</h1>
    <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(ev)=>{
        setEmail(ev.target.value)}} />
    <input type="password" name="password" placeholder="Enter your password" value={password}
    onChange={(ev)=>{ setPassword(ev.target.value)}} />
    <button>Submit</button>
    </form>
    );
})

