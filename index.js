/**
 * INPUT: Nhập 3 số số nguyên
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var number1, var number2, var number3;
        2. tạo biến var kq để in kết quả sau khi sắp xếp
           tạo biến var temp để thay đổi vị trí mỗi khi so sánh
        3. thực hiện kiểm tra điều kiện và ấn nút sắp xếp :
        4. In kết quả ra màn hình
                 kq.innerHTML ="Thứ tự tăng dần là: " + number1 + " " + number2 + " " + number3;
 * OUTPUT: Kết quả sau khi sắp xếp 3 số theo thứ tự tăng dần
 */
function sapXepTangDan() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  var number3 = parseInt(document.getElementById("number3").value);
  var kq = document.getElementById("kq");
  var temp = 0;
  if (number1 > number2 && number1 > number3) {
    temp = number1;
    number1 = number3;
    number3 = temp;
    if (number1 > number2) {
      temp = number1;
      number1 = number2;
      number2 = temp;
    }
  } else if (number1 > number2 && number3 > number2) {
    temp = number1;
    number1 = number2;
    number2 = temp;
  } else if (number1 > number2 && number3 > number1) {
    temp = number1;
    number1 = number2;
    number2 = temp;
  } else if (number2 > number1 && number2 > number3) {
    temp = number2;
    number2 = number3;
    number3 = temp;
    if (number1 > number2) {
      temp = number1;
      number1 = number2;
      number2 = temp;
    }
  } else if (number2 > number3 && number3 > number1) {
    temp = number2;
    number2 = number3;
    number3 = temp;
    if (number1 > number2) {
      temp = number1;
      number1 = number2;
      number2 = temp;
    }
  } else if (number3 < number1 && number3 < number2) {
    temp = number2;
    number2 = number3;
    number3 = temp;
    if (number1 > number2) {
      temp = number1;
      number1 = number2;
      number2 = temp;
    }
  } else kq.innerHTML = "Vui lòng kiểm tra !!!";
  kq.innerHTML ="Thứ tự tăng dần là: " + number1 + " " + number2 + " " + number3;
}

/**
 * INPUT: Chọn tên mà bạn muốn chào trong dropdown
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var var selectitem;
        2. tạo biến var kq để in kết quả sau khi sắp xếp 
        3. lấy giá trị value của các option và thực hiện kiểm tra :
        4. In kết quả ra màn hình
                kq.innerHTML = "Chào Bố"; ||  kq.innerHTML = "Chào Mẹ"; ||
                kq.innerHTML = "Chào Anh"; || kq.innerHTML = "Chào Em Gái"; ||
                kq.innerHTML = "Vui lòng kiểm tra lại thông tin";
 * OUTPUT: Chào thành viên trong gia đình tương ứng vs các option trong dropdown
 */
function ctChao() {
  var selectitem = document.getElementById("selectitem").value;
  var kq = document.getElementById("kq");
  if (selectitem === "B") {
    kq.innerHTML = "Chào Bố";
  } else if (selectitem === "M") {
    kq.innerHTML = "Chào Mẹ";
  } else if (selectitem === "A") {
    kq.innerHTML = "Chào Anh";
  } else if (selectitem === "E") {
    kq.innerHTML = "Chào Em Gái";
  } else kq.innerHTML = "Vui lòng kiểm tra lại thông tin";
}

/**
 * INPUT: Nhập 3 số nguyên vào 
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var number4, number5, number6;
        2. tạo biến var count chứa giá trị là biến đếm sau mỗi lần kiểm tra là số chẵn thì tăng lên 1, còn ko thì giữ nguyên giá trị
           tạo biến var count1 chứa giá trị là biến đếm sau mỗi lần kiểm tra không là số chẵn thì tăng lên 1 (số lẻ)
           tạo biến var kq để in kết quả sau khi kiểm tra
        3. Kiểm tra điều kiện các số number4, number5, number6 có % 2 === 0  không và thực đếm tương ứng
 * OUTPUT: In kết quả ra màn hình
                 kq.innerHTML = "Có " + count + " số chẵn và " + count1 + " số lẻ";
 */

function ktChanLe() {
  var number4 = document.getElementById("number4").value;
  var number5 = document.getElementById("number5").value;
  var number6 = document.getElementById("number6").value;
  var count = 0;
  var count1 = 0;
  var kq = document.getElementById("kq");

  if (number4 % 2 == 0) {
    count++;
  } else {
    count;
    count1++;
  }

  if (number5 % 2 == 0) {
    count++;
  } else {
    count;
    count1++
  }

  if (number6 % 2 == 0) {
    count++;
  } else {
    count;
    count1++;
  }
  kq.innerHTML = "Có " + count + " số chẵn và " + count1 + " số lẻ";
}

/**
 * INPUT: nhập 3 cạnh của tam giác (số nguyên)
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var canh1, var canh2, var canh3;
        2. tạo biến var kq để in kết quả sau khi kiểm tra
        3. Kiểm tra các điều kiện như :
          Đều: Nếu 3 cạnh bằng nhau. Vd:a = 3, b=3 c=3
          Cân: Nếu 2 cạnh bằng nhau. Vd: a=2, b=2, c=1
          Vuông: c^2 = a^2 + b^2. Vd: a=3, b=4, c=5
        4 xác định các loại tam giác cơ bản (vuông, đều, cân), các tam giác còn lại xếp loại là tam giác khác
 * OUTPUT: In kết quả ra màn hình 
 */
function xacDinhTamGiac() {
  var canh1 = document.getElementById("canh1").value;
  var canh2 = document.getElementById("canh2").value;
  var canh3 = document.getElementById("canh3").value;
  var kq = document.getElementById("kq");
  if (canh1 == canh2 && canh1 != canh3) {
    kq.innerHTML = "Tam giác cân";
  } else if (canh1 == canh2 && canh2 == canh3 && canh1 == canh3) {
    kq.innerHTML = "Tam giác đều";
  } else if (Math.pow(canh3, 2) == Math.pow(canh1, 2) + Math.pow(canh2, 2)) {
    kq.innerHTML = "Tam giác vuông";
  } else kq.innerHTML = "Các loại tam giác khác";
}

