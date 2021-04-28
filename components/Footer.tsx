export function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 flex flex-col items-center">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a
                            className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                            href={'https://www.psychologytoday.com/us/therapists/amy-menke-saint-petersburg-fl/243537'}
                            target={'__blank'}
                        >
                            Psychology Today
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a
                            className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                            href={
                                'https://www.google.com/search?q=google+reviews+amy+menke&rlz=2C5CHFA_enUS0538US0539&oq=google+reviews+amy+menke&aqs=chrome..69i57j69i64.3338j0j4&sourceid=chrome&ie=UTF-8#lrd=0x88c2e69ca8dcec6b:0xb138fe6141f4c6ec,1,,,'
                            }
                            target={'__blank'}
                        >
                            Google Reviews
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a
                            target={'__blank'}
                            href="mailto:amy.menke@gmail.com?subject=Counseling%20Inquiry&body=Hey%20Amy%2C%0D%0A%0D%0AI'm%20interested%20in%20learning%20more%20about%20counseling.%20Do%20you%20have%20an%20appointment%20available%3F"
                            className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                        >
                            amy.menke@gmail.com
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a
                            className="text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                            href={'tel:17274033165'}
                        >
                            (727) 403-3165
                        </a>
                    </div>
                </nav>
                <div className="-mx-5 mt-4 flex flex-wrap justify-center" aria-label="Footer">
                    <span className="text-center text-gray-500 font-bold flex flex-col sm:flex-row">
                        <span>Amy Menke</span>
                        <span className={'hidden sm:inline'}>&nbsp;·&nbsp;</span>
                        <span> Licensed Mental Health Counselor</span>
                    </span>
                </div>
                <a
                    href={'https://goo.gl/maps/nMZNowCThY6dJpcu5'}
                    target={'__blank'}
                    className="mt-4 text-center text-base text-gray-500 font-medium hover:underline cursor-pointer"
                >
                    163 5th Ave NE, St. Petersburg, FL, 33701
                </a>
            </div>
        </footer>
    )
}
