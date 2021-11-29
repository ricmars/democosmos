import { useNavigate } from 'react-router-dom';
import { OneColumnPage, Button } from '@pega/cosmos-react-core';

export default function Dashboard() {
  const history = useNavigate();
  const handleClick = () => history('/about');

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
