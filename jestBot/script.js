$("#btn-click").on("click", () => {
  var name = $("#name").val();
  var age = $("#age").val();
  var html = `<li>${name} (${age} year old)</li>`;
  $(".user-list").append(html);
});
