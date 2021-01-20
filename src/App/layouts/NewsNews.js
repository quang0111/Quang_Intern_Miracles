import React from 'react';


import BlogItem from '../components/BlogItem';
import ControlBar from '../components/ControlBar';

const NewsNews = (props) => {
 return (
  <div className="section-news">

    <div className="container">
      <div className="path">
        <a className="path__name" href="#home">Home</a>
        <a className="path__name" href="#blog">Blog</a>
      </div>

     <section className="section-news__wrap">
      <h1>BLOG</h1>
      <ControlBar />
     </section>

     <div className="blog-show">
      <BlogItem />
      <BlogItem />  
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
     </div>
     <ControlBar />
    </div>
    
   </div>
   

 );
}

export default NewsNews;