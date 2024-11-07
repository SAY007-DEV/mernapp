import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [phno, setPhno] = useState();
    const [rolno, setRolno] = useState();

    let userRegister = () => {
        if (!name || !email || !age || !phno || !rolno) {
            alert("Please enter all fields");
        } else {
            axios
                .post("http://localhost:5178/createstudent", {
                    email,
                    name,
                    rolno,
                    age,
                    phno
                })
                .then((res) => {
                    if (res.data != null) {
                        alert("User created");
                    } else {
                        alert("User creation failed");
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
      <div className="backgrd">
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <input type='email' placeholder='Enter Email id' onChange={(e) => setEmail(e.target.value)} />
                <input type='number' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} />
                <input type='number' placeholder='Enter Roll Number' onChange={(e) => setRolno(e.target.value)} />
                <input type='number' placeholder='Enter Phone Number' onChange={(e) => setPhno(e.target.value)} />
                <button onClick={userRegister}>Register</button>
                <h6>Already have an account? <Link to="/login">Login Here</Link></h6>
            </div>
        </div>
        </div>
    );
}

export default Register;
