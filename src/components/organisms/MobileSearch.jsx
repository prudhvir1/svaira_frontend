import "./styles/MobileSearch.css";
import { useDispatch } from "react-redux";
import { searchModal } from "../../redux/slices/modalSlice";
import { ModalCloseButton } from "../atoms";
import { useEffect, useRef, useState } from "react";
import { useSearchUserMutation } from "../../redux/api/utilApiSlice";
import { Link, useNavigate } from "react-router-dom";
import SearchProfileCard from "../atoms/SearchProfileCard";

function MobileSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchRef = useRef();
  const [searchInput, setSearchInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [foundUsers, setFoundUsers] = useState([]);

  const [searchUser, { isError, isLoading, isSuccess }] =
    useSearchUserMutation();

  const handleSearchInput = () => {
    setSearchInput(searchRef.current.value.trim());
  };

  useEffect(() => {
    searchRef.current.focus();
    // Set a timeout to update the debounced value after 3 seconds
    const handler = setTimeout(() => {
      setDebouncedValue(searchInput);
    }, 2000);

    // Clear the timeout if the inputValue changes before the 3 seconds
    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  // useEffect to handle the API call when debounced value changes
  useEffect(() => {
    if (debouncedValue) {
      // Function to call the API
      const fetchData = async () => {
        try {
          const res = await searchUser(debouncedValue).unwrap();
          setFoundUsers(res.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // Call the API
      fetchData();
    }
  }, [debouncedValue]);

  // const handleSearch = async () => {
  //   const res = await searchUser(searchInput).unwrap();
  //   setFoundUsers(res.data);
  // };

  const handleOtherProfileClick = async (user) => {
    dispatch(searchModal(false));
    // const res = await getUsersProfile(user._id).unwrap();
    // console.log(res.data);
    navigate(`${user.username}`);
  };

  return (
    <div className="MobileSearch">
      <div className="MobileSearch-Container">
        <div className="MobileSearch-Form">
          <div className="MobileSearch-InputBox">
            <input
              type="text"
              placeholder="Search..."
              ref={searchRef}
              value={searchInput}
              onChange={handleSearchInput}
            />
            {/* <button onClick={handleSearch}>Search</button> */}
          </div>
          <div className="MobileSearch-Results">
            {isLoading && <p>Loading...</p>}
            {isSuccess &&
              foundUsers.map((user) => (
                <SearchProfileCard
                  key={user._id}
                  user={user}
                  onClick={() => handleOtherProfileClick(user)}
                />
              ))}
            {isError && <p>No User Found!</p>}
          </div>
        </div>
      </div>
      <div className="Close-Button">
        <ModalCloseButton onClick={() => dispatch(searchModal(false))} />
      </div>
    </div>
  );
}
export default MobileSearch;
