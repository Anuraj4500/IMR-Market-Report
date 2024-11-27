import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
    return (
        <div className="d-flex justify-content-end mt-3">
            <div className="text-end">
                <Link to={to} className="btn btn-success me-3">{text}</Link>
            </div>
        </div>
    );
}

export default Button;
