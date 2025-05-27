const OfferCard = ({ title, image, icon, description }) => {
  return (
    <div
      className="offer-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card-overlay">
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default OfferCard;
