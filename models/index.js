'use strict';
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV ? 'production' : 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[
    env
    ];
const db = {};

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
  


db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database: ', err);
    });

// 테이블 생성
//wge
db.User = require('./user')(sequelize, Sequelize);
db.Board = require('./board')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Likes = require('./likes')(sequelize, Sequelize);
db.Team = require('./team')(sequelize, Sequelize);
db.Member = require('./member')(sequelize, Sequelize);
db.Photo = require('./photo')(sequelize, Sequelize);
// 관계형 지정
require('./user/foreignKey')(db);
require('./board/foreignKey')(db);
require('./comment/foreignKey')(db);
require('./likes/foreignKey')(db);
require('./team/foreignKey')(db);
require('./member/foreignKey')(db);
require('./photo/foreignKey')(db);

module.exports = db;
