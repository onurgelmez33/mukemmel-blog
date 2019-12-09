import Head from 'next/head'
import Meta from '../components/meta'
import "../public/assets/css/demo.css"
import "../public/assets/css/search.css"
import "../public/assets/css/normalize.css"
import "../public/assets/css/component.css"
import "../public/assets/css/pattern.css"
import "../public/assets/css/card.css"
export default ({ children }) => (
    <main class="main-wrap">
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|VT323" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="/assets/fonts/font-awesome-4.3.0/css/font-awesome.min.css" />
            <script src="/assets/js/app.js"></script>
            <script src="/assets/js/modernizr.custom.js"></script>
        </Head>
        <Meta />
        <div class="content">
            {children}
        </div>
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossOrigin="anonymous"></script>
        <script src="/assets/js/vendors/trianglify.min.js"></script>
        <script src="/assets/js/vendors/TweenMax.min.js"></script>
        <script src="/assets/js/vendors/ScrollToPlugin.min.js"></script>
        <script src="/assets/js/Card-polygon.js"></script>
        <script src="/assets/js/blog-card.js"></script>
    </main>
)