import React, { ForwardedRef } from 'react'
import { DownloadIcon, NewspaperIcon, SectionIcon } from './SectionIcon'

export const IntakeForms = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
    <>
        <div className={'royal-to-dark-gradient pb-64 js-forms-section'} ref={ref}>
            <div className={'relative'}>
                <div className={'mt-32 mx-8 lg:mx-32 mb-4'}>
                    <SectionIcon fromColor={'from-orange-400'} toColor={'to-pink-600'}>
                        <NewspaperIcon />
                    </SectionIcon>
                    <h4 className={`text-orange-400 font-extrabold mt-4 lg:mt-12`}>INTAKE FORMS</h4>
                    <h1 className={`text-center mt-24 text-orange-400 text-3xl lg:text-5xl font-extrabold mt-8`}>
                        Download Intake Forms
                    </h1>
                    <h3 className={`text-center text-lg lg:text-2xl font-bold mt-4`} style={{ color: '#EA996C' }}>
                        To save time, forms may be completed and brought with you to your first appointment
                    </h3>
                </div>
                <div className="custom-shape-divider-bottom-1619368022">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div className={'mt-2 flex flex-col lg:flex-row w-full justify-center items-center z-10 -mt-16'}>
            <DownloadForm
                title={'Counseling'}
                description={'Standard counseling intake forms'}
                link={'/Counseling Intake.docx'}
            />
            <DownloadForm
                title={'Counseling for Minors'}
                description={'For any individual less than 18 years old'}
                link={'/Counseling Intake for Minors.docx'}
                className={'mx-16'}
            />
            <DownloadForm
                title={'Walk & Talk'}
                description={'Have a walk & talk appointment? Start here.'}
                link={'/Walk & Talk One Step at the Time.docx'}
            />
        </div>
    </>
))

interface DownloadFormProps {
    title: string
    description: string
    link: string
    className?: string
}

function DownloadForm(props: DownloadFormProps) {
    return (
        <a
            target={'__blank'}
            href={props.link}
            className={`dl-form w-11/12 m-4 lg:w-80 h-40 lg:h-64 p-4 rounded-md border border-pink-600 flex flex-row lg:flex-col justify-between cursor-point hover:bg-pink-600 text-pink-600 hover:text-white ${
                props.className || ''
            }`}
        >
            <div className={'flex flex-col justify-center'}>
                <div>
                    <span className={'text-xl font-bold'}>{props.title}</span>
                </div>
                <div>
                    <span className={'text-base font-medium'}>{props.description}</span>
                </div>
            </div>
            <div className={'flex justify-end w-full'}>
                <div className={'flex items-center lg:items-end'}>
                    <span className={'hidden lg:block mr-4 text-base font-medium transform translate-y-1'}>
                        Download
                    </span>
                    <DownloadIcon />
                </div>
            </div>
        </a>
    )
}
