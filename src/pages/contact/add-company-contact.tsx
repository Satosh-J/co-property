import React, {useState, useEffect, useCallback, useRef} from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import _debounce from "lodash/debounce";
import { ButtonGroup, Button, Input, Card, RadioBox, TextArea } from "components/Base"
import { APP_PREFIX_PATH } from 'configs/config'
import { Row, Col } from "react-bootstrap"

import { ContactInfo, CONTACT_TAG_TITLE, CONTACT_STATUS_TITLE, CONTACT_TAG, CONTACT_STATUS } from "types";

export const AddCompanyContact = () => {
	const dispatch = useAppDispatch()	
	const history = useHistory();

    const [tag, setTag] = useState<CONTACT_TAG>("seller");
    const [status, setStatus] = useState<CONTACT_STATUS>("hot");

    const handleGoBack = () => {
		history.push(`${APP_PREFIX_PATH}/contacts`)
    }
    
	return (
		<>
            <div className="page-header">
                <div className="d-flex justify-content-between align-items-center">
                    <Button className="secondary" icon="arrow-prev" iconSize="xs" onClick={handleGoBack}>Go Back</Button>    
                    <Button className="primary">Create</Button>
                </div>
            </div>
			
			<div className="co-content-main-wrapper d-flex flex-column flex-1">
				<Card className="fit-content flex-1">
                    <div className="text-small text-desc mb-3">CREATE CONTACT - COMPANY</div>

                    <Row className="gy-3">
                        <Col md={6} xl={3}>
                            <div className="co-label">Company Image</div>
                            <Button className="outline-primary w-100 mb-3" icon="upload" size="lg">Upload</Button>

                            <Input label="Company" placeholder="Company Name" className="mb-3" />
                            <Input label="Email" placeholder="Email Address" className="mb-3" />
                            <Input label="Tags" placeholder="Tags" className="mb-3" />
                            <Input label="Website" placeholder="Website Link" className="mb-3" />
                        </Col>
                        <Col md={6} xl={3}>
                            <Input label="Office Phone" placeholder="Office number" className="mb-3" />
                            <Input label="Cell Phone" placeholder="Cell number" className="mb-3" />
                            <TextArea label="Notes" placeholder="Add a note" className="mb-3" rows={2}/>
                            
                            <div className="co-label">Add Social Media Accounts</div>
                            <div className="co-group-panel">
                                <Input label="Facebook" placeholder="Paste Link" className="mb-3" />
                                <Input label="Linkedin" placeholder="Paste Link" className="mb-3" />
                                <Input label="Twitter" placeholder="Paste Link" />
                            </div>
                        </Col>
                        <Col md={6} xl={3}>
                            <div className="co-label">Status</div>
                            <div className="co-group-panel">
                                <div className="tags-panel">
                                    <div className="co-label">Select Tag</div>
                                    {Object.entries(CONTACT_TAG_TITLE).map(([key, title]) => (
                                    <RadioBox value={key} current={tag} title={title} className="mb-2" onChange={setTag} bordered/>
                                    ))}
                                </div>
                                <div className="status-panel mt-3">
                                    <div className="co-label">Select Status</div>
                                    {Object.entries(CONTACT_STATUS_TITLE).map(([key, title]) => (
                                    <RadioBox value={key} current={status} title={title} className="mb-2" onChange={setStatus} bordered/>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col md={6} xl={3}>
                            <Input label="Address" placeholder="Address" className="mb-3" />
                            <Input label="City" placeholder="City" className="mb-3" />
                            <Input label="Country" placeholder="Country" className="mb-3" />
                            <Input label="State" placeholder="State" className="mb-3" />
                            <Input label="Zip Code" placeholder="Zip Code" className="mb-3" />
                        </Col>
                    </Row>
                </Card>
			</div>
		</>
	)
}

export default AddCompanyContact