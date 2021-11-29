import { useState } from 'react';
import { SummaryList } from '@pega/cosmos-react-core';

export default function Followers() {
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  return (
    <>
      {' '}
      <SummaryList
        name='Followers'
        icon='user-star'
        loading={loading}
        count={!loading && Array.isArray(followers) ? followers.length : 0}
        items={followers}
      />
    </>
  );
}
