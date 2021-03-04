/*
<p id="demo"></p>

<script>
function myFunction() {
  var res = "";
  res = res + isNaN(123) + ": 123<br>";
  res = res + isNaN(-1.23) + ": -1.23<br>";
  res = res + isNaN(5-2) + ": 5-2<br>";
  res = res + isNaN(0) + ": 0<br>";
  res = res + isNaN('123') + ": '123'<br>";
  res = res + isNaN('Hello') + ": 'Hello'<br>";
  res = res + isNaN('2005/12/12') + ": '2005/12/12'<br>";
  res = res + isNaN('') + ": ''<br>";
  res = res + isNaN(true) + ": true<br>";
  res = res + isNaN(undefined) + ": undefined<br>";
  res = res + isNaN('NaN') + ": 'NaN'<br>";
  res = res + isNaN(NaN) + ": NaN<br>";
  res = res + isNaN(0 / 0) + ": 0 / 0<br>";
  res = res + isNaN(null) + ": null<br>";

  document.getElementById("demo").innerHTML = res;
}
</script>

</body>
</html>
*/