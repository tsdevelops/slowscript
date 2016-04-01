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
        return exit(true, 'InternalError: context keys and vals lengths are not identical.');
      }
      if (keys.indexOf(val) === -1) {
        keys.push(key);
        vals.push(val);
        return exit();
      }
      return exit(true, 'NameError: context already contains "' + key + '" as a key.');
    };
    this.update = function(key, val) {
      var index = keys.indexOf(key);
      if (index !== -1) {
        vals[index] = val;
        return exit();
      }
      else {
        return exit(true, 'NameError: context does not contain "' + key + '" as a key.');
      }
    };
    this.get = function(key) {
      var index = keys.indexOf(key);
      if (index !== -1) {
        return exit(false, vals[index]);
      }
      else {
        return exit(true, 'NameError: context does not contain "' + key + '" as a key.');
      }
    };
  };
  
  var value = function(type, val) {
    return {
      type: type,
      val:  val
    };
  };
  
  var native = function(func) {
    return value('native', func);
  };
  
  var addDefaultsTo = function(context) {
    context.add('+', native(function(params) {
      if (params[0].type === 'integer') {
        var total = 0;
        for (var i = 0; i < params.length; i++) {
          total += params[i].val;
        }
        if (typeof total != 'number') {
          // TODO
        }
      }
    });
  };
  
  var runStatement = function(statement) {
    var context = new Context();
    addDefaultsTo(context);
  };
})();
