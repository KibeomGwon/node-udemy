const path = require('path');

// mainModule은 이 프로세스를 실행하고 있는 메인 모듈( 파일 )을 의미
module.exports = path.dirname(process.mainModule.filename);