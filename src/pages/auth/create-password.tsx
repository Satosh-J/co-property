import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { Input, Button } from "components/Base"
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import ActionTypes from "store/constants/ActionTypes"

export const CreatePassword = () => {
	const [password, setPassword] = useState('')
	const [repeatPwd, setRepeatPwd] = useState('')
	const dispatch = useAppDispatch();	
	const history = useHistory();

	const handleSave = () => {
	}

	const handleGoBack = () => {
		history.push(`${AUTH_PREFIX_PATH}/login`)
	}

	return (
		<div className="co-auth-login-wrapper">
			<div className="mb-4">
				<Button className="secondary" icon="arrow-prev" iconSize="xs" onClick={handleGoBack}>Go Back</Button>
			</div>
			<h1 className="co-log-h1 mb-4">Create Password</h1>
			<div className="co-log-formblock mb-4">
          		<div className="co-log-grid">
					<div className="co-log-grid-item">
						<Input type="password" value={password} label="Password" placeholder="Password" onChange={(val) => setPassword(val)} />
					</div>
                    <div className="co-log-grid-item">
						<Input type="password" value={repeatPwd} label="Repeat Password" placeholder="Repeat Password" onChange={(val) => setRepeatPwd(val)} />
					</div>
					<div className="co-log-grid-item">
						<Button className="primary w-100" size="lg" onClick={handleSave}>Save</Button>
					</div>
				</div>
			</div>
			
			<div className="divider"></div>
		</div>
	)
}

export default CreatePassword