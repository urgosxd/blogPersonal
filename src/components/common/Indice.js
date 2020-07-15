import React from "react";
import PropTypes from "prop-types";

export const Leyenda = ({ leyenda }) => {
    return (
        <ul className="shadow-lg bg-light  rounded p-5 list-unstyled w-75 mt-5">
            <h4 className="mb-4 text-center mb-4">QUE ENCONTRARAS AQUI</h4>
            {leyenda.map((header, index) => (
                <li className="h5 text-secondary">
                    <a
                        href={`#${header.child[0].child[0].text.replace(
                            / /g,
                            ""
                        )}`}
                        className="text-dark"
                    >
                        {`${index + 1}. `}
                        {header.child[0].child[0].text}
                    </a>
                </li>
            ))}
        </ul>
    );
};
