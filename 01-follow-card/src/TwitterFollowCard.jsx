import { useState } from "react";
import "./App.css";

export const TwitterFollowCard = ({ userName, name }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const textButton = isFollowing ? "Siguiendo" : "Seguir";

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar del Usuario"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{`@${userName}`}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick}
          className={
            isFollowing
              ? "tw-followCard-button is-following"
              : "tw-followCard-button"
          }
        >
          <span className="tw-followCard-text">{textButton}</span>
          <span className="tw-followCard-unFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};
