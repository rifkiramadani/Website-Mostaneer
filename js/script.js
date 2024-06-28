$(".page-scroll").on("click", function (e) {
  const tujuan = $(this).attr("href");
  const elementTujuan = $(tujuan);

  $("html").animate(
    {
      scrollTop: elementTujuan.offset().top,
    },
    300,
    "easeOutExpo"
  );
  e.preventDefault();
});
