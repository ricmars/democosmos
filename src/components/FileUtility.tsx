import { useState } from 'react';
import { SummaryList } from '@pega/cosmos-react-core';

export default function Atttachments() {
  const [loading] = useState(false);
  const [attachments] = useState([]);

  return (
    <>
      {' '}
      <SummaryList
        name='Attachments'
        icon='paper-clip'
        loading={loading}
        count={!loading && Array.isArray(attachments) ? attachments.length : 0}
        items={attachments}
      />
    </>
  );
}
