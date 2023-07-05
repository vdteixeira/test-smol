import React from 'react';
import { Content } from '../utils/types';

interface ContentListProps {
  contents: Content[];
}

const ContentList: React.FC<ContentListProps> = ({ contents }) => {
  return (
    <div>
      <h2>Contents</h2>
      {contents.map((content) => (
        <div key={content.id}>
          <h3>{content.name}</h3>
          <p>{content.description}</p>
          <p>{new Date(content.createat).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentList;