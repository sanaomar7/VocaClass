import "../../styles/testimonials.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
  <div className="container">
    <div className="testimonials-wrapper">

      {/* LEFT */}
      <div className="testimonials-left">
        <p className="section-eyebrow">Testimonial</p>
        <h2 className="section-title">CUSTOMERS FEEDBACK.</h2>
        <p className="section-lead">
          See what parents and educators say about Kideo's apps and how
          they inspire children every day.
        </p>
      </div>

      {/* RIGHT */}
      <div className="testimonials-right">
        {[
          {
            text: 'Kideo apps make my classroom feel more alive — kids love it.',
            author: 'Esraa Mreh',
          },
          {
            text: 'Parents keep telling us kids ask to “learn with Kideo” at home.',
            author: 'Mahran Diab',
          },
          {
            text: 'The mix of fun and structure is exactly what we need.',
            author: 'Wafaa Kinana',
          }
        ].map((t, i) => (
          <figure key={i} className={`testimonial-bubble bubble-${i+1}`}>
            <blockquote>{t.text}</blockquote>
            <figcaption>— {t.author}</figcaption>
            <span className="bubble-quote">”</span>
          </figure>
        ))}
      </div>

    </div>
  </div>
</section>


  );
};

export default TestimonialsSection;
