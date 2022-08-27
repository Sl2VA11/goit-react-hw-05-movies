import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './SearchBar.module.css';

export default function SearchBar({ onChange }) {
  const [searchChange, setSearchChange] = useState('');

  const handleChange = e => {
    setSearchChange(e.target.value);
  };

  const handleSubmit = e => {
     e.preventDefault();
     
     onChange(searchChange);

  
    e.target.reset()
  };

  return (
    <>
      <Link to="/">
        <button className="btn">Go exit</button>
      </Link>

      <form action="" className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Search Movie</label>
        <input type="text" className={css.input} onChange={handleChange} />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <Outlet />
    </>
  );
}
