import React from 'react'

interface Props {
    fromColor: string
    toColor: string
    className?: string
    children: React.ReactNode
    // hack
    removeBottomMargin?: boolean
}

export function SectionIcon(props: Props) {
    return (
        <div
            className={`w-16 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center ${props.fromColor} ${
                props.toColor
            } ${props.removeBottomMargin ? '' : 'mb-8'} ${props.className || ''}`}
        >
            {props.children}
        </div>
    )
}

export function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M22 14v7c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-7" />
            <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2.5}
                className={'dl-icon-path'}
                d="M22 14v7c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-7M12 2v15"
            />
            <path
                className={'dl-icon-path'}
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={2.5}
                d="M17 12l-5 5-5-5"
            />
        </svg>
    )
}

export function NewspaperIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={2.5}
                stroke="#fff"
                d="M20 22c-1.1 0-2-.9-2-2V9h4v11c0 1.1-.9 2-2 2z"
            />
            <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={2.5}
                stroke="#fff"
                d="M18 9V2H2v20h18c-1.1 0-2-.9-2-2V9z"
            />
            <path
                strokeLinejoin="round"
                strokeLinecap="square"
                strokeMiterlimit={10}
                strokeWidth={2.5}
                stroke="#fff"
                d="M5 19h10M12 9h3M12 6h3M5 16h10M5 13h10"
            />
            <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={2.5}
                stroke="#fff"
                d="M9 5H5v5h4V5z"
            />
        </svg>
    )
}

export function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={48} height={36} viewBox={'0 0 24 24'} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="#2B4BAF"
                d="M3.293 7.293a1 1 0 011.414 0L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    )
}

export function FavouriteIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle strokeLinejoin="round" strokeLinecap="round" stroke="#fff" r={10} cy={12} cx={12} />
            <path
                stroke="#fff"
                d="M15 8c-1.728 0-3 1.667-3 1.667S10.848 8 9 8c-1.74 0-3 1.19-3 2.857 0 1.667.6 2.699 2.4 4.365C9.6 16.333 12 18 12 18s2.4-1.667 3.6-2.778c1.8-1.666 2.4-2.698 2.4-4.365C18 9.19 16.74 8 15 8z"
            />
        </svg>
    )
}

export function ReceiptIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="#265F58"
                d="M20 22V2H4v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2z"
            />
            <path strokeLinejoin="round" stroke="#265F58" d="M7 16h10M7 12h5M7 6h5M14 6h3M14 9h3M14 12h3M7 9h5" />
        </svg>
    )
}

export function SunriseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={48} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit={10}
                stroke="#fff"
                d="M12 9V4M6.3 10.3L4.9 8.9M20 16h2M2 16h2M17.7 10.3l1.4-1.4M2 20h20M14 6l-2-2-2 2M12 20a4 4 0 100-8 4 4 0 000 8z"
            />
        </svg>
    )
}
