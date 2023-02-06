import {useState, useCallback} from 'react';

const useSearch = ({onSubmit}) => {
    const [search, setSearch] = useState("");

    const handleChange = useCallback(({target}) => {
        setSearch(target.value)
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({search});
        setSearch("");
    }

    return {search, setSearch, handleChange, handleSubmit};
}

export default useSearch;