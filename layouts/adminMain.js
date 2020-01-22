import Head from 'next/head'
export default ({ children }) => (
    <div class="page-wrapper">
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                <a href="#">
                    <img src="/admin/images/icon/logo.png" alt="Cool Admin" />
                </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li class="has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-tachometer-alt"></i>Ana Sayfa</a>
                        </li>
                        <li>
                            <a href="/postlist">
                                <i class="fas fa-rss-square"></i>Blog Gönderileri</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <div class="page-container">
            <Head>
                <title>Home</title>
                <link href="/admin/css/font-face.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/animsition/animsition.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/wow/animate.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/slick/slick.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/select2/select2.min.css" rel="stylesheet" media="all" />
                <link href="/admin/vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all" />
                <link href="/admin/css/theme.css" rel="stylesheet" media="all" />
            </Head>
            <header class="header-desktop">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="header-wrap">
                            <div class="form-header">
                            </div>
                            <div class="header-button">
                                <div class="account-wrap">
                                    <div class="account-item clearfix js-item-menu">
                                        <div class="content">
                                            <a class="js-acc-btn" href="#">Çıkış Yap</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
            <script src="/admin/vendor/jquery-3.2.1.min.js"></script>
            <script src="/admin/vendor/bootstrap-4.1/popper.min.js"></script>
            <script src="/admin/vendor/bootstrap-4.1/bootstrap.min.js"></script>
            <script src="/admin/vendor/slick/slick.min.js"></script>
            <script src="/admin/vendor/wow/wow.min.js"></script>
            <script src="/admin/vendor/animsition/animsition.min.js"></script>
            <script src="/admin/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
            <script src="/admin/vendor/counter-up/jquery.waypoints.min.js"></script>
            <script src="/admin/vendor/counter-up/jquery.counterup.min.js"></script>
            <script src="/admin/vendor/circle-progress/circle-progress.min.js"></script>
            <script src="/admin/vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
            <script src="/admin/vendor/chartjs/Chart.bundle.min.js"></script>
            <script src="/admin/vendor/select2/select2.min.js"></script>
            <script src="/admin/js/main.js"></script>
            <script src="/admin/js/postlist.js"></script>
        </div>
    </div>
)