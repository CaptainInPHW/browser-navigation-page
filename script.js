alert("导航页面还在不断完善中......");
var links = [
    {
        q:'qq.com',
        w:'weibo.com',
        e:'ele.me',
        r:'renren.com',
        t:'twitter.com',
        y:'youtube.com',
        u:'u17.com',
        i:'iciba.com',
        o:'office.com',
        p:'paipai.com'
    },
    {
        a:'alipay.com',
        s:'sm.ms',
        d:'deepin.org',
        f:'facebook.com',
        g:'github.com',
        h:'hackerrank.com',
        j:'jirengu.com',
        k:'kugou.com',
        l:'leetcode.com'
    },
    {
        z:'zhaopin.com',
        x:'xunlei.com',
        c:'ctrip.com',
        v:'vip.com',
        b:'baidu.com',
        n:'news.souhu.com',
        m:'moonbasa.com'
    }
];

var rows_keys = new Array();
var rows_values = new Array();
for (var i = 0; i < links.length; i++) {
    rows_keys[i] = Object.keys(links[i]);
    rows_values[i] = Object.values(links[i]);
};
for (var i = 0; i < 3; i++) {
    createKeyBoard(rows_keys[i],rows_values[i]);
};

var p = document.createElement("p");
p.innerHTML = "<span>使用说明</span>:<br>1. <span>Ctrl + E</span> 可自定义与字母关联的导航地址<br>2. <span>Ctrl + D</span> 可重置与字母关联的导航地址<br>3. 修改时字母和导航地址对 <span>大小写不敏感</span><br>4. 字母相关的导航地址可将鼠标悬浮其上查看 "
document.querySelector("body").appendChild(p);















function createKeyBoard(arr1,arr2){
    var body = document.querySelector("body");
    var div = document.createElement('div');
    body.appendChild(div);
    for (let i = 0; i < arr1.length; i++) {
        var kbd = document.createElement('kbd');
        kbd.setAttribute("title","https://www." + arr2[i]);
        kbd.textContent = arr1[i];
        div.appendChild(kbd);
        kbd.onclick = function(evt){
            window.open(evt.target.getAttribute("title"),"_blank");
        };
    }
};
function addKeyPressEvent(){
    window.onkeydown = function(evt){
        evt.preventDefault();
        if (evt.ctrlKey) {
            switch(evt.code){
                case "KeyE": editKeyBoard(); break;
                case "KeyD": deleteKeyBoard(); break;
            };
        } else {
            if (!evt.altKey) {
                var kbds = document.querySelectorAll("kbd");
                for (var i = 0; i < kbds.length; i++) {
                    if (evt.code.indexOf(kbds[i].innerText) == 3) {
                        window.open(kbds[i].getAttribute("title"),"_blank");
                    }
                }
            }
        }
    }
}
function editKeyBoard(){
    var letter = prompt("你想修改哪个字母的导航？");
    var user_link = prompt("新的导航地址为？ （PS：需要填写完整的域名哦！）");
    if (letter && user_link) {
        var letter_uppercase = letter.toUpperCase();
        var result = letter_uppercase.match(/[a-zA-Z]/g);
        if (result && result.length == 1) {
            alert("修改成功！");
            // for (let i = 0; i < rows_keys.length; i++) {
            //     for (let j = 0; j < rows_keys[i].length; j++) {
            //         if (rows_keys[i][j].toUpperCase() == letter_uppercase) {
            //             rows_values[i][j] = user_link;
            //         }
            //     }
            // }
            var kbds = document.querySelectorAll("kbd");
            for (var i = 0; i < kbds.length; i++) {
                if (kbds[i].innerText == letter_uppercase) {
                    kbds[i].setAttribute("title","https://" + user_link); 
                }
            }
        } else {
            alert("请输入有效的单个字母或导航地址！");
        }
    } else {
        alert("字母和导航地址都填上才可以哦！");
    }
}
function deleteKeyBoard(){
    var letter = prompt("你想重置哪个字母的导航？");
    if (letter) {
        var result = letter.match(/[a-zA-Z]/g);
        if ( letter && result && result.length == 1) {
            alert("重置成功！");
            var letter_uppercase = letter.toUpperCase();
            for (let i = 0; i < rows_keys.length; i++) {
                for (let j = 0; j < rows_keys[i].length; j++) {
                    if (rows_keys[i][j].toUpperCase() == letter_uppercase) {
                        var kbds = document.querySelectorAll("kbd");
                        for (var k = 0; k < kbds.length; k++) {
                            if (kbds[k].innerText == letter_uppercase) {
                                kbds[k].setAttribute("title","https://" + rows_values[i][j]); 
                            }
                        }
                    }
                }
            }
        } else {
            alert("请输入单个有效的字母！");
        }
    } else {
        alert("填上字母才可以哦！");
    }
}
function preventCopyCode(){
    window.oncontextmenu = function(evt){
        alert("请尊重别人的劳动成果！");
        return false;
    }
}
addKeyPressEvent();
preventCopyCode();