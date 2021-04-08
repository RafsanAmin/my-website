const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let m = 0;
let d = 1;
let mnth = 0;
let limit = 0;
let hr = 1;
let min = 1;
let yr = 2021;
let list_num = 1;
let checked = false;
function openForm() {
  $(".add_form").removeClass("hide").animate({ opacity: "1" }, 50);
}
function del(elem) {
  elem.animate({ opacity: 0 }, 200, function () {
    elem.remove();
  });
}
function check(elem) {
  let elemX = elem.find(".list_check .tick");
  let elemC = elemX.attr("data-checked");
  console.log(typeof elemC);
  if (elemC == "false") {
    elemX.animate({ opacity: 1 }, 200);
    elemX.attr("data-checked", "true");
  } else if (elemC == "true") {
    elemX.animate({ opacity: 0 }, 200);
    elemX.attr("data-checked", "false");
  }
}
function closeMe() {
  $(this).remove();
}
function validaion() {
  let dy_v = $(".add_day").val();
  $(".add_day option").remove();
  d = 1;
  let month_v = $(".add_month").val();
  let yr_v = $(".add_year").val();
  console.log(month_v);
  if (
    month_v == "Jan" ||
    month_v == "Mar" ||
    month_v == "May" ||
    month_v == "Jul" ||
    month_v == "Aug" ||
    month_v == "Oct" ||
    month_v == "Dec"
  ) {
    limit = 31;
  } else if (
    month_v == "Apr" ||
    month_v == "Jun" ||
    month_v == "Sep" ||
    month_v == "Nov"
  ) {
    limit = 30;
  } else if (month_v == "Feb" && yr_v % 4 == 0) {
    limit = 29;
  } else {
    limit = 28;
  }
  while (d <= limit) {
    $(".add_day").append("<option>" + d + "</option>");
    d++;
  }
  $(".add_day").val(dy_v);
}

fw();
$(".chng").change(validaion);
$("#close").click(function () {
  $(".add_form").animate({ opacity: "0" }, 300, function () {
    $(".add_form").addClass("hide");
  });
});
function addTodo() {}
function fw() {
  while (d < 31) {
    $(".add_day").append("<option>" + d + "</option>");
    d++;
  }
  while (mnth <= 11) {
    $(".add_month").append("<option>" + months[mnth] + "</option>");
    mnth++;
  }

  while (yr > 2020 && yr < 2055) {
    $(".add_year").append("<option>" + yr + "</option>");
    yr++;
  }
  while (hr <= 12) {
    $(".add_hr").append("<option>" + hr + "</option>");
    hr++;
  }
  while (min <= 59) {
    $(".add_min").append("<option>" + min + "</option>");
    min++;
  }
}

$("#add").click(function () {
  let title = $(".add_title").val();
  let des = $(".add_description").val();
  let month_v = $(".add_month").val();
  let yr_v = $(".add_year").val();
  let dy_v = $(".add_day").val();
  let hr_v = $(".add_hr").val();
  let min_v = $(".add_min").val();
  let ap_v = $(".add_ap").val();
  if (title == "") {
    alert("Please Give Title!");
  } else {
    if (min_v < 9) {
      min_v = "0" + min_v;
    }
    while (true) {
      $("#list").append(
        "<div id='list_s' onclick='check($(this))' class='list_s'>" +
          "<div class='list_check'><div class='tick' style='opacity: 0' data-checked='false'></div></div>" +
          "<div class='left'><div class='date'><i class='far fa-calendar-alt pr-2'></i><p>" +
          dy_v +
          "/</p><p>" +
          month_v +
          "/</p><p>" +
          yr_v +
          "</p></div><div class='time'><i class='far fa-clock pr-2'></i><p>" +
          hr_v +
          ":</p><p>" +
          min_v +
          "</p> <p>" +
          ap_v +
          "</p></div></div>" +
          "<div class='main'><h2 class='h1'>" +
          title +
          "</h2><p>" +
          des +
          "</p>" +
          "</div>" +
          "<div class='del_list_s' onclick='del($(this).parent())'><i class='far fa-trash-alt fa-sm pr-2'></i></div>" +
          "</div></div>",
      );
      list_num++;
      $(".add_form").animate({ opacity: "0" }, 300, function () {
        $(".add_form").addClass("hide");
      });
      break;
    }
  }
});
