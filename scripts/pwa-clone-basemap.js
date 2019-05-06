const fs = require('fs-extra');

fs.copy('./dist/img', './public/img');

fs.copy('./dist/fonts', './public/fonts');

fs.copy('./dist/tiles', './public/tiles');

fs.copy('./dist/sprites', './public/sprites');