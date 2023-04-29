import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { logo } from '../components/logo';
import LinaerStepper from '../components/input';

const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	return (
        <>
        <div>
                <logo/>
        </div>
		<div className="wrapper signIn">
            
			<div className="illustration">
				<img src="https://wallpapercave.com/dwp1x/wp2024202.jpg" alt="illustration" />
			</div>
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="email">E-mail</label>
						<input type="email" id="email" placeholder="Enter your E-mail" />
					</div>
					<div>
						<label htmlFor="name">Password</label>
						<input type="password" id="name" placeholder="Enter you Password" />
					</div>
					<button type="submit" onClick={preventRefresh}>
						<Link to= "/dashboard"> Submit </Link>
					</button>
				</form>
				<p >
					Don't have an account ? <Link to="/input"><span className='signup_button'> Sign Up </span></Link>
				</p>
			</div>
		</div>
        </>
	);
}