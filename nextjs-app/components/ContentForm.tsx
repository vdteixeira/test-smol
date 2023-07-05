import React, { useState } from 'react';

type ContentFormProps = {
  onSubmit: (data: { name: string; description: string; createat: string }) => void;
};

const ContentForm: React.FC<ContentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createat, setCreateat] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, createat });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Create At:
        <input type="text" value={createat} onChange={(e) => setCreateat(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContentForm;