/*
This file was created on Friday, April 1 by TSDevelops.
Copyright © 2016 TSDevelops.
*/

// Run everything in an anonymous function to prevent inadvertent window modification
(function() {
  var undef;
  var exit = function(isError, data) {
    if (isError) {
      return {
        type: 'error',
        msg:  '' + data
      };
    }
    else {
      return {
        type: 'return',
        val:  data
      }
    }
  };
  
  var Context = function() {
    var keys = [];
    var vals = [];
    
    this.add = function(key, val) {
      if (keys.length !== vals.length) {
        return exit('InternalError: context keys and vals lengths are not identical.');
      }
      if (keys.indexOf(val) === -1) {
        keys.push(key);
        vals.push(val);
        return exit();
      }
      return exit('DeclarationError: context already contains "' + key + '" as a key.');
    };
  };
})();
