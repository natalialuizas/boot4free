import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Title from "../../../components/Title/Index";
import iconMobile from "../../../assets/images/icon_mobile.png";

const Profile = ({ name, description, url }) => {
  return (
    <div className="card__profile">
      <Link className="btn__comeback btn__comeback__title" to={`/`}>
        Voltar
      </Link>
      <Link className="btn__comeback__mobile" to={`/`}>
        <img src={iconMobile} alt=""></img>
      </Link>
      <Title text={name} className="profile__title" />
      <p className="profile__paragraph">
        {description}
        <a
          className="link__site"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          (Acessar site)
        </a>
      </p>
    </div>
  );
};

export default Profile;
