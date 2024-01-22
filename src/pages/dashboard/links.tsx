import React, { useState, MouseEvent } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { Card } from "components/Base";
import { Place } from "types"
import Slider from "components/Slider";
import ModalAddQuickLink from "components/Modal/ModalLink"


interface PlaceProps {
    place: Place
}

const PlaceItem = ({place}: PlaceProps) => (
    <div className="co-place-slider-slides d-flex">
        <div className="co-place-slider-content-left flex-0">
            <img src={place.image} />
        </div>
        <div className="ms-1">
            {place.address}
        </div>
    </div>
)

export const QuickLinks = () => {
    const links = useAppSelector(store => store.app.links);
    const dispatch = useAppDispatch();
    
    const [modalVisible, setModalVisible] = useState(false)

    const handleAddLink = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        setModalVisible(true)
    }

    return (
        <Card title="Quick Links" action={() => <Link to="#" onClick={handleAddLink}>Add link</Link>}>
            <Slider        
                breakpoints= {{
                    576: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    992: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    1600: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    }
                }}
                slidesPerView={1}
                spaceBetween={0}
                slidesPerGroup={1} 
                slidesOffsetBefore={4}
                slidesOffsetAfter={4}
                loop={true} 
                // loopFillGroupWithBlank={true}
                slider="quick-link"
            >
                {links.map((item, idx) => (
                    <PlaceItem place={item} key={`quick-link-${idx}`} />
                ))}
            </Slider>

            {modalVisible &&
                <ModalAddQuickLink onClose={() => setModalVisible(false)} />
            }
        </Card>
    )
}

export default QuickLinks