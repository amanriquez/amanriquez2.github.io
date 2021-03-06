// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {

return arrays.reduce( (flat, next) => {
  return flat.concat(next);
}, []);




}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {

for (value; test(value); value = update(value)){
  body(value);
}


}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {

for (let i = 0; i < array.length; i++){
  
  if(!test(array[i])){
    return false;
  }
  
}

return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {


let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  
  console.log('hello world');
  console.log(scripts);

let ltr = 0;
let rtl = 0;

for (let script of scripts){
  if (script.name === 'ltr'){
    ltr += script.count;
  } else if (script.name === 'rtl'){
    rtl += script.count;
  }
}


return ltr > rtl ? 'ltr':'rtl';

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
}
