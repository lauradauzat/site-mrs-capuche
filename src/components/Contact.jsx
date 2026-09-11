/**
 * 11/09/2026 — LD : calendrier Google Appointment intégré (iframe) + bouton de secours.
 * Le bandeau promo Google en bas de l’iframe est masqué via .booking-embed (overflow).
 */
const BOOKING_URL = "https://calendar.app.google/ScBQb2NhXWErhdXi9";
const BOOKING_EMBED =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3MpmrOlDJmyR6KFe2HtbZXbkcr5c1ssUfU5bHi7TOTAPvYlurbdp3Or0QqC6HBVtfYuRV-Be-R?gv=true";

function Contact() {
  return (
    <section className="section contact-area" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Contact</h2>
          </div>
          <div className="col-lg-10 mx-auto text-center">
            <p className="paragraph-md text-dark mb-4">
              Premier échange offert. On cadre le besoin, puis je vous envoie un devis.
              Visio Google Meet, ou présentiel à Albi.
            </p>
            <p className="mb-4">
              <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Réserver un créneau
              </a>
            </p>
            <div className="booking-embed">
              <iframe
                title="Réserver un créneau Google Meet"
                src={BOOKING_EMBED}
                width="100%"
                height="880"
                frameBorder="0"
              ></iframe>
            </div>
            <p className="mb-2 mt-4">
              <a href="tel:+33676037911">06 76 03 79 11</a>
            </p>
            <p className="mb-0">
              <a href="mailto:mrs.capuche@gmail.com">mrs.capuche@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
