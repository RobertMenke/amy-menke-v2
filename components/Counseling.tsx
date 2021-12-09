import React, { ForwardedRef } from 'react'
import { ChevronDownIcon, FavouriteIcon, SectionIcon } from './SectionIcon'
import amyAvatar from '../public/amy-menke-avatar.png'
import Image from 'next/image'

export const Counseling = React.forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
    <>
        <div className={'mt-32 mx-8 md:mx-32 pb-8 lg:pb-32 mb-4 relative js-counseling-section'} ref={ref}>
            <div className={'relative flex flex-col justify-start md:flex-row md:justify-between'}>
                <div>
                    <SectionIcon fromColor={'from-fuchsia-500'} toColor={'to-purple-600'} removeBottomMargin={true}>
                        <FavouriteIcon />
                    </SectionIcon>
                    <h4 className={`text-fuchsia-500 font-extrabold mt-4 lg:mt-12`}>COUNSELING</h4>
                </div>
                <div className={'pt-8 md:p-0 flex justify-center items-center'}>
                    <Image src={amyAvatar} width={140} height={140} alt={'Amy Menke'} />
                </div>
            </div>
            <h1 className={`text-3xl lg:text-5xl font-extrabold mt-12 lg:mt-20`}>My Counseling Philosophy</h1>
            <div className={'mt-8 lg:mt-12'}>
                <span className={'leading-relaxed text-xl'}>
                    From my experience in working with clients and couples through grief, trauma, illness and domestic
                    violence, I have seen the best and most difficult relationship scenarios. My areas of expertise
                    include helping couples to improve the quality of their partnership, helping individuals to heal
                    from difficult relationships, improve self-worth and motivation, and offering support to clients
                    through transitions in life that create anxiety and depression.
                </span>
            </div>
            <div className={'mt-6 lg:mt-8'}>
                <span className={'leading-relaxed text-xl'}>
                    I aim to partner with you to work on new skills that result in quick, sustainable changes in your
                    life. I begin by deeply listening to your narrative, then we will organize your resources and create
                    a plan to begin helping you make progress. Most of us don’t have time to spend years in therapy, so
                    I believe in creating ways for you to practice new skills outside of our sessions. My hope is that
                    you will begin to feel better quickly.
                </span>
            </div>
            <div className={'mt-8 lg:mt-12'}>
                <h2 className={`font-bold text-2xl lg:text-2xl`}>About Me</h2>
                <div className={'mt-6 lg:mt-8'}>
                    <span className={'leading-relaxed text-xl'}>
                        As a Licensed Mental Health Counselor and Life Coach since 2010, I have a Masters Degree in
                        Rehabilitation and Mental Health Counseling from USF. I received training at Suncoast Center,
                        Inc, a community mental health center, in the Children’s Outpatient Unit, The Life Center, a
                        grief and trauma counseling center, and Wellspring Oncology. I have been involved with Heels to
                        Heal, a domestic violence counseling provider, since 2017. I have had the privilege to work with
                        people in the most difficult situations, ranging from trauma, grief, illness, domestic violence,
                        anxiety and depression. I have been married since 1990, have 4 sons and have lived in St.
                        Petersburg, FL most of my life.
                    </span>
                </div>
            </div>
        </div>
        <div
            className={
                'relative mt-8 lg:mt-0 lg:absolute lg:left-2/4 lg:-translate-x-2/4 flex flex-col items-center justify-center'
            }
            style={{ bottom: '24px' }}
        >
            <h4 className={`text-royal-blue font-extrabold mt-12`}>PRICING</h4>
            <ChevronDownIcon className={'mt-2 animate-bounce'} />
        </div>
    </>
))
