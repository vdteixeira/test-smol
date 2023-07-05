import React, { useState } from 'react';

type ContentCreator = {
  name: string;
  phone: string;
  email: string;
};

const ContentCreatorForm: React.FC = () => {
  const [creator, setCreator] = useState<ContentCreator>({ name: '', phone: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to create content creator
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={creator.name} onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={creator.phone} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={creator.email} onChange={handleChange} required />
      </label>
      <button type="submit">Create Content Creator</button>
    </form>
  );
};

export default ContentCreatorForm;