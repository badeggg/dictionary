#!/usr/bin/env node
const { spawnSync } = require('child_process');

let word = process.argv[2];
if(!word){
    console.log('请输入查询词汇');
    process.exit(0);
}
let url = `https://fanyi.baidu.com/sug --data kw=${word} --compressed`;

let curlSubProcess = spawnSync('curl', url.split(' '));
let result = JSON.parse( curlSubProcess.stdout );
console.log(result);
