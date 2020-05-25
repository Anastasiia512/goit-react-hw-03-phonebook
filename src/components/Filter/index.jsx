import React from 'react';
import propTypes from 'prop-types';

const Filter = ({ filterValue, contactList, onChangeFilter }) =>
  contactList.length > 2 && (
    <label>
      Find contact by name
      <input
        type="text"
        name="name"
        value={filterValue}
        onChange={onChangeFilter}
      />
    </label>
  );

Filter.propTypes = {
  filterValue: propTypes.string.isRequired,
  contactList: propTypes.array.isRequired,
  onChangeFilter: propTypes.func.isRequired,
};

export default Filter;