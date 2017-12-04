'use strict';

var reference;

function rounds(source, callback) {
  reference = source;
  var self = this, chain = self.chain();
  this.map(construct, source);
  if(callback) {
    callback();
  }
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