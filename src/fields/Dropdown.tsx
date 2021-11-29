import type { ChangeEvent, FocusEvent } from 'react';
import { Select, Option } from '@pega/cosmos-react-core';

export default function Dropdown(props: any) {
  const { field } = props;
  return (
    <Select
      label={field.displaylabel}
      value={field.displayvalue}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {}}
      onBlur={(e: FocusEvent<HTMLSelectElement>) => {}}
    >
      {field.options.map((item: any, index: number) => (
        <Option key={`dropdown-${field.reference}-${index}`} value={item.key}>
          {item.value}
        </Option>
      ))}
    </Select>
  );
}
