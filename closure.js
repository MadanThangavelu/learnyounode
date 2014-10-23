function makeFunc(name) {
	var z = name;
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc("madan1");
myFunc();