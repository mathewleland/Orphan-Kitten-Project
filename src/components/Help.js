import React from 'react';
import { render } from 'react-dom';

class Help extends React.Component {
  render() {
    return (
      <div>

        <section id="two">
						<h1 className="major">How to Help OKP</h1>
            <a href="https://www.amazon.com/gp/registry/wishlist/62TVTFXW3QAM/"><h2 className="major">Buy supplies</h2></a>
						<a href="https://www.amazon.com/gp/registry/wishlist/62TVTFXW3QAM/" className="button"> <i className="fa fa-amazon" aria-hidden="true"></i>  OKP WishList</a>


						<p>
							We supply our fosters with everything they need, free of charge.  This is possible because of so many generous gifts and donations to OKP.
              If you are interested in buying a scale to weigh kittens or some KMR powder to feed them, check out our Amazon Wishlist for what we currently need!
						</p>

					</section>

          <section id="three">
            <h2>Become a foster</h2>
            <p>
              To become a foster, just send us a message here and we will be able to add you to our foster mailing list
            </p>
            <div className="row">
              <div className="8u 12u$(small) contact">
                <form method="post" action="https://formspree.io/mathewhleland@gmail.com">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" required/></div>
                    <div className="6u$ 12u$(xsmall)"><input type="email" name="_replyto" id="email" placeholder="Email" required/></div>
                    <div className="12u$"><textarea name="message" id="message"  rows="2">Please add me to the mailing list to become a foster for OKP</textarea></div>
                  </div>
									<ul className="actions">
	                  <li><input type="submit" value="Send Message" /></li>
	                </ul>
                </form>
              </div>

							<div id="form-messages"></div>

              <div className="4u$ 12u$(small)">
                <ul className="labeled-icons">

                  <li>
                    <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                    <a href="tel:5307529407">(530) 752-9407</a>
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                    <a href="mailto:orphankittenproject@gmail.com">orphankittenproject@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>



      </div>
    )
  }
}

export default Help;
