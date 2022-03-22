import React from "react";
import github from "../components/img/github.png";
import tele from "../components/img/tele.png";
import whatsapp from "../components/img/whatsapp.png";
import gmail from "../components/img/gmail.png";
import '../index.css'
import { footer, footerStyles } from "./Styles";

const Footer = () => {
  return (
    <div className={`footer ${footerStyles}`}
      style={ footer }>
      <p>This project is built with React and Tailwind CSS.</p>
      <p>
        <small>
          {" "}
          View my code on{" "}
          <span>
            <a
              href="https://github.com/Qrious-Coder/react-calculator"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>{" "}
          or drop me your comments at any below:
        </small>
      </p>
      <p className="grid grid-cols-4 gap-0 mx-auto place-content-center w-48 my-5">
        <span className="footerIcon">
          <a
            href="https://github.com/Qrious-Coder/react-calculator"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" width={30} height={30} />
          </a>
        </span>
        <span className="footerIcon">
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=[q81188118@gmail.com]"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="github" width={30} height={30} />
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://wa.me/639086471423" 
          target="_blank"
          rel="noreferrer"
          >
            <img src={whatsapp} alt="github" width={30} height={30} />
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://t.me/Hillary_Duan" 
          target="_blank"
          rel="noreferrer"
          >
            <img src={tele} alt="email" width={30} height={30} />
          </a>
        </span>
      </p>
      <p>
        <small>Copyright © 2022 Q_coder. All Rights Reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
