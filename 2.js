// What is the difference between jQuery.get() and jQuery.ajax()?

/*ans
jquery.get():-it is a method and it is used when you want a quick Ajax call,we pass function as an argument.

example:- 
jQuery.get('soni.txt',function(ele){
    
},'text');

jQuery.ajax():-it is a method and it is used when you want to handle synchronous or asynchronous operations,we pass object as an argument

example:-
jQuery.ajax({
url: 'soni.txt',
dataType: 'text',
type: GET,
  success: function(ele) {              
  }
});
*/

