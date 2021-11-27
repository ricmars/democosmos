import { useHistory } from 'react-router-dom';
import { OneColumnPage, Button } from '@pega/cosmos-react-core';

export default function Dashboard() {
  const history = useHistory();
  const handleClick = () => history.push('/about');

  return (
    <OneColumnPage
      a={
        <div>
          <Button onClick={handleClick}>Navigate to about</Button>
        </div>
      }
      title='Dashboard'
      icon='gauge-solid'
    />
  );
}
