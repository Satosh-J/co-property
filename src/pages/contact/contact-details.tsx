import React, {useState, useEffect, useCallback, MouseEvent} from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { ButtonGroup, Button, Input, Card, RadioBox, TextArea } from "components/Base"
import ActivityListItem from "components/ActivityListItem";
import NoteListItem from "components/NoteListItem";
import ModalActivity from "components/Modal/ModalActivity";
import ModalNote from "components/Modal/ModalNote";
import { APP_PREFIX_PATH } from 'configs/config'
import { Row, Col } from "react-bootstrap";

import { fakeContacts, fakeContactProperties, fakeActivities, fakeNotes } from "fakes/contact"
import { Activity, ContactInfo, Note, PropertyInfo } from "types";

interface ContactParams {
    contactId: string
}

export const ContactDetails = () => {
	const dispatch = useAppDispatch()	
	const history = useHistory();
   
    const { contactId } = useParams<ContactParams>();
    const [contact, setContact] = useState<ContactInfo>(fakeContacts[0]);
    const [properties, setProperties] = useState<Array<PropertyInfo>>(fakeContactProperties);
    const [activities, setActivities] = useState<Array<Activity>>(fakeActivities)
    const [notes, setNotes] = useState<Array<Note>>(fakeNotes)

    const [modalAddActivityVisible, setModalAddActivityVisible] = useState(false)
    const [modalAddNoteVisible, setModalAddNoteVisible] = useState(false)

    const handleGoBack = () => {
		history.push(`${APP_PREFIX_PATH}/contacts`)
    }

    const handleAddActivityClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setModalAddActivityVisible(true)
    }
    
    const handleAddNoteClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setModalAddNoteVisible(true)
    }
    
	return (
		<>
            <div className="page-header">
                <div className="d-flex justify-content-between align-items-center">
                    <Button className="secondary" icon="arrow-prev" iconSize="xs" onClick={handleGoBack}>Go Back</Button>    
                    <Button className="primary" icon="plus" >Add Follow Up</Button>
                </div>
            </div>

            
            {modalAddActivityVisible &&
                <ModalActivity onClose={() => setModalAddActivityVisible(false)}/>
            }
            {modalAddNoteVisible &&
                <ModalNote onClose={() => setModalAddNoteVisible(false)}/>
            }
            			
			<div className="co-content-main-wrapper d-flex flex-1">
                <Row className="gy-3">
                    <Col xxl={4} xl={6} className="h-xl-100-m">
                        <Card className="flex-1 h-100">
                            <div className="contact-detail-info d-flex align-items-center mb-3">
                                <img src={contact.avatar} className="co-avatar contact-details-avatar" />
                                <div className="ms-3">
                                    <div className="contact-details-name mb-3">
                                        {contact.firstName} {contact.lastName}
                                    </div>
                                    <div className="d-flex">
                                        <Button icon="phone-call" iconPos="center" className="secondary square me-2" />
                                        <Button icon="sms" iconPos="center" className="secondary square me-2" />
                                        <Button icon="email" iconPos="center" className="secondary square me-2" />
                                        <Button icon="calendar" iconPos="center" className="secondary square" />
                                    </div>
                                </div>
                            </div>

                            <div className="contact-detail-info-table flex-1">
                                <div className="info-row">
                                    <div className="info-header">Company</div>
                                    <div className="info-text">VD Enterprise</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Division</div>
                                    <div className="info-text">Software development</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Name</div>
                                    <div className="info-text">Developer</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Tags</div>
                                    <div className="info-text">Tag Example, Tag Example</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Status</div>
                                    <div className="info-text">Status</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Cell</div>
                                    <div className="info-text">+123 456 789</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Office</div>
                                    <div className="info-text">+123 456 789</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Email</div>
                                    <div className="info-text">info@digitalsolutions.com</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Address</div>
                                    <div className="info-text">Address Example 22</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">City</div>
                                    <div className="info-text">Los Angeles</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Country</div>
                                    <div className="info-text">United States</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">State</div>
                                    <div className="info-text">California</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-header">Zip Code</div>
                                    <div className="info-text">123456</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6} className="h-xl-100-m">
                        <Card title="ASSOCIATED PROPERTIES" className="flex-1 h-100">
                            <div className="co-list contact-property-list">
                                {properties.map((property, idx) => (
                                <div className="co-list-item" key={`contact-property-${idx}`}>
                                    <div className="contact-property d-flex align-items-center">
                                        <img className="contact-property-image" src={property.image}/>
                                        <div className="contact-propery-info">
                                            <div className="text-large text-semibold mb-2">{property.title}</div>
                                            <Row className="w-100">
                                                <Col xs={6}>
                                                    <span className="me-1 text-normal text-desc">City:</span>
                                                    <span className="text-normal text-semibold">{property.city}</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <span className="me-1 text-normal text-desc">Building size:</span>
                                                    <span className="text-normal text-semibold">{property.buildingSize}</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <span className="me-1 text-normal text-desc">No. of Units:</span>
                                                    <span className="text-normal text-semibold">{property.units}</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <span className="me-1 text-normal text-desc">Land size:</span>
                                                    <span className="text-normal text-semibold">{property.landSize}</span>
                                                </Col>
                                            </Row>          
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={4} className="h-xl-100-m">
                        <Row className="gy-3 h-100">
                            <Col xs={12} xxl={12} xl={6} className="contact-detail-activity-panel">
                                <Card title="RECENT ACTIVITY" className="co-recent-activity-card h-100" action={() => <Link to="#" className="text-normal" onClick={handleAddActivityClick}>Add Activity</Link>}>
                                    <div className="contact-details-activities">
                                    {activities.map((activity, idx) => (
                                        <ActivityListItem activity={activity} isFirst={idx === 0} isLast={idx === (activities.length - 1)} key={`recent-activiy-${idx}`} />
                                    ))}
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={12} xxl={12} xl={6} className="contact-detail-note-panel">
                                <Card title="NOTES" className="co-note-card h-100" action={() => <Link to="#" className="text-normal" onClick={handleAddNoteClick}>Add Note</Link>}>
                                    <div className="contact-details-notes">
                                    {notes.map((note, idx) => (
                                        <NoteListItem note={note} key={`note-${idx}`} />
                                    ))}
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
			</div>
		</>
	)
}

export default ContactDetails