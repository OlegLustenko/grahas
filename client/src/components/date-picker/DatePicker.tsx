import React, { ComponentProps } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

type DatePickerProps = {
  value: ComponentProps<typeof KeyboardDatePicker>['value'];
  onChange: ComponentProps<typeof KeyboardTimePicker>['onChange'];
};

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const onChangeHandler: ComponentProps<
    typeof KeyboardTimePicker
  >['onChange'] = (date, value) => {
    onChange(date, value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        disableFuture
        variant="inline"
        format="dd.MM.yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Дата"
        value={value}
        onChange={onChangeHandler}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
