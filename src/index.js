const $ = require('jquery');

$(function () {
  let form = $('form');
  let inputName = $('#name');
  let inputEmail = $('#email');

  let table = $('table');

  form.on('submit', function (e) {
    $('table').append(`<tr><td>${inputName.val()}</td><td>${inputEmail.val()}</td><td><a href="#" class="up">&uarr;</a><a href="#" class="down">&darr;</a><a href="#" class="rem">X</a></td></tr>`);
    e.preventDefault();
  });

  table.on('click', '.up', function (e) {
    let row = $(this).parent().parent();
    row.insertBefore(row.prev());
  });

  table.on('click', '.down', function (e) {
    let row = $(this).parent().parent();
    row.insertAfter(row.next());
  });

  table.on('click', '.rem', function (e) {
    let row = $(this).parent().parent();
    row.remove();
  });
});
