var express = require('express'),
  app = express();

app.set('view options', {layout: false});
app.use('/public', express.static(__dirname + '/public'));

app.get('/_health', function (req, res) {
  res.send(200);
});

app.listen(process.env.PORT || 4000);