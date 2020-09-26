const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});
//logs endpoint
app.get('/logs', function (req, res) {
  res.send({
    logs: [
      {
        id: 3,
        message: 'Lights working 710',
        attention: false,
        tech: 'Henry Henderson',
        date: '2020-03-05T04:24:40.740Z',
      },
      {
        id: 8,
        message: 'Power in bedroom 223',
        attention: false,
        tech: 'Justin  Henson',
        date: '2020-03-07T03:57:42.061Z',
      },
      {
        message: 'Refrigerator making loud sound 203',
        attention: true,
        tech: 'Chuck Baker',
        date: '2020-03-06T02:18:33.180Z',
        id: 10,
      },
      {
        id: 11,
        message: 'Garbage disposal working 603',
        attention: false,
        tech: 'Garfield Johnson',
        date: '2020-03-07T03:57:54.744Z',
      },
      {
        message: 'Stove burners not heating up fully 943',
        attention: true,
        tech: 'Garfield Johnson',
        date: '2020-03-07T03:30:46.229Z',
        id: 12,
      },
      {
        message: 'TV not working in bedroom 921',
        attention: true,
        tech: 'Sally May',
        date: '2020-03-07T03:57:23.956Z',
        id: 13,
      },
      {
        message: 'Water leak 203',
        attention: true,
        tech: 'Phillis Davies',
        date: '2020-03-07T15:19:28.156Z',
        id: 14,
      },
    ],
  });
});
// techs endpoint
app.get('/techs', function (req, res) {
  res.send({
    techs: [
      {
        id: 1,
        firstName: 'Jeffery',
        lastName: 'McJeffery',
      },
      {
        id: 2,
        firstName: 'Phillis',
        lastName: 'Davies',
      },
      {
        id: 3,
        firstName: 'Chuck',
        lastName: 'Baker',
      },
      {
        id: 4,
        firstName: 'Sally',
        lastName: 'May',
      },
      {
        firstName: 'Garfield',
        lastName: 'Johnson',
        id: 5,
      },
      {
        firstName: 'Justin ',
        lastName: 'Henson',
        id: 6,
      },
      {
        firstName: 'Bobby',
        lastName: 'McGee',
        id: 7,
      },
    ],
  });
});
app.listen(PORT, function () {
  console.log('server listening on port:' + PORT);
});
