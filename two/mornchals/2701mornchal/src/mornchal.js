var add = function(x,y) {
	return x+y;
 };

 var multiply = function(x,y) {
     return x*y;
 };

 var vowelRemover = function(string) {
  return string.replace(/[aeiou]/g,'');
};

var isOdd = function(n) {
  return Math.abs(n % 2) == 1;
};

var numToString = function(num){
    return num.toString();
};

var arraySquarer = function(array) {
    return array.map(function(elem){
        return elem*elem;
    });
};
