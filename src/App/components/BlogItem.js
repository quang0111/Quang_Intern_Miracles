import React from 'react';
import Blog1 from "../../assets/images/123123.png";

const BlogItem = (props) => {
 return (
  
  <div className="blog-show_item">
    <img src={Blog1}></img>
    <h2>Review Son Kem Bourjois Velvet</h2>
    <p>Review Son Kem Bourjois Velvet Review Son Kem Bourjois Velvet Review Son Kem Bourjois Velvet
    Review Son Kem Bourjois VelvetReview Son Kem Bourjois VelvetReview Son Kem Bourjois Velvet
    Review Son Kem Bourjois VelvetReview Son Kem Bourjois Velvet.
    </p>
   <a class="item__author" href="#">Bởi NamTran ( 27 / 05 / 2015 )</a>
   <div className="details">
    <a class="item__author" href="#">Đọc thêm</a>
    <a class="item__author" href="#">23 Bình luận</a>
   </div>
  </div>
 );
}

export default BlogItem;