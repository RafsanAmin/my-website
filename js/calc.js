let opC = 0;
let x = $(".display").val();
let fstNum = 0;
let scndNum = 0;

function instNum(num) {
  let x = $(".display").val();
  $(".display").val(x + num);
  if (x == 0) {
    $(".display").val(num);
    console.log(x);
  }
}
function pos_to_neg(num) {
  let aNum = Number(num);
  let rNum = -aNum;
  return rNum.toString();
}
$(".pls-mns").click(() => {
  let x = $(".display").val();
  let cNum = pos_to_neg(x);
  $(".display").val(cNum);
});
$(".back").click(function () {
  let x = $(".display").val();
  if (x == 0) {
    return 0;
  } else {
    x = x.slice(0, -1);
    $(".display").val(x);
  }
});
$(".clr").click(() => {
  $(".display").val(0);
  $(".mem_display").val(0);
  opC = 0;
  fstNum = 0;
  scndNum = 0;
});

$(".clr_e").click(() => {
  $(".display").val(0);
});

function opclick(op) {
  let x = $(".display").val();
  opC = op;
  fstNum = parseFloat(x);
  console.log(fstNum);
  $(".display").val(0);
  $(".mem_display").val(fstNum + op);
}

$("#eq").click(() => {
  let x = $(".display").val();
  scndNum = parseFloat(x);
  if (opC == "+") {
    $(".display").val(fstNum + scndNum);
  } else if (opC == "-") {
    $(".display").val(fstNum - scndNum);
  } else if (opC == "*") {
    $(".display").val(fstNum * scndNum);
  } else if (opC == "/") {
    $(".display").val(fstNum / scndNum);
  } else if (opC === "^") {
    $(".display").val(fstNum ** scndNum);
  }
  $(".mem_display").val(0);
});
$(".root").click(() => {
  let x = $(".display").val();
  fstNum = parseFloat(x);
  $(".display").val(Math.sqrt(fstNum));
});
$(".cb_root").click(() => {
  let x = $(".display").val();
  fstNum = parseFloat(x);
  $(".display").val(Math.cbrt(fstNum));
});
$(".x_sqr").click(() => {
  let x = $(".display").val();
  fstNum = parseFloat(x);
  $(".display").val(fstNum ** 2);
});
$(".x_cube").click(() => {
  let x = $(".display").val();
  fstNum = parseFloat(x);
  $(".display").val(fstNum ** 3);
});
$(".invrt").click(() => {
  let x = $(".display").val();
  fstNum = parseFloat(x);
  $(".display").val(1 / fstNum);
});
$(".perc").click(() => {
  let x = $(".display").val();
  scndNum = parseFloat(x);
  if (opC == "+") {
    $(".display").val(fstNum + fstNum * (scndNum / 100));
  } else if (opC == "-") {
    $(".display").val(fstNum - fstNum * (scndNum / 100));
  } else if (opC == "*") {
    $(".display").val(fstNum * (scndNum / 100));
  } else if (opC == "/") {
    $(".display").val(fstNum / (scndNum / 100));
  }
  $(".mem_display").val(0);
});
