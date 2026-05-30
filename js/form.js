(function() {
  'use strict';
  var form = document.getElementById('form');
  if (!form) return;
  var lastSubmitTime = 0;
  var RATE_LIMIT_MS = 60000;
  form.addEventListener('submit', function(e) {
    var honeypot = document.getElementById('website');
    if (honeypot && honeypot.value.trim() !== '') {
      e.preventDefault();
      return false;
    }
    var now = Date.now();
    if (lastSubmitTime !== 0 && now - lastSubmitTime < RATE_LIMIT_MS) {
      e.preventDefault();
      alert('Please wait before submitting again.');
      return false;
    }
    lastSubmitTime = now;
  });
})();
