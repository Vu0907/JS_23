/*Bài 1
Đầu vào:
Lương 1 ngày;Số ngày làm

Xử lý:
Bước 1:Tạo biến Tiền lương :salary
Bước 2 Gán salary=salary1day*dayWork

Đầu ra:
Tiền lương
*/
document.getElementById("btnTinhluong").onclick = function () {
  //Lay thong tin tu user
  var salary1day = document.getElementById("1daySalary").value * 1;
  var dayWork = document.getElementById("dayWork").value * 1;

  //Xu ly
  var salary = salary1day * dayWork;
  var result1 = "";
  result1 += "<p>Lương: " + salary + "</p>";
  //Đầu ra
  document.getElementById("infoSalary").innerHTML = result1;
};

document.getElementById("btnTinhtrungbinh").onclick = function () {
  // lay thong tin tu user
  var number1 = document.getElementById("nb1").value * 1;
  var number2 = document.getElementById("nb2").value * 1;
  var number3 = document.getElementById("nb3").value * 1;
  var number4 = document.getElementById("nb4").value * 1;
  var number5 = document.getElementById("nb5").value * 1;

  //   xu ly
  var trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;
  var result2 = "";
  result2 += "<p>Giá trị trung bình: " + trungbinh + "</p>";
  //Đầu ra
  document.getElementById("infotrungbinh").innerHTML = result2;
};

document.getElementById("btnChange").onclick = function () {
  var usd = document.getElementById("USD").value * 1;
  var vnd = usd * 23500;
  var currentFormat = Intl.NumberFormat("VN-vn");

  var result3 = "";
  result3 += "<p> " + currentFormat.format(vnd) + " VND</p>";
  document.getElementById("infoChange").innerHTML = result3;
};

document.getElementById("btnTinh").onclick = function () {
  var long = document.getElementById("long").value * 1;
  var width = document.getElementById("width").value * 1;

  var perimeter = (long + width) * 2;
  var area = long * width;
  var result4 = "";
  result4 += "<p>Diện tích: " + area + "; " + "Chu vi: " + perimeter + "</p>";
  document.getElementById("info4").innerHTML = result4;
};

document.getElementById("btnTinhtong").onclick = function () {
  var digit = document.getElementById("2digit").value * 1;
  var unit = digit % 10;
  var ten = Math.floor(digit / 10);
  total2digit = unit + ten;
  var result5 = "";
  result5 += "<p>Giá trị trung bình: " + total2digit + "</p>";
  document.getElementById("info5").innerHTML = result5;
};
