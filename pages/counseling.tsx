import { useEffect } from 'react'
import Home from './index'

export default function CounselingPage() {
    useEffect(() => {
        setTimeout(() => {
            const element = document.querySelector('.js-counseling-section')
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }, [])

    return <Home />
}
