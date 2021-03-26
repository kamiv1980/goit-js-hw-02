"use strict";
console.log("Задание 4");

const formatString=function (string) {
    const lengthString=string.length;
    let newString;
    if (lengthString>40) {
        const tempString=string.slice(0,40);
        newString=tempString+'...';
    } else {
        newString=string};
    console.log(newString);
}
formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  );