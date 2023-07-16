import React from "react";

interface SearchFormProps {
  value: string;
  onChange: (name: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ value, onChange }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        style={{padding: '0.5rem' }}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
};

export default SearchForm;
