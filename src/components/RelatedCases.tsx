import { useState } from 'react';
import { SummaryList } from '@pega/cosmos-react-core';

export default function RelatedCases() {
  const [loading, setLoading] = useState(false);
  const [relatedCases, setRelatedCases] = useState([]);
  return (
    <>
      {' '}
      <SummaryList
        name='Related cases'
        icon='case'
        loading={loading}
        count={!loading && Array.isArray(relatedCases) ? relatedCases.length : 0}
        items={relatedCases}
      />
    </>
  );
}
