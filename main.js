/*Bài 1
Đầu vào:
Lương 1 ngày;Số ngày làm

Xử lý:
Bước 1:Tạo biến Tiền lương :salary
Bước 2 Gán salary=salary1day*dayWork

Đầu ra:
Tiền lương*/

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

/* Bài 2
Đầu vào:
5 số thực number1,number2,number3,number4,number5

Xử lý: tạo biến trungbinh
trungbinh = (number1 + number2 + number3 + number4 + number5) / 5

Đầu ra: Giá trị trung bình*/

document.getElementById("btnTinhtrungbinh").onclick = function () {
  // Lấy thông tin từ user
  var number1 = document.getElementById("nb1").value * 1;
  var number2 = document.getElementById("nb2").value * 1;
  var number3 = document.getElementById("nb3").value * 1;
  var number4 = document.getElementById("nb4").value * 1;
  var number5 = document.getElementById("nb5").value * 1;

  // Xử lý
  var trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;
  var result2 = "";
  result2 += "<p>Giá trị trung bình: " + trungbinh + "</p>";
  //Đầu ra
  document.getElementById("infotrungbinh").innerHTML = result2;
};

/*Bài 3
Đầu vào:
USD

Xử lý: vnd
vnd = usd * 23500

Đầu ra: VND*/

document.getElementById("btnChange").onclick = function () {
  // Lấy thông tin từ user
  var usd = document.getElementById("USD").value * 1;

  // Xử lý
  var vnd = usd * 23500;
  // format số
  var currentFormat = Intl.NumberFormat("VN-vn");
  var result3 = "";
  result3 += "<p> " + currentFormat.format(vnd) + " VND</p>";
  // Đầu ra
  document.getElementById("infoChange").innerHTML = result3;
};

/*Bài 4
Đầu vào:
chiều dài, chiều rộng : long, width

Xử lý:
Tạo biến chu vi: perimeter = (long + width) * 2
tạo biến diện tích: area = long * width

Đầu ra:
Diện tích,chu vi*/

document.getElementById("btnTinh").onclick = function () {
  // Lấy thông tin từ user
  var long = document.getElementById("long").value * 1;
  var width = document.getElementById("width").value * 1;

  // Xử lý
  var perimeter = (long + width) * 2;
  var area = long * width;
  var result4 = "";
  result4 += "<p>Diện tích: " + area + "; " + "Chu vi: " + perimeter + "</p>";

  // Đầu ra
  document.getElementById("info4").innerHTML = result4;
};

/*Bài 5
Đầu vào:
Số có 2 chữ số:digit

Xử lý:
tạo biến hàng đơn vị: unit = digit % 10
tạo biến hàng chục: ten = Math.floor(digit / 10)
tạo biến tổng 2 ký số: total2digit = unit + ten

Đầu ra:
Tổng 2 ký số*/

document.getElementById("btnTinhtong").onclick = function () {
  // Lấy thông tin từ user
  var digit = document.getElementById("2digit").value * 1;

  // Xử lý
  var unit = digit % 10;
  var ten = Math.floor(digit / 10);
  var total2digit = unit + ten;
  var result5 = "";
  result5 += "<p>Giá trị trung bình: " + total2digit + "</p>";

  // Đầu ra
  document.getElementById("info5").innerHTML = result5;
};
