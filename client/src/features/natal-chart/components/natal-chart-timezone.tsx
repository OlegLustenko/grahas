import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import React, { ComponentProps } from 'react';
import { Timezone, TIMEZONES } from '../../../core/constants';

type NatalChartTimezoneProps = {
  value: ComponentProps<typeof Select>['value'];
  onChange: (value: number) => void;
};
export const NatalChartTimezone: React.FC<NatalChartTimezoneProps> = ({
  value,
  onChange,
}) => {
  const timezone = TIMEZONES.find((timezone) => timezone.value === value);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      onChange(+event.target.value);
    }
  };

  return (
    <FormControl>
      <InputLabel htmlFor="name-error">Timezone: </InputLabel>
      <Select
        value={timezone ? timezone.value : -1}
        // @ts-ignore
        onChange={onChangeHandler}
        name="Timezone"
        renderValue={() =>
          timezone ? renderTimeZone(timezone) : 'Select Timezone'
        }
        inputProps={{
          id: 'name-error',
        }}
      >
        <MenuItem value={-1}>None</MenuItem>
        {TIMEZONES.map((timezone, index) => {
          return (
            <MenuItem value={timezone.value} key={index}>
              {renderTimeZone(timezone)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );

  function renderTimeZone(timezone: Timezone) {
    return `(GMT +${timezone.value}) ${timezone.cities.join(', ')}`;
  }
};
