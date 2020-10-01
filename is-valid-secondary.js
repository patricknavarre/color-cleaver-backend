/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(secondary1, secondary2, secondary3){
  if (secondary1 === 'orange' || secondary1 === 'purple' || secondary1 === 'green'){
    return true
    }  
  if (secondary2 === 'orange' || secondary2 === 'purple' || secondary2 === 'green'){
    return true
  }
  if (secondary3 === 'orange' || secondary3 ===  'purple' || secondary3 === 'greenr'){
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
