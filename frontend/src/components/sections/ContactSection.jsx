// frontend/src/components/sections/ContactSection.jsx
import Section from '../ui/Section.jsx';

const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <p className="section-eyebrow">Contact us</p>
          <h2 className="section-title section-title--handwritten">
            GET IN TOUCH.
          </h2>
          <p className="section-lead">
            We&apos;d love to hear from you! Whether you&apos;re a parent,
            educator, or partner, let&apos;s build the future of playful
            learning together.
          </p>

          <p className="contact-follow">Follow us on</p>
          <div className="header-social">
            <button type="button" className="social-icon social-icon--fb">
              F
            </button>
            <button type="button" className="social-icon social-icon--ig">
              IG
            </button>
            <button type="button" className="social-icon social-icon--in">
              in
            </button>
            <button type="button" className="social-icon social-icon--yt">
              ▶
            </button>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group-vertical">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className="form-group-vertical">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className="form-group-vertical">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" />
          </div>
          <button type="submit" className="btn btn-primary contact-submit">
            Send
          </button>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
