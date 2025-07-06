import { SearchIcon, X } from 'lucide-react';
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';

const SearchBar = ({ onSearch, initialSearch = false }) => {
  // State for search parameters
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [time, setTime] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const isInitialMount = useRef(true);


  // Memoize the onSearch callback to prevent unnecessary changes
  const stableOnSearch = useCallback(onSearch, []);

  // Proper debounce implementation
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      if (!initialSearch) return;
       
    }

    const debounceTimer = setTimeout(() => {
      stableOnSearch({ searchTerm, category, difficulty, time });
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, category, difficulty, time, stableOnSearch]);

  // Generate filter options
  const filterOptions = useMemo(() => ({
    categories: ['', 'TECHNOLOGY', 'BUSINESS', 'MARKETING', 'BRANDING'],
    difficulties: ['', 'Beginner', 'Intermediate', 'Advanced'],
    timeOptions: ['', '< 1 week', '1 week', '2 weeks', '3 weeks']
  }), []);


  const filterLayout = "btn bg-base-300 rounded-full";
  
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setCategory('');
    setDifficulty('');
    setTime('');
  }, []);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 mg:justify-between w-full search-bar">
      <div className="search-input mb-4 mx-auto max-w-80 md:mx-0 md:ml-2">
        <div className={`search-input-container btn rounded-lg flex flex-row gap-0 ${isFocused ? 'focused bg-white border-none' : ''}`}>
            <SearchIcon 
            className="search-icon my-auto" 
            size={20} 
            color={isFocused ? 'none' : '#9ca3af'}
            />        
            <input
                type="text"
                placeholder= "Search Projects"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                aria-label="Search projects"
                className={`bg-inherit rounded-full w-9/10 text-center h-full ${isFocused ? 'max-w-80 min-w-64' : ''}`}
            />
            {searchTerm && (
          <button 
            className="clear-button"
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            <X className='size-4'/>
          </button>
        )}
        </div>
      </div>
      
      <div className="filters grid grid-cols-3 gap-1">
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className={filterLayout}
          aria-label="Category"
        >
          {filterOptions.categories.map(opt => (
            <option key={opt || 'category-default'} value={opt}>
              {opt || 'Category'}
            </option>
          ))}
        </select>

        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)}
          className={filterLayout}
          aria-label="Difficulty"
        >
          {filterOptions.difficulties.map(opt => (
            <option key={opt || 'difficulty-default'} value={opt}>
              {opt || 'Difficulty'}
            </option>
          ))}
        </select>

        <select 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
          aria-label="Time"
          className={filterLayout}
        >
          {filterOptions.timeOptions.map(opt => (
            <option key={opt || 'time-default'} value={opt}>
              {opt || 'Time'}
            </option>
          ))}
        </select>

        {(category || difficulty || time) && (
          <button onClick={clearFilters}>
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;