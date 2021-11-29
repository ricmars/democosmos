import { ChangeEvent, useState } from 'react';
import { TextArea as TextAreaCosmos } from '@pega/cosmos-react-core';

export default function InputField(props: any) {
  const { field } = props;
  const [inputValue, setInputValue] = useState(field.displayvalue);
  return (
    <TextAreaCosmos
      type='text'
      label={field.displaylabel}
      value={inputValue}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
      }}
    />
  );
}
