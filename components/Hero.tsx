import React, { useEffect, useState } from 'react'
import { SectionIcon, SunriseIcon } from './SectionIcon'

interface Props {
    counselingRef: React.RefObject<HTMLDivElement | null>
    pricingRef: React.RefObject<HTMLDivElement | null>
    formsRef: React.RefObject<HTMLDivElement | null>
}

export function Hero(props: Props) {
    const [showElements, setShowElements] = useState(false)

    useEffect(() => {
        setTimeout(() => setShowElements(true), 0)
    }, [])

    return (
        <div className={'flex relative'}>
            <div className={'flex flex-col justify-between w-full lg:w-1/2'}>
                <div className="flex flex-col p-8 md:p-32 lg:w-full">
                    <TopNav {...props} />
                    <div className="text-left">
                        <SectionIcon
                            fromColor={'from-green-400'}
                            toColor={'to-cyan-500'}
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 fade-down`}
                        >
                            <SunriseIcon />
                        </SectionIcon>
                        <span
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 fade-down text-green-400 font-extrabold mt-4 lg:mt-12`}
                        >
                            WELCOME
                        </span>
                        <h1
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 text-5xl font-extrabold mt-4 fade-left`}
                        >
                            Amy Menke
                        </h1>
                        <h2
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 text-2xl font-semibold mt-2 fade-left`}
                        >
                            Licensed Mental Health Counselor & Life Coach
                        </h2>
                        <p
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 fade-up leading-normal text-lg text-gray-500 mt-6 md:mt-12 md:text-xl lg:mx-0`}
                        >
                            Choose a happier, healthier you. Reach out to book an appointment today. I offer a free
                            introductory phone call so that you can decide if we???re the right fit.
                        </p>
                        <p
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 fade-up leading-normal text-lg text-gray-500 mt-4 mb-12 md:text-xl lg:mx-0`}
                        >
                            Not currently accepting insurance.
                        </p>
                        <div
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 fade-up lg:justify-start`}
                        >
                            <div>
                                <a
                                    target={'__blank'}
                                    href="mailto:amy.menke@gmail.com?subject=Counseling%20Inquiry&body=Hey%20Amy%2C%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20counseling.%20Do%20you%20have%20an%20appointment%20available%3F"
                                    className="w-48 rounded-md flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Email Me
                                </a>
                            </div>
                        </div>
                        <div
                            className={`${
                                showElements ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-700 fade-up mt-4`}
                        >
                            <span className={'text-gray-700 hover:underline'}>
                                Call Me:{' '}
                                <a className={'font-underline'} href={'tel:17274033165'}>
                                    (727) 403-3165
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <a
                    href={'https://goo.gl/maps/nMZNowCThY6dJpcu5'}
                    target={'__blank'}
                    className={`${
                        showElements ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-700 fade-up pl-8 md:pl-32 hover:underline cursor-pointer pb-4`}
                >
                    <div>
                        <span
                            className={
                                'mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:my-12 md:text-xl lg:mx-0'
                            }
                        >
                            163 5th Ave NE
                        </span>
                    </div>
                    <div>
                        <span
                            className={
                                'mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:my-12 md:text-xl lg:mx-0'
                            }
                        >
                            St. Petersburg, FL, 33701
                        </span>
                    </div>
                </a>
            </div>
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 min-h-screen">
                <img
                    className="w-full object-cover sm:hidden md:hidden lg:block md:w-full md:h-full"
                    src="/couple_medium.jpg"
                    alt="Couple Spending Time Outside"
                    loading={'lazy'}
                />
            </div>
            <svg
                className="hidden lg:block absolute left-1/2 inset-y-0 h-full w-48 text-white min-h-screen"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <polygon points="0,0 50,0 0,100 0,50" />
            </svg>
        </div>
    )
}

function TopNav(props: Props) {
    function scrollTo(ref: React.RefObject<HTMLDivElement | null>) {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="relative md:absolute flex space-x-4 transform -translate-y-4 md:-translate-y-16 -translate-x-3">
            <a
                href={'/counseling'}
                className={'text-gray-400 hover:underline px-3 py-2 rounded-md text-sm font-medium'}
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo(props.counselingRef)
                    window.history.pushState(null, document.title, '/counseling')
                }}
            >
                Counseling
            </a>
            <a
                href={'#'}
                className={'text-gray-400 hover:underline px-3 py-2 rounded-md text-sm font-medium'}
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo(props.pricingRef)
                    window.history.pushState(null, document.title, '/pricing')
                }}
            >
                Pricing
            </a>
            <a
                href={'#'}
                className={'text-gray-400 hover:underline px-3 py-2 rounded-md text-sm font-medium'}
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo(props.formsRef)
                    window.history.pushState(null, document.title, '/forms')
                }}
            >
                Forms
            </a>
        </div>
    )
}
