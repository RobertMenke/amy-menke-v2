import { useEffect } from 'react'
import Home from './index'

export default function FormsPage() {
    useEffect(() => {
        setTimeout(() => {
            const element = document.querySelector('.js-forms-section')
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }, [])

    return <Home />
}
