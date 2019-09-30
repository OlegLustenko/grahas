import { MaterialUiPickersDate } from '@material-ui/pickers';
import React, { useState } from 'react';
import { Button, CircularProgress, Container, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

import { natalChartApi } from './api/natal-chart';

import { DatePicker, TimePicker } from './components';
import { Input } from './components/input';
import { NatalChartTimezone } from './features/natal-chart/components';
import { NatalChartModel } from './features/natal-chart/models/NatalChartModel';

const theme = createMuiTheme({
  palette: {
    primary: { main: indigo[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: {
    fontSize: 17,
  },
});

const App: React.FC = () => {
  const dateNow = new Date(Date.now());
  const gmtMock = '3';
  const [natalChart, setNatalChart] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<MaterialUiPickersDate>(
    dateNow,
  );
  const [selectedTime, setSelectedTime] = useState<MaterialUiPickersDate>(
    dateNow,
  );
  const [coordinate, setCoordinate] = useState('49.992167, 36.231202');
  const [form, setForm] = useState<NatalChartModel>(
    new NatalChartModel({
      gmt: gmtMock,
      date: '15.07.1989',
      time: '08:10',
      city: 'Харьков',
      coordinates: {
        latitude: '36.231202',
        longitude: '49.992167',
      },
    }),
  );

  const [gmt, setGmt] = useState(3);

  const getChart = async () => {
    setLoading(true);
    const chart = await natalChartApi.requestChart(form);

    setNatalChart(chart);
    setLoading(false);
  };

  const setTimePicker = (
    date: MaterialUiPickersDate,
    value?: string | null | undefined,
  ) => {
    setSelectedTime(date);
    if (value) {
      setFormHandler({
        time: value,
      });
    }
  };

  const setDatePicker = (
    date: MaterialUiPickersDate,
    value?: string | null | undefined,
  ) => {
    setSelectedDate(date);
    if (value) {
      setFormHandler({
        date: value,
      });
    }
  };

  const setCoordinatesHandler = (value: string) => {
    setCoordinate(value);
    if (value) {
      const [latitude, longitude] = value.split(', ');
      setFormHandler({
        coordinates: {
          longitude,
          latitude,
        },
      });
    }
  };

  const setGmtHandler = (gmt: number) => {
    setGmt(gmt);

    if (gmt) {
      setFormHandler({
        gmt: gmt.toString(),
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="xs">
          <Grid container justify="center" spacing={2} direction="column">
            <Grid item>
              <DatePicker value={selectedDate} onChange={setDatePicker} />
            </Grid>
            <Grid item>
              <TimePicker
                selectedTime={selectedTime}
                onChange={setTimePicker}
              />
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Input value={coordinate} onChange={setCoordinatesHandler} />
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" disabled>
                    Добавить координаты
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <NatalChartTimezone value={gmt} onChange={setGmtHandler} />
            </Grid>
            <Grid item>
              {isLoading && <CircularProgress />}
              {natalChart && (
                <img
                  src={natalChart}
                  alt="loading"
                  onLoadStart={() => setLoading(true)}
                  onLoadedData={() => {
                    setLoading(false);
                  }}
                />
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={getChart}
            >
              GET NATAL CHART
            </Button>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );

  function setFormHandler(values: Partial<NatalChartModel>) {
    setForm({
      ...form,
      ...values,
    });
  }
};

export default App;
