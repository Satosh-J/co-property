import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import { Carousel, CarouselItem, Spinner } from "react-bootstrap"
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/config'
import { useAppDispatch, useAppSelector } from "hooks";
import Stepper from "components/Stepper";

import imgLogo from "assets/images/co-prop-logo.svg"

const dataSplash = [
    {
        image: '/images/splash01.jpg',
		srcset: '/images/splash01-p-500.jpeg 500w, /images/splash01-p-800.jpeg 800w, /images/splash01.jpg 1036w',
        description: '“Whether you think you can, or think you can’t, you’re right”',
		name: '- Henry Ford'
    },
    {
        image: '/images/splash02.jpg',
		srcset: '/images/splash02-p-500.jpeg 500w, /images/splash02-p-800.jpeg 800w, /images/splash02.jpg 1036w',
        description: '“Whether you think you can, or think you can’t, you’re right”',
		name: '- Henry Ford'
    },
	{
        image: '/images/splash03.jpg',
		srcset: '/images/splash03-p-500.jpeg 500w, /images/splash03-p-800.jpeg 800w, /images/splash03.jpg 1036w',
        description: '“Whether you think you can, or think you can’t, you’re right”',
		name: '- Henry Ford'
    }
]

const dataSignUpSteps = [
	{ step: 1, text: 'New Account Signup' },
	{ step: 2, text: 'Personal Information' }
]

const Loading = () => (
	<div className="loading cover-content">
		<Spinner animation="border" variant="primary" />
	</div>
)

export const AuthLayout = () => {
	const location = useLocation();
	const signupStep = useAppSelector(state => state.auth.signupStep);

	return (
		<div className="co-main-landing d-flex flex-column align-items-stretch">
			<div className="d-flex justify-content-between align-items-center">
        		<a href="#" className="co-main-landing-brand d-inline-block">
					<img src={imgLogo} loading="lazy" alt="" />
				</a>
				{location.pathname === `${AUTH_PREFIX_PATH}/signup` && signupStep < 2 &&
				<Stepper step={signupStep} data={dataSignUpSteps} />
				}
      		</div>
			
      		<div className="co-main-landing-content d-flex justify-content-md-between flex-md-row flex-column flex-1">
        		<div className="co-main-landing-photocol">
					<Carousel controls={false} interval={3000} pause={false} indicators={true} className="co-main-landing-slider">
						{dataSplash.map((item, idx) => (
							<CarouselItem key={idx} className="co-main-landing-slider-photos">
								<img 
									className="co-main-landing-slider-photos-img" 
									sizes="(max-width: 479px) 83vw, (max-width: 767px) 67vw, (max-width: 991px) 42vw, (max-width: 1439px) 44vw, 49vw"
									srcSet={item.srcset}
									src={item.image} 
								/>
								<div className="co-main-landing-slider-photos-overlay d-flex flex-column justify-content-end">
									<div>{item.description}</div>
									<div className="co-main-landing-slider-photos-overlay-name">{item.name}</div>
								</div>
							</CarouselItem>
						))}
					</Carousel>
				</div>
				<div className="co-main-landing-right">
					<Suspense fallback={<Loading />}>
						<Switch>
							<Route path={`${AUTH_PREFIX_PATH}/login`} component={lazy(() => import('pages/auth/login'))} />
							<Route path={`${AUTH_PREFIX_PATH}/signup`} component={lazy(() => import('pages/auth/signup'))} />
							<Route path={`${AUTH_PREFIX_PATH}/forgot-password`} component={lazy(() => import('pages/auth/forgot-password'))} />
							<Route path={`${AUTH_PREFIX_PATH}/create-password`} component={lazy(() => import('pages/auth/create-password'))} />
							<Redirect from={`${AUTH_PREFIX_PATH}`} to={`${AUTH_PREFIX_PATH}/login`} />
						</Switch>
					</Suspense>
				</div>
			</div>
		</div>
	)
}

export default AuthLayout