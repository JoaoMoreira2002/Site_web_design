

$('.carrousel').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        slidesToScroll: 1,
      }}]
  /*responsive: {
  0: {
      items: 1
  },
  426: {
      items: 3
  },
  1000: {
      items: 4
  }
}*/
})
