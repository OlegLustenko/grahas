import { TextField } from '@material-ui/core';
import React, { ComponentProps } from 'react';

type InputProps = {
  value: ComponentProps<typeof TextField>['value'];
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  const onChangeHandler: ComponentProps<typeof TextField>['onChange'] = (
    event,
  ) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      label="Координаты"
      placeholder="Координаты Яндекса"
      value={value}
      onChange={onChangeHandler}
    />
  );
};
