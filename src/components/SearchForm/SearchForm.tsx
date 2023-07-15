import React from "react";

interface SearchFormProps {
  value: string;
  onChange: (name: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};

export default SearchForm;
