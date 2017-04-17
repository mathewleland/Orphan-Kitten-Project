import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
				<div className="inner">
					<a href="/" className="image avatar"><img src="https://s3-us-west-1.amazonaws.com/personalprojectfiles/okp_logo.png" alt="OKP logo" /></a>
					<h1><strong>Orphan Kitten Project</strong>, or OKP,<br />
					is a rescue organization run by the <br />
					veterinary students of UC-Davis.</h1>
				</div>
			</header>
    )
  }
}

export default Header;
