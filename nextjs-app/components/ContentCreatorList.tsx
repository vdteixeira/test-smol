import React from 'react';
import { ContentCreator } from '../utils/types';

interface ContentCreatorListProps {
  contentCreators: ContentCreator[];
}

const ContentCreatorList: React.FC<ContentCreatorListProps> = ({ contentCreators }) => {
  return (
    <div>
      <h2>Content Creators</h2>
      {contentCreators.map((creator) => (
        <div key={creator.id}>
          <h3>{creator.name}</h3>
          <p>{creator.phone}</p>
          <p>{creator.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentCreatorList;