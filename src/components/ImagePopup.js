function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_photo ${
        Object.keys(card).length === 0 ? "" : "popup_opened"
      }`}
    >
      <figure className="popup__box">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption>
          <h2 className="popup__name">{card.name}</h2>
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
