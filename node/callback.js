/**
 * Created by dpk on 12/7/2016.
 */
function  order(number) {
    console.log("your order number"+ number);
    call(function () {
        console.log(number);
    });

}
function call(callback){
    setTimeout(callback,3000);
   // console.log("this is out"+ number);
}
order(1);
order(2);
order(3);

var bucky={
    favfood:'haleem',
    favmoc:'hindi'
}

bucky.movie='new';
var deepak=bucky;
bucky.prototype.not='not thi';
console.log("this is my movie property "+ bucky.not);
console.log(19=='19');
console.log(19===19);