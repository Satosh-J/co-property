import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, Button } from "components/Base"
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import ActionTypes from "store/constants/ActionTypes"

export const ForgotPassword = () => {
	const [step, setStep] = useState(0)
	const [email, setEmail] = useState('')
	const [code, setCode] = useState('')
	const dispatch = useAppDispatch();	
	const history = useHistory();

	const handleSend = () => {
		setStep(1)
	}

	const handleGoBack = () => {
		history.push(`${AUTH_PREFIX_PATH}/login`)
		setStep(0)
	}

	return (
		<div className="co-auth-login-wrapper">
			<div className="mb-4">
				<Button className="secondary" icon="arrow-prev" iconSize="xs" onClick={handleGoBack}>Go Back</Button>
			</div>
			<h1 className="co-log-h1 mb-4">Forgot Password</h1>
			<div className="co-log-formblock mb-4">
			{step === 0 &&
          		<div className="co-log-grid">
					<div className="co-log-grid-item mb-4">
						<Input value={email} label="Email Address" placeholder="tst@gmail.com" onChange={(val) => setEmail(val)} />
					</div>
					<div className="co-log-grid-item">
						<Button className="primary w-100" size="lg" onClick={handleSend}>Send</Button>
					</div>
				</div>
			}
			{step === 1 &&
				<div className="co-log-grid">
					<div className="co-log-grid-item mb-4">
						<Input value={email} label="Enter Code" placeholder="0193734" onChange={(val) => setCode(val)} />
					</div>
					<div className="co-log-grid-item mb-4">
						<Button className="primary w-100" size="lg">Send</Button>
					</div>
					<Link className="co-log-links" to="#">Resend</Link>
				</div>
			}
			</div>
			
			<div className="divider"></div>
		</div>
	)
}

export default ForgotPassword