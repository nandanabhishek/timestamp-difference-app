const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/time-difference', (req, res) => {
  const { startTime, endTime } = req.query;

  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const differenceInSeconds = Math.floor((endDate - startDate) / 1000);

  res.json({ differenceInSeconds });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
