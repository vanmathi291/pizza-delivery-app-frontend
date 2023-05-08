import React from "react";
import Logo from "../../assets/Pizza-logo.png";
import { BiCartAlt, BiUser } from "react-icons/bi";
import IconCta from "../../Cta/IconCta";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div id="application-header" className="application-header">
      <div id="branding" className="branding">
        <img src={Logo} alt="pizza logo" />
        <p>Pizza</p>
      </div>
      <div id="nav-options" className="branding">
        <IconCta Icon={BiCartAlt} onClick={() => navigate("/cart")} />
        <IconCta Icon={BiUser} />
      </div>
    </div>
  );
}