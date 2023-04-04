import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const Navbar = () => {
    const { location, setLocation } = useGlobalContext();
    const [text, setText] = useState("");
    const [one, setOne] = useState(0);
    const [search, setSearch] = useState("");
    function addlocation() {
        useEffect(() => {
            axios.get(`https://rickandmortyapi.com/api${text}`).then((res) => { });
        });
    }
    return (
        <div>
            <Link style={{ textDecoration: "none" }} to="/">
                BACK
            </Link>
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="input2"
                placeholder="search name"
            />
            <p className="like">like:{one}</p>
            <div>
                <select className="selected">
                    {location.map((item) => {
                        const { id } = item;

                        return (
                            <option
                                onClick={(e) => {
                                    setText(e.target.value);
                                }}
                                value=""
                            >
                                /location/{id}
                            </option>
                        );
                    })}
                </select>
                <div>
                    {location
                        .filter((item) => {
                            return search.toLowerCase() === ""
                                ? item
                                : item.name.toLowerCase().includes(search);
                        })
                        .map((item) => {
                            return (
                                <div className="locationcards">
                                    <div className="locationcard">
                                        <h1>{item.name}</h1>
                                        <h2>{item.dimension}</h2>
                                        <h3>{item.type}</h3>
                                        <p>{item.created}</p>
                                        <button
                                            onClick={() => {
                                                setOne(one + 1);
                                            }}
                                        >

                                            like
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
<i class="fa-solid fa-heart">

</i>