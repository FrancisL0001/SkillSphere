import { SearchIcon, X } from 'lucide-react';
import React, { useState, useCallback, useEffect, useMemo } from 'react';

const SearchBar = ({ onSearch }) => {
  // State for search parameters
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [time, setTime] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounced search term
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // Debounce effect for search input
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  // Generate filter options
  const filterOptions = useMemo(() => ({
    categories: ['', 'TECHNOLOGY', 'BUSINESS', 'MARKETING', 'BRANDING'],
    difficulties: ['', 'Beginner', 'Intermediate', 'Advanced'],
    timeOptions: ['', '< 1 week', '1-2 weeks', '2-3 weeks', '3-4 weeks']
  }), []);

  // Create combined search parameters
  const searchParams = useMemo(() => ({
    searchTerm: debouncedTerm,
    category,
    difficulty,
    time
  }), [debouncedTerm, category, difficulty, time]);

  // Trigger search when parameters change
  useEffect(() => {
    onSearch(searchParams);
  }, [searchParams, onSearch]);

  // Memoized change handlers
  const handleSearchChange = useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCategoryChange = useCallback(e => {
    setCategory(e.target.value);
  }, []);

  const handleDifficultyChange = useCallback(e => {
    setDifficulty(e.target.value);
  }, []);

  const handleTimeChange = useCallback(e => {
    setTime(e.target.value);
  }, []);

  const filterLayout = "btn bg-base-300 rounded-full";
  
  const clearFilters = () => {
    setSearchTerm('');
    setCategory('');
    setDifficulty('');
    setTime('');
  };

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
            onChange={handleSearchChange}
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
          onChange={handleCategoryChange}
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
          onChange={handleDifficultyChange}
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
          onChange={handleTimeChange}
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