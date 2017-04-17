import React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
  render() {
    return (
      <section id="two">
				<h1 className="major">#OrphanKittenProject</h1>

        <p> See what we have been up to </p>

				<div className="row" id="fbPhotos"></div>


				<ul className="actions">
					<li><a href="https://facebook.com/orphankittenproject" className="button">See all posts</a></li>
				</ul>
			</section>
    )
  }
}

export default Home;
