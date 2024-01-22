import React, {useState, useEffect} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import { Input, Button } from "components/Base";
import { Link } from "react-router-dom"
import ActionTypes from "store/constants/ActionTypes"
import imgSignUpSuccess from "assets/images/success.svg"

export const SignUp = () => {	
	const signupStep = useAppSelector(state => state.auth.signupStep);
	const dispatch = useAppDispatch();

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	
	const [company, setCompany] = useState('')
	const [industry, setIndustry] = useState('')
	const [accounts, setAccounts] = useState('')

	const handleNext = () => {
		dispatch({type: ActionTypes.SIGNUP_STEP, payload: 1})
	}

	const handleGoBack = () => {
		dispatch({type: ActionTypes.SIGNUP_STEP, payload: 0})
	}

	const handleSignUp = () => {
		dispatch({type: ActionTypes.SIGNUP_STEP, payload: 2})
	}

	return (
		<div className="login-container">
			{ signupStep === 1 &&
			<div className="mb-4">
				<Button className="secondary" icon="arrow-prev" iconSize="xs" onClick={handleGoBack}>Go Back</Button>
			</div>
			}

			{ signupStep < 2 &&
			<h1 className="co-log-h1">New account sign up</h1>				
			}
			<div className="co-log-formblock">				
				{ signupStep === 0 &&
				<div className="co-log-grid">
					<div className="co-log-grid-item">		
						<Input label="First Name" value={firstName} placeholder="First Name" required onChange={(val) => setFirstName(val)}  />
					</div>
					<div className="co-log-grid-item">		
						<Input label="Last Name" value={lastName} placeholder="Last Name" required onChange={(val) => setLastName(val)}  />
					</div>
					<div className="co-log-grid-item">		
						<Input label="Phone number" value={phone} type="tel" placeholder="Phone" required onChange={(val) => setPhone(val)}  />
					</div>
					<div className="co-log-grid-item">		
						<Input label="Email" value={email} type="email" placeholder="Email" required onChange={(val) => setEmail(val)}  />
					</div>					
					<div className="co-log-grid-item">
						<Button className="primary w-100" size="lg" onClick={handleNext}>Next</Button>
					</div>
				</div>
				}
				{ signupStep === 1 &&
				<div className="co-log-grid">
					<div className="co-log-grid-item">		
						<Input label="Company Name" value={company} placeholder="Company Name" required onChange={(val) => setCompany(val)}  />
					</div>
					<div className="co-log-grid-item">		
						<Input label="Industry niched" value={industry} placeholder="Industry niched" required onChange={(val) => setIndustry(val)}  />
					</div>
					<div className="co-log-grid-item">		
						<Input label="Accounts needed" value={accounts} placeholder="Accounts needed" required onChange={(val) => setAccounts(val)}  />
					</div>
					<div className="co-log-grid-item">
						<Button className="primary w-100" size="lg" onClick={handleSignUp}>Sign Up</Button>
					</div>
				</div>
				}
				{ signupStep === 2 &&
				<div className="co-log-grid text-center">
					<div className="co-log-grid-item">		
						<img src={imgSignUpSuccess} />
					</div>
					<div className="co-log-grid-item">		
						<h1 className="co-log-h1 mb-3">Success!</h1>
						<div className="text-normal text-desc mx-auto" style={{maxWidth: '200px'}}>
							One of our team members will reach out to you shortly
						</div>
					</div>
					<div className="co-log-grid-item">
						<Button className="secondary mx-auto" icon="arrow-prev" iconSize="xs" onClick={handleGoBack}>Go Back</Button>
					</div>
				</div>
				}
			</div>
			<div className="co-log-bottom">
				<div>
					Have an account? <Link className="co-log-links" to={`${AUTH_PREFIX_PATH}/login`}>Sign In Here</Link>
				</div>
			</div>
		</div>
	)
}

export default SignUp