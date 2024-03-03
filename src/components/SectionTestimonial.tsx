import "../App.css";
import Rectangle21 from "../assets/Rectangle21.png";

export default function SectionTestimonial() {
  return (
    <div className="section-testimonial">
      <h1 className="apos">"</h1>
      <img src={Rectangle21} alt="Rectangle21" />
      <div className="testimonial-des">
        <p className="testimonial-description">
          “The results have been incredible. With Power Digital, it feels like
          they’re in our trench, supporting and understanding us. They’re like a
          partner and mentor in helping us get where we want to be.”
        </p>

        <p className="testimonial-person">
          David Calathan - Director of Design Operations, New York
        </p>
      </div>
    </div>
  );
}
