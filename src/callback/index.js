function sum(nun1 , nun2 ){
    return nun1 + nun2
}
function call(nun1 ,nun2 ,callback){
    return callback(nun1 ,nun2)
}
console.log(call(2 , 2,  sum));

function date (callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000)
}
//esto es curioso 
function prinDate(dateNow){
    console.log(dateNow);

}
date(prinDate);

//cambiando el return por el tercerparametro callback
function SunDire(a,b,callback){
    callback(a + b);
}
console.log(`primer mensaje`);
SunDire(4,3,function(result){
    console.log(result);
})
console.log(`terminando el mensaje`);

const Prueb = () => {


};