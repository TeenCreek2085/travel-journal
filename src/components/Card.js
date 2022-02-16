export const Card = props => {
  return (
    <figure className="card">
      <img
        className="card__img"
        src={`../images/${props.image}`}
        width="125"
        height="168"
        alt="Location image"
      />
      <figcaption className="card__container">
        <div>
          <p className="card__location">{props.location}</p>
          <a className="card__map" href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <span>{props.startDate}</span> - <span>{props.endDate}</span>
        <p className="card__text">{props.description}</p>
      </figcaption>
    </figure>
  );
};
