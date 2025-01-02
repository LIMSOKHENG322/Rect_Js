import React from 'react'
import post1 from '../images/post-1.jpg';
import post2 from '../images/post-2.jpg';
import post3 from '../images/post-3.jpg';
const HomeBlog = () => {
  return (
    <div class="blog-section">
               <div class="container">
                  <div class="row mb-5">
                     <div class="col-md-6">
                        <h2 class="section-title">Recent Blog</h2>
                     </div>
                     <div class="col-md-6 text-start text-md-end">
                        <a href="#" class="more">View All Posts</a>
                     </div>
                  </div>

                  <div class="row">

                     <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div class="post-entry">
                           <a href="#" class="post-thumbnail"><img src={post1} alt="Image" class="img-fluid"/></a>
                           <div class="post-content-entry">
                              <h3><a href="#">First Time Home Owner Ideas</a></h3>
                              <div class="meta">
                                 <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div class="post-entry">
                           <a href="#" class="post-thumbnail"><img src={post2} alt="Image" class="img-fluid"/></a>
                           <div class="post-content-entry">
                              <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                              <div class="meta">
                                 <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                        <div class="post-entry">
                           <a href="#" class="post-thumbnail"><img src={post3} alt="Image" class="img-fluid"/></a>
                           <div class="post-content-entry">
                              <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                              <div class="meta">
                                 <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
  )
}

export default HomeBlog