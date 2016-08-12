/**
 * Created by rush on 8/12/16.
 */

function firstLast6 (ray){
    console.log("firstLast6(" + ray + ") ->")
        if ((ray[0] == 6) || (ray[(ray.length -1)] == 6)) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

var first = [1, 2, 6];
var first2 = [6,1, 2, 3];
var first3 = [13, 6, 1, 2, 3];
var first4 = [7, 6, 4];
var first5 = [4, 2, 5];
var first6 = [6, 4, 6];

firstLast6(first);
firstLast6(first2);
firstLast6(first3);
firstLast6(first4);
firstLast6(first5);
firstLast6(first6);

//
//This is the Same First Last
//
function sameFirstLast (nums){
    console.log("sameFirstLast(" + nums + ") ->")
    if ((nums.length >= 1) && (nums[0] == (nums[(nums.length - 1)]))) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

var same = [1, 2, 3];
var same2 = [1, 2, 3, 1];
var same3 = [1, 2, 1];
var same4 = [1, 2, 3];
var same5 = [3, 2, 3];
var same6 = [5, 4, 5];

sameFirstLast(same);
sameFirstLast(same2);
sameFirstLast(same3);
sameFirstLast(same4);
sameFirstLast(same5);
sameFirstLast(same6);

//
//RotateLeft3
//
function rotateLeft3 (nums){
    console.log("rotateLeft3(" + nums + ") ->")
    var first = nums[0];
    nums.shift();
    nums.push(first);

    return console.log(nums);
}
var ro = [1, 2, 3];
var ro2 = [5, 11, 9];
var ro3 = [7, 0, 0];
var ro4 = [10, 22, 31];
var ro5 = [6, 5, 4];
var ro6 = [11, 42, 51];
rotateLeft3(ro);
rotateLeft3(ro2);
rotateLeft3(ro3);
rotateLeft3(ro4);
rotateLeft3(ro5);
rotateLeft3(ro6);


function reverse3 (nums){
    console.log("reverse3(" + nums + ") ->")
    var first = nums[0];
    var middle = nums[1];
    var last = nums[2];
    nums.pop();
    nums.shift();
    nums.push(last);
    nums.shift();
    nums.push(middle);
    nums.push(first);

    return console.log(nums);
}

var reverse = [1, 2, 3];
var reverse22 = [9, 11, 5];
var reverse32 = [7, 0, 0];
var reverse42 = [5, 66, 1];
var reverse52 = [2, 66, 111];
var reverse62 = [53, 4, 12];

reverse3(reverse);
reverse3(reverse22);
reverse3(reverse32);
reverse3(reverse42);
reverse3(reverse52);
reverse3(reverse62);

function sumFirstPenultimate (nums){
    console.log("sumFirstPenultimate(" + nums + ") ->")
    var first = nums[0];
    var second = nums[1];
    var secondLast = nums[(nums.length - 2)];

    if ((nums.length <= 2)){
        return console.log(first + second);
    } else {
        return console.log(first + secondLast);
    }
}
var sum = [1, 2, 3];
var sum2 = [1, 1,];
var sum3 = [1, 1, 1, 1];
var sum4 = [1, 2, 3, 4];
var sum5 = [3, 2, 4];
var sum6 = [6, 2, 33, 5];
var sum7 = [1, 2, 3, 5];

sumFirstPenultimate(sum);
sumFirstPenultimate(sum2);
sumFirstPenultimate(sum3);
sumFirstPenultimate(sum4);
sumFirstPenultimate(sum5);
sumFirstPenultimate(sum6);
sumFirstPenultimate(sum7);