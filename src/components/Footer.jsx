import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>Copyright &copy; { year }</p>
        </footer>
    );
}

export default Footer;