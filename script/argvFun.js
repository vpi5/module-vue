const fs = require('fs');


/*
*
*   获得启动参数
*
*/
function getArgvStr() {
    // 判断 配置文件是否存在
    if(process.argv.length < 4){
        throw new Error('启动参数不正确!');
    }
    let argv = process.argv;
    if(argv.length >= 4){
        try {
            let path = require('path');
            let configFile = require(`./config/config.${argv[3].substr(1)}.js`);
            writeConfigFun(configFile, path.join(__dirname,'..', 'public/config.js'));
        }catch (e) {
            throw new Error('启动的配置文件不存在!');
        }
    }
}


/*
*
*   获得配置文件
*   参数：配置文件的数据，写入的文件地址
*
*/
function writeConfigFun(data, path) {
    // 写入文件
    let par = `

var webConfig = ${JSON.stringify(data)};

        `;
    readFun(par, path);
}

/*
*
*   读取文件
*   参数：数据、路径
*
**/
function readFun(data, path) {
    // 读取文件
    fs.readFile(path,function(err,res){
        if(err){
            console.error('监听配置文件不存在，准备进行创建！');
            /*
            *
            *   参数： 路径、文件内容、回调函数(err)
            *
            */
            fs.writeFile(path, data, function(err) {
                if(err) {
                    return console.log('创建配置文件失败');
                }
                console.log("创建配置文件成功！");
            });
            return;
        }
        writeFun(path, data);
    });
}


/*
*
*   !! 向指定文件 写入 指定的信息
*   参数 ： 路径，字符串流
*
*/
function writeFun(path, par) {
    fs.writeFile(path, par,function(err){
        if(err){
            console.error(err, `写入配置文件发生错误，文件：${__filename}`);
            return;
        }
        console.log('写入配置文件成功');
    });
}

module.exports = getArgvStr;
