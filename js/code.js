var target = "";
window.onload = function() {
  var dragid = document.getElementById('dragimg');
  var dropbox = document.getElementById('dropbox');

  dragid.addEventListener('dragstart', function(element) {
    target = element.target;
  }, false);

  dropbox.addEventListener('dragover', function(element) {
    element.preventDefault();
  }, false);

  dropbox.addEventListener('drop', function(element) {
    element.preventDefault();
    element.target.appendChild(target);
  }, false);

}
