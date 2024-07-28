/* eslint-disable react/prop-types */
import "./styles/SearchProfileCard.css";
function SearchProfileCard({ user, onClick }) {
  return (
    <div className="SearchProfileCard">
      <div className="SearchProfileCard-Container" onClick={onClick}>
        <div className="SearchProfileCard-Avatar">
          <img src={user.avatar.url} alt={user.avatar.filename} />
        </div>
        <div className="SearchProfileCard-Content">
          <h4>{user.fullname}</h4>
          <p>/{user.username}</p>
        </div>
      </div>
    </div>
  );
}
export default SearchProfileCard;
