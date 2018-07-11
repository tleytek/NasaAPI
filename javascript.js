var queryURL =
  'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2018-07-10&api_key=gynDPQAfBKHdzg1VJy7tz8tnjP1fATqdBF8RhjNP';

// gynDPQAfBKHdzg1VJy7tz8tnjP1fATqdBF8RhjNP

$.ajax({
  url: queryURL,
  method: 'GET'
})
  .then(function(res) {
    console.log(res);
    $('#asteroids').text(JSON.stringify(res));
  })
  .catch(function(err) {
    console.log(err);
  });
