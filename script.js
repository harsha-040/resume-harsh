function goToPage(pageName) {
    window.location.href = pageName;
  }
  

  var yearSpanList = document.querySelectorAll("#year");
  var currentYear = new Date().getFullYear();
  yearSpanList.forEach(function (span) {
    span.textContent = currentYear;
  });
  

  $(document).ready(function () {
    $("#highlightBtn").click(function () {
     
      $("h2:contains('Technical Skills')").next("ul").toggleClass("highlight");
    });
  });
  