import type { ChangeEvent, FocusEvent } from 'react';
import { Input } from '@pega/cosmos-react-core';

export default function DateTime(props: any) {
  const { field } = props;
  return (
    <Input
      type='text'
      label={field.displaylabel}
      value={field.displayvalue}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
      onBlur={(e: FocusEvent<HTMLInputElement>) => {}}
    />
  );
}
