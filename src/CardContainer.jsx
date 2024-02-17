import CustomCard from "./Card";
import React, { useState, useEffect } from "react";
import "./CardContainer.css";
import { getMovies } from "./API.js";

export default function CardContainer() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data);
        });
    }, []);
    return (
        <div className="card-container">
            {movies.map((movie, index) => (
                <div key={index} className="card">
                    <CustomCard data={movie} />
                </div>
            ))}
        </div>
    );
}
