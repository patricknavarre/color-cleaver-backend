/******************
 * YOUR CODE HERE *
 ******************/

function isValidPrimary(primary1, primary2, primary3){
  if (primary1 === 'red' || primary1 === 'yellow' || primary1 === 'blue'){
    return true
    }  
  if (primary2 === 'red' || primary2 === 'yellow' || primary2 === 'blue'){
    return true
  }
  if (primary3 === 'red' || primary3 ===  'yellow' || primary3 === 'blue'){
    return true
  }
    else {
      return false
    }
}




// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
