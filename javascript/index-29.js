// let number = 4;
// number.toLocaleString(locale, {options});

let number = 123445.12345;
console.log(number.toLocaleString('en-US'));
console.log(number.toLocaleString('hi-IN'));
console.log(number.toLocaleString('de-DE'));
console.log('----------')
console.log(number.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log(number.toLocaleString('hi-IN', {style: 'currency', currency: 'INR'}));
console.log(number.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}));
console.log('----------')
console.log(number.toLocaleString(undefined, {style: 'percent'}));
console.log('----------')
console.log(number.toLocaleString(undefined, {style: 'unit', unit: 'celsius'}));
console.log(number.toLocaleString(undefined, {style: 'unit', unit: 'kilogram'}));
console.log(number.toLocaleString(undefined, {style: 'unit', unit: 'centimeter'}));