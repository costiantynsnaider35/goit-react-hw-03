import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterContact }) => {
  return (
    <div className={s.searchBox}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.search}
        type="text"
        value={filter}
        onChange={(event) => onFilterContact(event.target.value)}
        placeholder="Enter a name for your search!"
      />
    </div>
  );
};

export default SearchBox;
