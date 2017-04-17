import React from 'react';
import { render } from 'react-dom';

class About extends React.Component {
  render() {
    return (
      <div>

        <section id="two">
						<h1 className="major">Who we are</h1>
						<p>
              OKP is a 501(c)3 non-profit.
          	</p>

					</section>

          <section>

            <div className="box alt ">
              <div className="row 50% uniform">
                <div className="4u profilePic">
									<span className="image fit ">
										<img src="https://s3-us-west-1.amazonaws.com/orphankittenproject/kmvernau.jpeg" alt="" />
									</span>
									Karen Vernau <br /> Faculty Advisor
								</div>
                <div className="4u profilePic"><span className="image fit "><img src="https://s3-us-west-1.amazonaws.com/orphankittenproject/alexa.jpg" alt="" /></span>Alexa Danner <br /> Sr Head Coordinator</div>
                <div className="4u$ profilePic"><span className="image fit "><img src="https://s3-us-west-1.amazonaws.com/orphankittenproject/haylee.jpg" alt="" /></span>Haylee Arimoto <br /> Sr Head Coordinator </div>
                <div className="4u profilePic"><span className="image fit "><img src="images/thumbs/04.jpg" alt="" /></span>Sara Cobos <br /> Sr Head Coordinator</div>
                <div className="4u profilePic"><span className="image fit "><img src="https://s3-us-west-1.amazonaws.com/orphankittenproject/krista.jpg" alt="" /></span>Krista Boyles <br /> Fundraising Coordinator</div>
                <div className="4u$ profilePic"><span className="image fit "><img src="images/thumbs/06.jpg" alt="" /></span>Lauren Vaughan <br /> Social Media Coordinator</div>
                <div className="4u profilePic"><span className="image fit "><img src="images/thumbs/03.jpg" alt="" /></span>Taylor Slabaugh <br /> Adoptions Coordinator</div>
                <div className="4u profilePic"><span className="image fit "><img src="https://s3-us-west-1.amazonaws.com/orphankittenproject/cole.jpg" alt="" /></span>Cole Gevurtz <br /> Treasurer</div>
                <div className="4u$ profilePic"><span className="image fit "><img src="images/thumbs/01.jpg" alt="" /></span> Name <br /> position</div>
              </div>
            </div>
          </section>

      </div>
    )
  }
}

export default About;
