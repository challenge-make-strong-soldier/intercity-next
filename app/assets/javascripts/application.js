//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require fastclick
//= require server_test
//= require server_poller
//= require health_check
//= require highlight
//= require clipboard
//= require forms
//= require modal
//= require turbolinks

$(document).on("turbolinks:load", function() {
  FastClick.attach(document.body);
  hljs.initHighlightingOnLoad();
  new Clipboard('.copy');
});
