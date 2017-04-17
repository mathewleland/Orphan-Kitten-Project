import React from 'react';


class Found extends React.Component {
  render() {
    return (
      <div>
        <section id="two">
						<h1 className="major">Found a kitten?</h1>
            <h2 className="major">Before you even pick it up, follow these steps</h2>
						<p>
							If the kitten is not in any immediate danger, it is best to monitor it from afar.
              Female cats will often leave their kittens behind while they go searching for food, and it may be several hours before they return.
              Before weaning, a kitten's chances for survival are much stronger with their mom than with even the most capable fosters,
              so we recommend that you leave the kittens with their mother if that is a safe and viable option.
						</p>

            <h4 className="major">The mom never came back!</h4>

            <p>
              Leave a message at <a href="tel:5307529407"> (530) 752-9407</a> and we will attempt to find a foster home for the kitten. In the meantime, if the kitten is younger than about 4 weeks of age, then they can not actively regulate their body temperature, so it is very important to keep them warm. If they are not yet eating on their own, then it is very important to bottle feed them warm kitten replacement formula (not regular milk) every 2-4 hours depending on their age. Smaller kittens require more frequent feedings. It is also important to stimulate them to go to the bathroom by gently rubbing their rear ends with a warm, damp cloth after every feeding.
            </p>
					</section>

          <section id="three">
            <h2>Have a non-emergency question? Email us</h2>
            <div className="row">
              <div className="8u 12u$(small) contact">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div className="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div className="12u$"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                  </div>
                </form>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </div>
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

export default Found;
