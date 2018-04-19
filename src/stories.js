const mongoose = require('mongoose')

const connect () => {
  return mongoose.connect('mongodb://localhost/serverless');
};

const createResponse = (status, body) => ({
  statusCode : status,
  body: JSON.stringify(body)
})

//스토리 만들기
exports.createStory = (event,ctx,cd) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  connect().then(
    () => {
        cb(null, createResponse(200, {message: 'create'}));
    }
  ).catch
  (e) => {
      cb(null, createResponse(500, {message: e}));
  }
};

//여러개의 스토리 리스팅
exports.readStories = (event,ctx,cd) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  connect.then(
    () => {
        cb(null, createResponse(200, {message: 'list'}));
    }
  ).catch
  (e) => {
    cb{null, createResponse(500, {message: e});
  }
};

//특정 스토리 읽기
exports.readStory = (event,ctx,cd) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  connect.then(
    () => {
        cb(null, createResponse(200, {message: 'read'}));
    }
  ).catch
    (e) => {
        cb(null, createResponse(500, {message: e}));
    }
};

//스토리 수정
exports.updateStory = (event,ctx,cd) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  connect.then(
    () => {
        cb(null, createResponse(200, {message: 'update'}));
    }
  ).catch
    (e) => {
      cb(null, createResponse(500, {message: e}));
    }
};

//스토리 삭제
exports.deleteStory = (event,ctx,cd) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  connect.then(
    () => {
        cb(null, createResponse(200, {message : 'delete'}));
    }
  ).catch
    (e) => {
      cb{null, createResponse(200, {message: e})};
    }
};
