import React , {Component} from 'react';

import './assets/css/style.css'
import loginImg from './assets/img/dota.jpg'
import logo from './assets/img/logo.jpg'

import axios from 'axios'


class App extends Component{
    constructor(){
        super()
        this.state={
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changeUsername=this.changeUsername.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit= this.onSubmit.bind(this)

    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered={
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup',registered)
            .then(response=>console.log(response.data))
        
        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })    
    }


    render(){

        // const [formData, setFormData]=React.useState({username:'', email:'', password:''})

        return(
            <div className='loginPg'>
                <div className='container'>
                <img src={logo} className='form--logo' />
                    <div className='form--div'>
                        <div className='form--title'>Lets start the Battle</div>
                        <div className='form--gray'>Please fill your detail to proceed.</div>
                        <form onSubmit={this.onSubmit} className='login--form'>
                        
                            <label>
                            Name <br />
                            <input type='text' onChange={this.changeFullName} value={this.state.fullName} className='form-control form-group' required/>
                            </label>

                            <label>
                            Username <br/>
                            <input type='text' onChange={this.changeUsername} value={this.state.username} className='form-control form-group' required/> 
                            </label>


                            <label>
                            Email <br/>
                            <input type='email' onChange={this.changeEmail} value={this.state.email} className='form-control form-group' /> 
                            </label>

                            <label>
                            Password <br/>
                            <input type='password' onChange={this.changePassword} value={this.state.password} className='form-control form-group' required/> 
                            </label>
                            <div className='form--submit'>

                            <input type='submit' className='btn btn-danger btn-block submit' value='Proceed' /> 
                            
                            </div>
                        </form>
                    </div>
                    <div className='login--img'>
                        <img src={loginImg} />
                    </div>
                </div> 
                
            </div>
        );
    }
}

export default App;

