import React, { FC } from 'react';
import Icon from './Icon'
import { Button } from './Base'
import { Swiper, SwiperSlide } from "swiper/react";

interface SliderProps extends Swiper {
    className?: string,
    slider?: string,
    navigation?: boolean,
    pagination?: boolean,
    children?: React.ReactNode[]
}

const Slider : FC<SliderProps> = function({
    className='',
    slider='slider',
    navigation=true,
    pagination=true,
    children,
    ...props
}) {
    const navProps = navigation ? {
        nextEl: `.co-${slider}-btn-next`,
        prevEl: `.co-${slider}-btn-prev`
    } : false
    
    const pageProps = pagination ? { "clickable": true } : false

    return (
        <div className={`co-slider ${className}`}>            
            <Swiper
                {...props}
                pagination={pageProps} 
                navigation={navProps}
            >
                {children && children.map((child, idx) => (
                    <SwiperSlide>
                        {child}
                    </SwiperSlide>
                ))
                }
            </Swiper>
            <div className="d-flex co-slider-nav">
                <Button className={`co-${slider}-btn-prev secondary`} icon="arrow-left" size="xs" circle />
                <Button className={`co-${slider}-btn-next secondary ms-2`} icon="arrow-right" size="xs" circle />
            </div>
        </div>
    );
}

export default Slider;
