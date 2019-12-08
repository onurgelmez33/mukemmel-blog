import React from "react";
import fetch from "isomorphic-unfetch";
import Page from '../../layouts/main'
const Home = ({ posts }) => (
  <Page>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Yazı Oluştur</div>
          <div class="card-body">
          </div>
        </div>
      </div>
    </div>
  </Page>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("https://mukemmelblog1.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json };
};

export default Home;