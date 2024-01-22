import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks";
import { Card } from "components/Base";
import { Place } from "types"
import Slider from "components/Slider";


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

export const Visits = () => {
    const visits = useAppSelector(store => store.app.visits);
    const dispatch = useAppDispatch();
    const history = useHistory();

    return (
        <Card title="Recent Visit">
            <Slider        
                breakpoints= {{
                    576: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },                
                    992: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    1600: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    }
                }}
                slidesPerView={1}
                spaceBetween={0}
                slidesPerGroup={1} 
                slidesOffsetBefore={4}
                slidesOffsetAfter={4}
                loop={true} 
                slider="recent-visit"
            >
                {visits.map((item, idx) => (
                    <PlaceItem place={item} key={`recent-visit-${idx}`} />
                ))}
            </Slider>
        </Card>
    )
}

export default Visits