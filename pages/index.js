import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import { server } from '../config';
import ReactMarkdown from "react-markdown";
import Page from '../layouts/main'
const Home = ({ posts }) => (
  <Page>
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
  </Page>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${server}/api/posts`);
  const json = await res.json();
  return { posts: json };
};

export default Home;
