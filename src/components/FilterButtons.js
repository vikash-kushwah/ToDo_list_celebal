import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTasks, faClipboardCheck, faSort } from '@fortawesome/free-solid-svg-icons';

const FilterButtons = React.memo(({ filter, setFilter, onSort, sortAscending }) => (
  <div className="filter-buttons">
    <button 
      className={filter === 'all' ? 'active' : ''} 
      onClick={() => setFilter('all')}
    >
      <FontAwesomeIcon icon={faList} /> All
    </button>
    <button 
      className={filter === 'active' ? 'active' : ''} 
      onClick={() => setFilter('active')}
    >
      <FontAwesomeIcon icon={faTasks} /> Active
    </button>
    <button 
      className={filter === 'completed' ? 'active' : ''} 
      onClick={() => setFilter('completed')}
    >
      <FontAwesomeIcon icon={faClipboardCheck} /> Completed
    </button>
    <button className="sort-button" onClick={onSort}>
      <FontAwesomeIcon icon={faSort} /> Sort {sortAscending ? '↓' : '↑'}
    </button>
  </div>
));

export default FilterButtons;