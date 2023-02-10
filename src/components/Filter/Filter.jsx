import PropTypes from 'prop-types';
import css from './Filter.module.css';


export function Filter ({ value, onChange }) {
  return (
    <>
    <h4 className={css.filterTitle}>Find contacts by name</h4>
    <input type="text" name="filter" value={value} className={css.inputFilterForm} onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};