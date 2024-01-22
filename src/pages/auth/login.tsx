import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, Button } from "components/Base"
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import ActionTypes from "store/constants/ActionTypes"

export const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useAppDispatch();	
	const history = useHistory();

	const handleSignIn = () => {
		history.push(`${APP_PREFIX_PATH}/dashboard`)
	}

	const gotoSignUp = (e : React.MouseEvent) => {
		e.preventDefault();
		dispatch({type: ActionTypes.SIGNUP_STEP, payload: 0})
		history.push(`${AUTH_PREFIX_PATH}/signup`)
	}

	return (
		<div className="co-auth-login-wrapper">
			<h1 className="co-log-h1">Sign In</h1>
          	<div className="co-log-formblock">
				<div className="co-log-grid">
					<div className="co-log-grid-item">
						<Input value={username} label="Name" placeholder="Username" onChange={(val) => setUsername(val)} />
					</div>
					<div className="co-log-grid-item">
						<Input type="password" value={password} label="Password" placeholder="Password" onChange={(val) => setPassword(val)} />
					</div>
					<div className="co-log-grid-item">
						<Button className="primary w-100" size="lg" onClick={handleSignIn}>Sign In</Button>
					</div>
				</div>
				<div className="co-forgot-pass">
					<Link className="co-log-links" to={`${AUTH_PREFIX_PATH}/forgot-password`}>Forgot Password?</Link>
				</div>
				<div className="co-log-bottom">
					<div>
						Don’t have an account yet? <Link className="co-log-links" to="#" onClick={gotoSignUp}>Sign Up Here</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login