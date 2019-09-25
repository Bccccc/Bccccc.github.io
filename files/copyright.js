// JavaScript Document
var str = "Copyright &copy; " + new Date().getFullYear();
var curInnerHTML = document.body.innerHTML;
curInnerHTML = curInnerHTML.replace("Copyright © ", str);
document.body.innerHTML = curInnerHTML;