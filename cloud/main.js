module.exports = {
  "nodevers": function (params, callback){
    return callback(undefined,{"version":process.version});
  } 
  
}
