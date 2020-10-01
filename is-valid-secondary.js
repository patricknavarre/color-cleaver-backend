/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(secondary1, secondary2, secondary3){
  if (secondary1 === 'orange' || secondary1 === 'purple' || secondary1 === 'green'){
    return true
    }  
    else {
      return false
    }
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
