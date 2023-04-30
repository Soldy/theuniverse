


require('./index.js');
// c3 = CHECK ; I = count ; F = function
let c3I = 0; 
let c3F = function(){
    console.log(global.theUn1v3rse.stat);
    if(20 > c3I)
        setTimeout(c3F ,1000);
    c3I++;
};
c3F();

setTimeout(function(){
    global.theUn1v3rse.controls.error(new Error('test'));
}, 3000);

setTimeout(function(){
    console.log(global.theUn1v3rse.controls.errorCount());
}, 3400);
setTimeout(function(){
    console.log(global.theUn1v3rse.controls.errorList());
}, 3500);


setTimeout(function(){
    console.log(
        global.theUn1v3rse.controls.errorsGet(
            global.theUn1v3rse.controls.errorList()
        )
    );
}, 3600);


setTimeout(function(){
    global.theUn1v3rse.controls.exit();
}, 6000);
