import React, {useState, useEffect, useCallback, useRef} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import { Link, useHistory } from "react-router-dom"
import _debounce from "lodash/debounce";
import { ButtonGroup, Button, Input, Card, Table } from "components/Base"
import Pagination from "components/Pagination"
import { APP_PREFIX_PATH } from 'configs/config'
import { Row, Col } from "react-bootstrap"

import { fakeContacts } from "fakes/contact"
import { ContactInfo, CONTACT_TAG_TITLE, CONTACT_STATUS_TITLE } from "types";

export const Contact = () => {
	const dispatch = useAppDispatch()
	const history = useHistory();
	const [filteredContacts, setFilteredContacts] = useState<Array<ContactInfo>>(fakeContacts)
	const refContainer = useRef<HTMLDivElement>(null)
	
	const [currentPage, setCurrentPage] = useState(1)
	const [allPages, setAllPages] = useState(5)
    	    
	const renderName = useCallback((row : ContactInfo) => (
		<div className="d-flex align-items-center">
            <img src={row.avatar} className="co-avatar contact-avatar"/>
            <div className="ms-2 text-normal">
                <div className="text-semibold">{row.firstName} {row.lastName}</div>
                <div className="mt-2">
                    <span className="text-desc me-1">{row.description}</span>
                </div>
            </div>
        </div>
	), [filteredContacts] )

	const renderContactInfo = useCallback((row : ContactInfo) => (
		<Row className="w-100">
            <Col xs={4}>
                <div className="mb-2 text-normal text-desc">Cell</div>
                <div className="text-normal text-semibold">{row.phone}</div>
            </Col>
            <Col xs={4}>
                <div className="mb-2 text-normal text-desc">Office</div>
                <div className="text-normal text-semibold">{row.officePhone}</div>
            </Col>
            <Col xs={4}>
                <div className="mb-2 text-normal text-desc">Email</div>
                <div className="text-normal text-semibold">{row.email}</div>
            </Col>
        </Row>            
	), [filteredContacts] )

    const renderTag = useCallback((row : ContactInfo) => (
		<div className={`contact-info-tag ${row.tag} d-flex align-items-center justify-content-center`}>{CONTACT_TAG_TITLE[row.tag || '']}</div>
	), [filteredContacts] )

    const renderStatus = useCallback((row : ContactInfo) => (
		<div className={`contact-info-status ${row.status} w-100 text-center`}>{CONTACT_STATUS_TITLE[row.status || '']}</div>
	), [filteredContacts] )

    const renderViewButton = useCallback((row : ContactInfo) => (
		<Link to={`${APP_PREFIX_PATH}/contacts/${row.id}`} className="text-center w-100">
            View
        </Link>
	), [filteredContacts] )

    const handleAddContact = () => {        
		history.push(`${APP_PREFIX_PATH}/contacts/add`)
    }

	return (
		<>
            <div className="page-header">
                <Row className="gy-3 align-items-center">
                    <Col xs="4">
                        <h2>Contacts</h2>
                    </Col>
                    <Col md={{span: 4, order: 0}} xs={{order: 1}}>
                        <Input type="search" icon="search" placeholder="Search contacts" className="contact-search-field mx-auto" />
                    </Col>
                    <Col xs="8" md="4">
                        <div className="d-flex justify-content-end">
                            <Button className="primary" icon="plus" onClick={handleAddContact}>
                                Add Contact
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
			
			<div className="co-content-main-wrapper d-flex flex-column flex-1" ref={refContainer}>
				<Card className="flex-1">
                    <Table 
                        className="flex-1"
                        column={[
                            {title: 'Name', render: renderName, minWidth: 240},
                            {title: 'Contact Info', render: renderContactInfo, minWidth: 450},
                            {title: 'Tags', render: renderTag, width: 120},
                            {title: 'Status', render: renderStatus, width: 120},
                            {title: '', render: renderViewButton, width: 80},
                        ]}
                        data={filteredContacts}
                    />
                </Card>

				<div className="mt-3">
					<Pagination className="justify-content-center" page={currentPage} pages={allPages} onChange={setCurrentPage} />
				</div>
			</div>
		</>
	)
}

export default Contact