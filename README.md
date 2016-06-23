# Demo Angular & LoopBack Framework

1. **Download && setup Mongo DB**
 - Download mongodb: https://www.mongodb.com/download-center#community
 - Install mongodb: https://docs.mongodb.com/manual/installation/
 - If you need setup mongo driver: http://php.net/manual/en/mongo.installation.php
2. **Setup Loopback Framework**
 - Document install LoopBack: https://docs.strongloop.com/display/SL/Installing+StrongLoop
 - Connect Loopback with mongodb: https://docs.strongloop.com/display/public/LB/MongoDB+connector
 - At root folder, we need install node package module: npm install
 - Import mongodb from folder: db
 - After make sure connect mongodb success, we will run server side at: /server with commandline: node .
3. **Setup & run Angular admin**
 - I use admin template at: https://github.com/almasaeed2010/AdminLTE
 - At root folder, we install node and bower packages: npm install bower install
 - Make sure you're install gulp & sass build
 - Build sass: gulp sass
 - Run Application: gulp
