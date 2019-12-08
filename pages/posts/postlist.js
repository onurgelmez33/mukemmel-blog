import React from "react";
import fetch from "isomorphic-unfetch";
import Page from '../../layouts/main'
import { server } from '../../config';
const Home = ({ posts }) => (
    <Page>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">Yazılar</div>
                    <div class="card-body" style={{ padding: 0 }}>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                        <thead>
                                            <tr>
                                                <th>Tarih</th>
                                                <th>Başlık</th>
                                                <th>Kısa Yazı</th>
                                                <th>Oluşturan Kullanıcı</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {posts.map(post => (
                                                <tr id={"post_" + post._id}>
                                                    <td>{post.date}</td>
                                                    <td>{post.title}</td>
                                                    <td>{post.short}</td>
                                                    <td>{post.user}</td>
                                                    <td>
                                                        <button value={post._id} class="btn btn-danger btnSil" style={{"margin-right": "10px"}}> <i class="zmdi zmdi-delete"></i></button>
                                                        <a value={post._id} class="btn btn-info" style={{color: "#fff"}}> <i class="zmdi zmdi-edit"></i></a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Page>
);

Home.getInitialProps = async ({ req }) => {
    const res = await fetch(`${server}/api/posts`);
    const json = await res.json();
    return { posts: json };
};

export default Home;
