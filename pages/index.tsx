import Head from 'next/head'
import React from 'react'
import { Counseling } from '../components/Counseling'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { IntakeForms } from '../components/IntakeForms'
import { Pricing } from '../components/Pricing'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Section>
                <Hero />
            </Section>
            <Section className={ 'relative bg-gray-50' }>
                <Counseling />
            </Section>
            <Section className={ 'bg-royal-blue' }>
                <Pricing />
            </Section>
            <Section className={ 'relative' }>
                <IntakeForms />
            </Section>
            <Footer />
        </>
    )
}

interface SectionProps {
    children : React.ReactNode
    className? : string
}

function Section(props : SectionProps) {
    return (
        <section className={ `w-full flex flex-col min-h-screen ${ props.className || '' }` }>
            { props.children }
        </section>
    )
}
