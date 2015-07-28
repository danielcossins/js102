function sortArr(arr){
  var newArr = arr.sort();
  return newArr;
}

function over25(arr){
  var newArr = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i]>25){
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

var $button = $('#button');
var $input = $('#input');
$button.click(function(){
  var stringArray = ($input.val()).split(",");
  var newStringArray = sortArr(over25(stringArray));

  for(var i=0; i<newStringArray.length; i++){
    $('form').after("<div id='number'>"+newStringArray[i]+"</div>");
  }
});