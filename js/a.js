const anime = ["fade-up", "zoom-in", "fade-right"];

function do_aos(elem, fix) {
  elem.each(function () {
    let m = anime[Math.floor(Math.random() * 3)];
    $(this).attr("data-aos", m).attr("data-aos-duration", "1500");
  });
  let attr;
  if (fix == true) {
    elem.hover(
      function () {
        attr = $(this).attr("data-aos");
        $(this)
          .attr("data-aos", "")
          .attr("data-aos-duration", "350")
          .removeClass("aos-init aos-animate");
      },
      function () {
        $(this)
          .attr("data-aos", attr)
          .attr("data-aos-duration", "1500")
          .addClass("aos-init aos-animate");
      },
    );
  }
}
do_aos($(".my_proj_sld > div"), true);
do_aos($(".skill_con > *"), true);
do_aos($(".ch_con > *"), false);
do_aos($(".top"), true);
do_aos($(".about_me"), true);
do_aos($(".contact_me > *"), true);

function trottle(fun, wait) {
  let date = Date.now();
  return function () {
    let now = date + wait - Date.now();
    if (now < 0) {
      fun();
      date = Date.now();
    }
  };
}

let isPs = false;
let path = window.location.pathname;
let page = path.split("/").pop();
console.log(page);
$(".ch div div a").hover(() => {
  $(".gtch").stop().animate(
    {
      opacity: "100%",
    },
    300,
  );
});
function gotoPage(x) {
  window.location.href = x;
}
function copy(text) {
  if (typeof text === "object") {
    let $temp = $("<input>");
    $("body").append($temp);
    $($temp).val(text.text()).select();
    document.execCommand("copy");
    $temp.remove();
  } else {
    let $temp = $("<input>");
    $("body").append($temp);
    $($temp).val(text).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
function gotoProj(elem) {
  if (page == "index.html" || page == "") {
    $("html, body").animate(
      {
        scrollTop: $(elem).offset().top,
      },
      200,
    );
  } else {
    gotoPage("index.html" + elem);
  }
}
