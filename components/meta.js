import { server } from '../config';
import React from 'react'
export default class Meta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: null
        };
    }
    /*fetchPages() {
        var uri = `${server}/api/pages`;
        fetch(uri).then(response => {
            response.json().then(json => {
                this.setState({ pages: json });
            });
        });
    }
    componentDidMount() {
        console.log("Fetch Started!");
        this.fetchPages();
    }*/
    render() {
        return (
            <header class="header">
                <nav class="menu-links">
                    <a class="active" href="/">Ana Sayfa</a>
                    <a href="/hakkimda">Hakkımda</a>
                </nav>
            </header>
        );
    }
}