import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Containers = () => {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");
    const [btn, setBtn] = useState("");
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            setUser(res.data.results);
        });
    }),
        [];
    console.log(search);
    return (
        <div className="container">
            <nav>
                <Link style={{ textDecoration: "none", textAlign: "center" }} to="/">
                    <button>BACK</button>
                </Link>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="search name card"
                    className="input"
                />
            </nav>
            <nav>
                <button
                    onClick={(e) => {
                        setBtn(e.target.value);
                        user
                            .filter((item) => {
                                return btn.toLowerCase() === ""
                                    ? item
                                    : item.status.toLowerCase().includes(btn);
                            })
                            .map((item) => {
                                {
                                    let { name, status, species, image, gender } = item;
                                    return (
                                        <div>
                                            <img src={image} alt="" />
                                            <h1>{name}</h1>
                                            <h2>{status === "Dead"}</h2>
                                            <h3>{species}</h3>
                                            <p>{gender}</p>
                                        </div>
                                    );
                                }
                            });
                    }}
                    className="btn"
                >
                    DEAD
                </button>
                <button className="btn">ALIVE</button>
                <button className="btn">UNKDOWN</button>
                <button
                    className="btn"
                    onClick={() => {
                        user == [];
                    }}
                >
                    Clear all
                </button>
            </nav>
            {user
                .filter((item) => {
                    return search.toLowerCase() === ""
                        ? item
                        : item.name.toLowerCase().includes(search);
                })
                .map((item) => {
                    const { name, id, status, species, image, gender } = item;
                    return (
                        <div className="all">
                            <div className="cards">
                                <div className="card" key={id}>
                                    <img className="images" src={image} alt="" />
                                    <h1 className="names">{name}</h1>
                                    <h2 className="state">{status}</h2>
                                    <h3 className="special">{species}</h3>
                                    <p className="genders">{gender}</p>
                                </div>
                            </div>
                        </div>

                    );
                })}
        </div>
    );
};

export default Containers;


{/* <div className="cards">
    <nav className="card" key={id}>
        <img className="card" src={image} alt="" />
        <h1>{name}</h1>
        <h2>{status}</h2>
        <h3>{species}</h3>
        <p>{gender}</p>
    </nav>
</div> */}