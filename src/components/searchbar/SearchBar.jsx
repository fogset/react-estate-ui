import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];
function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });
    function switchType(val) {
        setQuery((prev) => ({ ...SearchBar.prev, type: val }));
    }
    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type="text" name="location" placeholder="City Location" />
                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min Price"
                    min={0}
                    max={10000000}
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000}
                    placeholder="Max Price"
                />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
