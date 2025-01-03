import React from 'react'
import post1 from '../images/post-1.png';
import post2 from '../images/post-2.png';
import post3 from '../images/post-3.png';
import post4 from '../images/post-4.png';
import post5 from '../images/post-5.png';
import post6 from '../images/post-6.png';
import post7 from '../images/post-7.png';
import post8 from '../images/post-8.png';




const BlogSection = () => {
  return (
    <div class="blog-section">
			<div class="container">
				
				<div class="row">

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post1} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Classic Cotton Crew Tee</a></h3>
								<div class="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post2} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Urban Edge Graphic Tee</a></h3>
								<div class="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post3} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Everyday Polo Shirt</a></h3>
								<div class="meta">/
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post4} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Luxe Linen Button-Up</a></h3>
								<div class="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post5} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Performance Stretch Shirt</a></h3>
								<div class="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post6} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Vintage Stripe Long Sleeve</a></h3>
								<div class="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post7} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Minimalist Oversized Tee</a></h3>
								<div class="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post3} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Rugged Outdoor Flannel</a></h3>
								<div class="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 mb-5">
						<div class="post-entry">
							<a href="#" class="post-thumbnail"><img src={post8} alt="Image" class="img-fluid"/></a>
							<div class="post-content-entry">
								<h3><a href="#">Premium Satin Evening Shirt</a></h3>
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

export default BlogSection