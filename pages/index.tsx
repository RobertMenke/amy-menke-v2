import React from 'react'
import { Counseling } from '../components/Counseling'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { IntakeForms } from '../components/IntakeForms'
import { Pricing } from '../components/Pricing'

export default function Home() {
    const counselingRef = React.createRef<HTMLDivElement>()
    const pricingRef = React.createRef<HTMLDivElement>()
    const formsRef = React.createRef<HTMLDivElement>()

    return (
        <>
            <Section>
                <Hero counselingRef={counselingRef} pricingRef={pricingRef} formsRef={formsRef} />
            </Section>
            <Section className={'relative bg-gray-50'}>
                <Counseling ref={counselingRef} />
            </Section>
            <Section className={'bg-royal-blue'}>
                <Pricing ref={pricingRef} />
            </Section>
            <Section className={'relative'}>
                <IntakeForms ref={formsRef} />
            </Section>
            <Footer />
        </>
    )
}

interface SectionProps {
    children: React.ReactNode
    className?: string
}

function Section(props: SectionProps) {
    return <section className={`w-full flex flex-col min-h-screen ${props.className || ''}`}>{props.children}</section>
}
