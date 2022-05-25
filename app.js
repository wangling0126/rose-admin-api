import express from 'express';
var app = express();

import {
    menuList
} from './mock/menuList.js'
import {
    authButton
} from './mock/authButton.js'

app.get('/rose/login', function (req, res) {
    res.send({
        "code": 200,
        "data": {
            "access_token": "bpqlewvqzsjbmgoqlgbmdmuhoscynk",
            userInfo: {
                userName: '王玲',
                isAdmin: 1
            }
        },
        "msg": "成功"
    });
});

// 获取菜单列表
app.get('/rose/menu/list', function (req, res) {
    res.send({
        code: 200,
        data: menuList
    });
});

// 获取按钮权限
app.get('/rose/auth/buttons', function (req, res) {
    res.send({
        code: 200,
        data: authButton
    });
});

let port = 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
});