import {memo} from 'react';

import PropTypes from 'prop-types';

import { IoSearchSharp } from "react-icons/io5";
import useSearch from '../../shared/hooks/useSearch'
import styles from './search-bar.module.scss';

const SearchBar = ({onSubmit}) => {
    const {search, handleChange, handleSubmit} = useSearch({onSubmit});

    return (
        <header className={styles.searchBar}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <button type="submit" className={styles.button}>
                    <IoSearchSharp />
                </button>
                <input        
                    className={styles.input}
                    type="text"
                    placeholder="Search images and photos"
                    name="search"
                    value={search}
                    onChange={handleChange}
                />
            </form>
        </header>
    )
} 

export default memo(SearchBar);

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

// const [search, setSearch] = useState("");

// const handleChange = ({target}) => setSearch(target.value);

// const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({search});
//     setSearch("");
// }