


require('./index.js');
// c3 = CHECK ; I = count ; F = function
let c3I = 0; 
let c3F = function(){
    console.log(global.theUn1v3rse.stat);
    if(100 > c3I)
        setTimeout(c3F ,1000);
    c3I++;
};
c3F();

setTimeout(function(){
    global.theUn1v3rse.controls.exit();
}, 60000);
