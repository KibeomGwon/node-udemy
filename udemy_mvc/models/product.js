const path = require('path');
const fs = require('fs');


const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json');

const getProductFromFile = cb => {
    // readFile은 콜백 함수이기 때문에 이 처리가 끝나고 다음 controller에서 다음 작업이 진행될 수 있게
    // 이 함수를 콜백함수로 만듬
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            cb([]);
        } else{
            cb(JSON.parse(fileContent));
        }
    });
}

const products = [];
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }


    save() {
        getProductFromFile(products => {
            // 익명함수를 사용하여 this가 클래스를 가리킬 수 있도록 작성 해야 한다.
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),err => {
                console.log(err);
            });
        });
        //products.push(this);
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }
}