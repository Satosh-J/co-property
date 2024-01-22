import React, {useState, useEffect, useCallback} from "react"
import { useAppDispatch, useAppSelector } from "hooks";
import _debounce from "lodash/debounce";
import { ButtonGroup, Button, Card, Table } from "components/Base"
import Pagination from "components/Pagination"
import { Row, Col } from "react-bootstrap"
import { CircularProgressbar } from 'react-circular-progressbar';

import { fakeFollowUps } from "fakes/follow-up"
import { FollowUp as FollowUpItem } from "types";
import ActionButton from "components/ActionButton";
import ModalAddFollowUp from "components/Modal/ModalFollowUp";

const FOLLOW_ALL = 0;
const FOLLOW_SELLER = 1;
const FOLLOW_BUYER = 2;

export const FollowUp = () => {
	const dispatch = useAppDispatch()
	const [filteredFollowUps, setFilteredFollowUps] = useState<Array<FollowUpItem>>(fakeFollowUps)

	const [currentDate, setCurrentDate] = useState(new Date())
	
    const [viewFilter, setViewFilter] = useState(FOLLOW_ALL)

	const [currentPage, setCurrentPage] = useState(1)
	const [allPages, setAllPages] = useState(5)
    	
	const [modalAddFollowUpVisible, setModalAddFollowUpVisible] = useState(false)

	const renderProperty = useCallback((row : FollowUpItem) => (
		<div className="followup-column-property">{row.title}</div>
	), [filteredFollowUps] )
    
	const renderInformation = useCallback((row : FollowUpItem) => (
		<Row className="w-100">
            <Col xs={6}>
                <span className="me-1 text-normal text-desc">City:</span>
                <span className="text-normal text-semibold">{row.property.city}</span>
            </Col>
            <Col xs={6}>
                <span className="me-1 text-normal text-desc">Building size:</span>
                <span className="text-normal text-semibold">{row.property.buildingSize}</span>
            </Col>
            <Col xs={6}>
                <span className="me-1 text-normal text-desc">No. of Units:</span>
                <span className="text-normal text-semibold">{row.property.units}</span>
            </Col>
            <Col xs={6}>
                <span className="me-1 text-normal text-desc">Land size:</span>
                <span className="text-normal text-semibold">{row.property.landSize}</span>
            </Col>
        </Row>            
	), [filteredFollowUps] )
    
	const renderContactInfo = useCallback((row : FollowUpItem) => (
		<div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex justify-content-between align-items-center">
                <img src={row.contactInfo.avatar} className="co-avatar followup-contact-avatar"/>
                <div className="ms-2 text-normal">
                    <div className="text-semibold">{row.contactInfo.firstName} {row.contactInfo.lastName}</div>
                    <div className="mt-2">
                        <span className="text-desc me-1">Status:</span>
                        <span className="text-semibold">Example</span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <ActionButton contact={row.contactInfo} type={row.followType} />
                <Button icon="dots" iconPos="center" iconSize="lg" className="hover-secondary ms-2 square"/>
            </div>
        </div>
	), [filteredFollowUps] )

	return (
		<>
            <div className="page-header">
                <Row className="gy-3 align-items-center">
                    <Col xs="4">
                        <h2>Follow Ups</h2>
                    </Col>
                    <Col md={{span: 4, order: 0}} xs={{order: 1}}>
                        <ButtonGroup className="mx-auto w-300p" current={viewFilter} onChange={setViewFilter} theme="secondary" fill>
                            <Button>All</Button>
                            <Button>Sellers</Button>
                            <Button>Buyers</Button>
                        </ButtonGroup>
                    </Col>
                    <Col xs="8" md="4">
                        <div className="d-flex justify-content-end">
                            <Button className="secondary me-3 square" icon="calendar" iconPos="center" iconSize="md"/>
                            <div className="d-flex align-items-center">
                                <div style={{ width: 40, height: 40 }}>
                                    <CircularProgressbar 
                                        value={75} 
                                        text={`${75}%`} 
                                        strokeWidth={10} 
                                        counterClockwise
                                        className="co-circular-progressbar"
                                    />
                                </div>
                                <div className="ms-2">
                                    <div className="text-normal text-semibold">8 / 12</div>
                                    <div className="text-small text-desc">Items Completed</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
			
			<div className="co-content-main-wrapper d-flex flex-column flex-1">
				<Card className="flex-1">
                    <Table 
                        className="flex-1"
                        column={[
                            {title: 'Property', render: renderProperty, minWidth: 240},
                            {title: 'Information', render: renderInformation, minWidth: 320},
                            {title: 'Contact Information', render: renderContactInfo, minWidth: 400},
                        ]}
                        data={filteredFollowUps}
                    />
                    <Button icon="plus" className="primary followup-add-button" onClick={() => setModalAddFollowUpVisible(true)}>Add Follow Up</Button>
				</Card>

				<div className="mt-3">
					<Pagination className="justify-content-center" page={currentPage} pages={allPages} onChange={setCurrentPage} />
				</div>

				{modalAddFollowUpVisible &&
					<ModalAddFollowUp onClose={() => setModalAddFollowUpVisible(false)}/>
				}
			</div>
		</>
	)
}

export default FollowUp