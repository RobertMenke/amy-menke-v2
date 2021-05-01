import React, { ForwardedRef } from 'react'
import { ReceiptIcon, SectionIcon } from './SectionIcon'

export const Pricing = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
    <div className={'mt-32 mx-8 md:mx-32 mb-4 relative js-pricing-section'} ref={ref}>
        <SectionIcon fromColor={'bg-white'} toColor={'bg-white'}>
            <ReceiptIcon />
        </SectionIcon>
        <h4 className={`text-white font-extrabold mt-4 lg:mt-12`}>PRICING</h4>
        <h1 className={`text-center text-white text-3xl lg:text-5xl font-extrabold mt-12`}>Fair, simple pricing</h1>
        <h3 className={`text-center text-lg lg:text-2xl font-bold mt-2 lg:mt-4`} style={{ color: '#D1D5DB' }}>
            Appointments available in-office, by phone, or via telehealth (video conferencing)
        </h3>
        <div className={'flex flex-col lg:flex-row items-start lg:items-end w-full justify-center mt-16'}>
            <PricingBall title={'Walk & Talk'} rate={'100'} duration={'hour'} className={'circle-medium'} />
            <PricingBall title={'Individual'} rate={'100'} duration={'hour'} className={'circle-large lg:mx-20'} />
            <PricingBall title={'Couples'} rate={'130'} duration={'90 mins'} className={'circle-medium'} />
        </div>
    </div>
))

interface PricingProps {
    title: string
    rate: string
    duration: string
    className?: string
}

function PricingBall(props: PricingProps) {
    return (
        <div className={`flex flex-col justify-center items-center bg-white ${props.className || ''}`}>
            <h3 className="text-center text-3xl font-medium text-gray-900" id="tier-hobby">
                {props.title}
            </h3>
            <div className="flex items-center justify-center">
                <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                    <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                    <span className="font-extrabold">{props.rate}</span>
                </span>
                <span className="text-xl font-medium text-gray-500">/{props.duration}</span>
            </div>
        </div>
    )
}
