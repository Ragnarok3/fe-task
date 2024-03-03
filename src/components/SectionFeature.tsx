import "../App.css";
import customerlogos from "../assets/customer-logos.png";

export default function SectionFeature() {
  return (
    <div className="section-feature">
      <p className="feature-para">Powering next-gen companies</p>
      <img src={customerlogos} alt="customerlogos" />
    </div>
  );
}
