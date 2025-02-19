import React from 'react'
import person1 from '../images/person_1.jpg';
import person2 from '../images/person_2.jpg';
import person3 from '../images/person_3.jpg';
import person4 from '../images/person_4.jpg';

const AboutUntree = () => {
  return (
    <div class="untree_co-section">
					<div class="container">

						<div class="row mb-5">
							<div class="col-lg-5 mx-auto text-center">
								<h2 class="section-title">Our Team</h2>
							</div>
						</div>

						<div class="row">

							
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src={person1} class="img-fluid mb-5"/>
								<h3 clas><a href="#"><span class="">Lawson</span> Arnold</a></h3>
					<span class="d-block position mb-4">CEO, Founder, Atty.</span>
					<p>Separated they live in.
					Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					<p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
							</div> 
							
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src={person2} class="img-fluid mb-5"/>

								<h3 clas><a href="#"><span class="">Jeremy</span> Walker</a></h3>
					<span class="d-block position mb-4">CEO, Founder, Atty.</span>
					<p>Separated they live in.
					Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					<p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

							</div> 
						

							
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src={person3} class="img-fluid mb-5"/>
								<h3 clas><a href="#"><span class="">Patrik</span> White</a></h3>
					<span class="d-block position mb-4">CEO, Founder, Atty.</span>
					<p>Separated they live in.
					Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					<p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
							</div> 
						

						
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src={person4} class="img-fluid mb-5"/>

								<h3 clas><a href="#"><span class="">Kathryn</span> Ryan</a></h3>
					<span class="d-block position mb-4">CEO, Founder, Atty.</span>
					<p>Separated they live in.
					Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					<p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

				
							</div> 
							

							

						</div>
					</div>
				</div>
  )
}

export default AboutUntree