var del = require('delete');
 
// async
del(['public'], function(err, deleted) {
  if (err) throw err;
  // deleted files
  console.log(deleted);
});