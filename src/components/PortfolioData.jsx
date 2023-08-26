import React from "react";

function PortfolioData({ title, imgUrl, tech, link }) {
    return (
        <div>
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p>
                    {tech.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default PortfolioData;
