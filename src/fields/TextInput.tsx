import { ChangeEvent, useState } from 'react';
import { Input } from '@pega/cosmos-react-core';

export default function TextInput(props: any) {
  const { field } = props;
  const [inputValue, setInputValue] = useState(field.displayvalue);
  return (
    <Input
      type='text'
      label={field.displaylabel}
      data-ref={field.reference}
      value={inputValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      }}
    />
  );
}
