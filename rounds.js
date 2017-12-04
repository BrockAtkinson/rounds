'use strict';

var reference;

function rounds(source) {
  var self = this, chain = self.chain();
  reference = source;
  this.map(construct, source);
  return chain;
}

function construct(item, src) {
  var blocked = false;
  var len = reference.length || 0;
  while(len--) {
    if(reference[len]['_']['#'] === item['_']['#']) {
      blocked = true;
      break;
    }
  }
  if(!blocked) {
    reference.push(item);
  }
}

module.exports = rounds;