import React, { ComponentProps } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

type DatePickerProps = {
  selectedTime: ComponentProps<typeof KeyboardTimePicker>['value'];
  onChange: ComponentProps<typeof KeyboardTimePicker>['onChange'];
};

export const TimePicker: React.FC<DatePickerProps> = ({
  selectedTime,
  onChange,
}) => {
  const onChangeHandler: ComponentProps<
    typeof KeyboardTimePicker
  >['onChange'] = (date, value) => {
    onChange(date, value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        ampm={false}
        margin="normal"
        label="Время"
        value={selectedTime}
        onChange={onChangeHandler}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
