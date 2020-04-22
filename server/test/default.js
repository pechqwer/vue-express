// const {after, before, describe, it} = require('mocha')
global.app = require('../index');
global.chai = require('chai');
global.assert = require('chai').assert
global.expect = require('chai').expect
global.chaiHttp = require('chai-http');
global.should = chai.should();

chai.use(chaiHttp);
