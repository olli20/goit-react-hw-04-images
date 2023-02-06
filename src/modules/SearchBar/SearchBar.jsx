import {useState} from 'react';
import PropTypes from 'prop-types';

import { IoSearchSharp } from "react-icons/io5";

import styles from './search-bar.module.scss';

const SearchBar = ({onSubmit}) => {
    const [search, setSearch] = useState("");

    const handleChange = ({target}) => setSearch(target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
        setSearch("");
    }

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

export default SearchBar;

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

// class SearchBar extends Component {
//     state = {
//         search: "",
//     }

//     handleChange = ({target}) => {
//         const {name, value} = target;
//         this.setState({
//             [name]: value,
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const {onSubmit} = this.props;
//         onSubmit({...this.state});
//         this.reset();
//     }

//     reset() {
//         this.setState({
//             search: "",
//         })
//     }

//     render() {
//         const {search} = this.state;
//         const {handleChange, handleSubmit} = this;

//         return(
//             <header className={styles.searchBar}>
//                 <form className={styles.form} onSubmit={handleSubmit}>
//                     <button type="submit" className={styles.button}>
//                         <IoSearchSharp />
//                     </button>
//                     <input        
//                         className={styles.input}
//                         type="text"
//                         placeholder="Search images and photos"
//                         name="search"
//                         value={search}
//                         onChange={handleChange}
//                     />
//                 </form>
//             </header>
//         )
//     }
// }