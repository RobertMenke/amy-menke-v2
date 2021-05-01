import { useEffect } from 'react'
import Home from './index'

export default function PricingPage() {
    useEffect(() => {
        setTimeout(() => {
            const element = document.querySelector('.js-pricing-section')
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }, [])

    return <Home />
}
