import React from "react";
import fetch from "isomorphic-unfetch";
import Page from '../../layouts/adminMain'
import { server } from '../../config';
import jsCookie from 'js-cookie';
const Home = () => (
    <Page>
        <div class="row">
            <div class="col-lg-12">
            </div>
        </div>
    </Page>
);

Home.componentDidMount = () => {
}

Home.getInitialProps = async ({ req }) => {
    return {};
};

export default Home;
