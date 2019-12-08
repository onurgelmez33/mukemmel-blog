import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import "../public/assets/css/demo.css"
import "../public/assets/css/search.css"
import "../public/assets/css/normalize.css"
import "../public/assets/css/component.css"
import "../public/assets/css/pattern.css"
import "../public/assets/css/card.css"
const Home = ({ posts }) => (
  <main class="main-wrap">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|VT323" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="/assets/fonts/font-awesome-4.3.0/css/font-awesome.min.css" />
      <script src="/assets/js/app.js"></script>
      <script src="/assets/js/modernizr.custom.js"></script>
    </Head>

    <div class="content">
      <div class="pattern pattern--hidden"></div>
      <div class="wrapper">
        {posts.map(post => (
          <div class="card">
            <div class="card__container card__container--closed">
              <svg class="card__image" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 500" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <clipPath id={"clipPath" + post._id}>
                    <polygon class="clip" points="0,500 0,0 1920,0 1920,500"></polygon>
                  </clipPath>
                </defs>
                <image clipPath={"url(#clipPath" + post._id + ")"} width="1920" height="500" href={post.image}></image>
              </svg>
              <div class="card__content">
                <i class="card__btn-close fa fa-times"></i>
                <div class="card__caption">
                  <h2 class="card__title">{post.title}</h2>
                  <p class="card__subtitle">{post.short}</p>
                </div>
                <div class="card__copy">
                  <div class="meta">
                    <span class="meta__author">{post.user}</span>
                    <span class="meta__date">{post.date}</span>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.details }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json };
};

export default Home;
