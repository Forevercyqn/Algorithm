var a = [1,2,3,0,0,0];
var b = [2,5,6];
m = 3;
n = 3;

//合并数组并有序排列
var merge = function(arr1, arr2, m , n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;

    while(len2 >= 0) {

        if(len1 < 0 ) {
            arr1[len--] = arr2[len2--];
            continue;
        }

        arr1[len--] = arr1[len1] >= arr2[len2] ? arr1[len1--] : arr2[len2--];
    }

    return arr1;    
    
}

console.log(merge(a, b, m ,n ));

