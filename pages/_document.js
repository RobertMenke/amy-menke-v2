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
                </Head>
                <body>
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
