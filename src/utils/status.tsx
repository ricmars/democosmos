import { Status, StatusProps } from '@pega/cosmos-react-core';

export const genStatus = (value: string) => {
  let variant: StatusProps['variant'] = 'info';
  if (value.match(/^new/i)) {
    variant = 'success';
  } else if (value.match(/^resolved/i)) {
    variant = 'warn';
  } else if (value.match(/^pending/i)) {
    variant = 'pending';
  } else if (value.match(/^blocked/i)) {
    variant = 'urgent';
  }
  return (
    <Status key={value} variant={variant}>
      {value}
    </Status>
  );
};
