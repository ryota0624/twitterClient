var fs = require("fs")
var If = require("ifx")
var outputName = "./output.txt"
var outputJson = "./output.json"

function writeArr(Arr) {
  fs.writeFileSync(outputName, "file\n")
  writer(Arr, 0)
}

function writer(Arr, indent) {
  const length = Arr.length;
  var indentTab ="";
  for(var i = 0; i < indent; i++ ) {
    indentTab += "L";
  };
  for(var i = 0; i < length; i++) {
    If(typeof Arr[i] != "object")(()=> {
      fs.appendFileSync(outputName, "\n"+indentTab+Arr[i])
    })
      .Else(() => writer(Arr[i], indent+1))
  };
}

function crlFs(dirName) {
  var rtnArr = [];
  var direct = fs.readdirSync(dirName);
  const length = direct.length;
  for(var i = 0;i < length; i++) {
    rtnArr.push(direct[i])
    If(!fs.statSync(dirName + direct[i]).isFile())
    (() => rtnArr.push(crlFs(dirName+direct[i]+"/")))
    //.Else(()=> rtnArr.push(direct[i]))
  }
  return If(rtnArr.length > 0)(()=> rtnArr).Else(() => null);
}

module.exports = crlFs;