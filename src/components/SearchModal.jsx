import { connect } from "react-redux"
import { Link } from "react-router-dom";
import Categories from "../pages/Categories";
import { useState, useEffect } from "react"
function SearchModal({dispatch}) {
  const [search,setSearch]=useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (search.trim().length >= 2) {
      setSearchResults([
        ...Categories.filter((a) =>
          a.name.toLowerCase().startsWith(search.toLowerCase())
        ),
      ].slice(0,3));
    } else {
      setSearchResults([]);
    }
  }, [search]);
  return (
    <>
      <div
        onClick={() => {
          dispatch({
            type: "SET_SEARCHMODAL",
            payload: false,
          });
        }}
        className="modal-container"
      >
        <div onClick={(e) => e.stopPropagation()} className="modals search">
          <div className="modal-body search">
            <form action="">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Axtarış"
              />
            </form>
            <ul className="search-ul">
              {searchResults.map((a) => (
                 <li key={a.id} >
                  <Link to={`/products/${a.id}`}><img src={a.image} alt="" /></Link>
                  <Link to={`/products/${a.id}`}><p>{a.name}</p></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect()(SearchModal)