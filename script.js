var total = 0;
$(document).ready(function () {
  $("#add").click(function () {
    var pd = $("#product").val();
    var qnt = $("#quantity").val();
    var rate = $("#rate").val();
    if (pd != "" && qnt != "" && rate != "") {
      var tax = Number(rate) * Number(qnt) * 0.1;
      var amt = Number(rate) * Number(qnt) + tax;
      console.log(tax + " " + amt);
      total = total + amt;
      total = Math.round(total);
      var row =
        "<tr><td>" +
        pd +
        "</td><td>" +
        rate +
        "</td><td>" +
        qnt +
        "</td><td>" +
        tax +
        "</td><td class='amt'>" +
        amt +
        "</td><td><button type='button' id='del' class='btn btn-danger'>Delete</button></td></tr>";
      console.log(
        "<tr><td>" +
          pd +
          "</td><td>" +
          rate +
          "</td><td>" +
          qnt +
          "</td><td>" +
          tax +
          "</td><td class='amt'>" +
          amt +
          "</td><td><button type='button' id='del' class='btn btn-danger'>Delete</button></td></tr>"
      );
      $("#mydata").append(row);
      $("h4").html("<h4>Total Amount: " + total + "<h4>");
      $("#product").val("");
      $("#quantity").val("");
      $("#rate").val("");
    } else alert("Fill all the Details");
  });
  $("#mydata").on("click", "#del", function () {
    var amt = $(this).closest("tr").find(".amt").html();
    total = total - Number(amt);
    total = Math.round(total);
    $("h4").html("<h4>Total Amount: " + total + "<h4>");
    $(this).closest("tr").remove();
  });
});
