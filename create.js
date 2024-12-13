import { getportfolio } from 'https://newportfoliodesign.github.io/portfolio/test.js';
let val = getportfolio(); 
console.log(val);
var elems = document.body.getElementsByTagName("a");
var check = false;
if(check === true) {

  for(var i = 0; i < elems.length; i++)
                {
                    elems[i].setAttribute("onclick",'getdata()');
                }

}
                
