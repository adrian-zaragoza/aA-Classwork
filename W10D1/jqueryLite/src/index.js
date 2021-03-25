const DOMNodeCollection = require('./dom_node_collection.js');

function $l(arg){
  let resultArr = [];
  if(typeof arg === "string"){
    let NodeList = document.querySelectorAll(arg);
    NodeList.forEach(function(el){return resultArr.push(el)})
    return nodeListArr;
  }else if(arg instanceof HTMLElement){
    resultArr.push(arg)
  }

  return new DOMNodeCollection(resultArr);
}

window.$l = $l
