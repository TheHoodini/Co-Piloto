/* eslint-disable react/prop-types */
const Info = ({ card, onClose }) => {
  return (
    <div>
      <h2>{card.Name}</h2>
      <button className="close_button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Info;
