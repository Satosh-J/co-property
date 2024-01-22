import React, {useState, useEffect, useCallback, useRef} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import _debounce from "lodash/debounce";
import { ButtonGroup, Button, Input, Card, RadioBox, TextArea } from "components/Base"
import { APP_PREFIX_PATH } from 'configs/config'
import CategoryButton from "components/CategoryButton";

export const AddContact = () => {
	const dispatch = useAppDispatch()	
	const history = useHistory();

    const handleGoBack = () => {
		history.push(`${APP_PREFIX_PATH}/contacts`)
    }
    
	return (
		<>
            <div className="page-header">
                <Button className="secondary" icon="arrow-prev" iconSize="xs" onClick={handleGoBack}>Go Back</Button>
            </div>
			
			<div className="co-content-main-wrapper d-flex flex-1 justify-content-center align-items-center flex-wrap">
                <Link to={`${APP_PREFIX_PATH}/contacts/add/company`}>
				    <CategoryButton icon="line-chart" title="Company" className="m-2" />
                </Link>
                <Link to={`${APP_PREFIX_PATH}/contacts/add/individual`}>
                    <CategoryButton icon="individual" title="Individual" className="m-2" />
                </Link>
			</div>
		</>
	)
}

export default AddContact