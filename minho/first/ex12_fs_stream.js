//ex12_fs_stream.js
//fs 객체로 스트림 단위로 파일 읽고 쓰기

var fs = require('fs');
var infile = fs.createReadStream('./output.txt', {
    flag: 'r'
});
var outfile = fs.createWriteStream('./output2.txt', {
    flag: 'w'
});

infile.on('data', function (data) {
    console.log('읽어 들인 데이터 >>>', data);
    outfile.write(data);
})

infile.on('end',(err,data)=> {
    console.log('파일 읽기 종료!');
    outfile.end(()=>{
        console.log('ttt');
    })

})