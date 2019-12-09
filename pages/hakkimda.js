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
        <div class="wrapper" style={{ "padding": "4.5%" }}>
            <h2>Hakkımda</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue arcu enim, a laoreet ipsum maximus non. Phasellus sed dolor dapibus orci sollicitudin molestie. Pellentesque suscipit, orci in ultricies sollicitudin, turpis magna dictum urna, eget porttitor augue ligula ut massa. Vivamus lacus quam, pretium ac nisl eu, finibus sollicitudin purus. Sed at orci vitae purus aliquet placerat et varius dui. Donec cursus, dolor vel varius ullamcorper, ligula elit porttitor dolor, at commodo ante sapien vitae ligula. Suspendisse a risus sit amet massa consectetur interdum eget imperdiet elit. Cras vehicula ut velit sit amet laoreet.</p>
            <p>Etiam in accumsan arcu. Fusce pulvinar et diam vel scelerisque. Duis semper at urna id tempus. Fusce aliquet elit id nisl accumsan rhoncus. Nunc non lectus a ante pretium laoreet quis sed est. Vivamus laoreet ut ante ut luctus. Duis consectetur maximus egestas. Nullam quis eleifend magna, non ornare felis. Vestibulum eget leo eu dui tristique malesuada. Pellentesque ut turpis quis lacus lobortis aliquam. Pellentesque scelerisque eget mi non ornare. Donec porta dapibus sollicitudin.</p>
            <p>Mauris molestie eu est et placerat. Sed pharetra egestas quam, semper varius enim dignissim sit amet. Maecenas est arcu, semper nec maximus quis, mollis quis libero. Vestibulum lacus ipsum, aliquam at magna et, fermentum ultricies ipsum. Sed at velit justo. Morbi aliquam mattis efficitur. Praesent ornare neque lectus, nec semper nunc rhoncus nec. Quisque a justo sed sem convallis vulputate. Quisque molestie sapien ut justo pellentesque viverra. Sed accumsan tempor justo sed pulvinar. Maecenas suscipit lacus nibh, vel ultrices libero vehicula quis.</p>
            <p>Cras venenatis dictum urna vitae congue. Suspendisse nec mi est. In bibendum sodales leo, eget euismod tellus consequat eget. Suspendisse potenti. Morbi diam orci, ultricies molestie tincidunt ut, mollis vitae nisi. Suspendisse potenti. Aenean quis erat massa. Cras gravida, neque nec hendrerit faucibus, justo ligula dapibus augue, pellentesque malesuada libero arcu at elit. Mauris blandit neque in est laoreet, ut varius ligula bibendum. Aliquam sit amet pellentesque lectus.</p>
            <p>Donec dapibus quam nec lorem fermentum, at interdum dolor posuere. Donec leo mauris, cursus ac eleifend ac, tempor ac orci. Etiam ornare imperdiet ex eu vulputate. Proin consequat lacus non ante luctus, vitae lobortis nunc lacinia. Cras ultrices interdum diam eu vestibulum. Vivamus vulputate semper mi, in feugiat lorem eleifend non. Proin consectetur sed augue sit amet tincidunt. Cras lacinia scelerisque enim ac mollis. Curabitur pharetra, urna id vulputate finibus, elit tellus interdum sapien, et consequat massa orci feugiat metus. Nunc in diam aliquet lorem viverra sollicitudin eu ac ipsum. Aenean iaculis laoreet metus euismod dignissim.</p>
        </div>
    </Page >
);

export default Home;
