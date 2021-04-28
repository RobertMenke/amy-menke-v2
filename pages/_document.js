import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Amy Menke · Licensed Mental Health Counselor</title>
                    <meta
                        name="Description"
                        content="Amy Menke is a Licensed Mental Health Counselor and Life Coach in Saint Petersburg, Florida offering phone and in-office appointments."
                    />
                    <meta
                        name="Keywords"
                        content="Counselor, Life Coach, Counseling Saint Petersburg, Counseling Tampa Bay, Counseling Pinellas County, Anxiety, Depression, Grief Counseling, Relationship Counseling, Marriage Counseling, Academic Coaching, Career Coaching, Anxiety Counseling, Licensed Mental Health Counselor, Therapy"
                    />
                    <meta name="robots" content="All" />
                    <meta name="revisit-after" content="1" />
                    <meta name="language" content="EN" />
                    <meta name="author" content="Robert Menke" />
                    <meta name="identifier-url" content="https://amymenke.com" />
                    <meta
                        name="abstract"
                        content="Amy Menke is a Licensed Mental Health Counselor and Life Coach in Saint Petersburg, Florida offering phone and in-office appointments."
                    />

                    <meta property="og:title" content="Amy Menke · Counselor" />
                    <meta
                        property="og:description"
                        content="Choose a happier, healthier you. Reach out to book an appointment today. Not currently accepting insurance. I offer a free introductory phone call so that you can decide if we’re the right fit."
                    />
                    <meta property="og:image" content="https://amymenke.com/couple_medium.jpg" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                </Head>
                <body className={'font-sans'}>
                    <Main />
                    <NextScript />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
                            ga('create', 'UA-74341353-1', 'auto');
                            ga('send', 'pageview');`
                        }}
                    ></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
