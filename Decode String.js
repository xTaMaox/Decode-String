var decodeString = function (s) {
  var regex = /(\d*)(?:\[)([A-Za-z]*)(?:\])/;

  while (regex.test(s)) {
    var matchStr = s.match(regex);
    var ind = matchStr.index;
    var str = matchStr[0];
    var mLen = str.length;

    var strCount = parseInt(matchStr[1]);
    var template = matchStr[2].repeat(strCount);

    s = s.slice(0, ind) + template + s.slice(ind + mLen, s.length);
  }

  return s;
};
