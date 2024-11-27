import React, { useState } from 'react';
import axios from 'axios';
import ReportCard from '../components/Report-Card';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/reports/search?q=${query}`);
      setResults(response.data);
    } catch (err) {
      setError('Error fetching search results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Reports</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword or ID"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}

      <div className="results">
        {results.map((report) => (
          <ReportCard key={report._id} {...report} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage; 