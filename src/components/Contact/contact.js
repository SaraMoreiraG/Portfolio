import "./contact.css";

function Contact() {
  return (
    <div class="row" id="contact">
      <div className="d-flex align-items-center col-4">
        <div className="green-circle">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div>
          <h3>Address</h3>
          <p>C/ Jose Antonio Armona</p>
          <p>28012, Madrid</p>
        </div>
      </div>
      <div className="d-flex align-items-center col-4">
        <div className="green-circle">
          <i class="fa-solid fa-phone-volume"></i>
        </div>
        <div>
          <h3>Let's talk</h3>
          <p>+34 699 37 54 12</p>
          <p>saramordev@gmail.com</p>
        </div>
      </div>
      <div className="d-flex align-items-center col-4">
        <div className="green-circle">
          <i class="fa-solid fa-hashtag"></i>
        </div>
        <div className="social-media">
          <h3>Social media</h3>
          <p><a href="www.linkedin.com/in/sara-moreira-g"><i class="fa-brands fa-linkedin"></i>Sara Moreira García</a></p>
          <p><a href="https://github.com/SaraMoreiraG"><i class="fa-brands fa-github"></i>SaraMoreiraG</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;