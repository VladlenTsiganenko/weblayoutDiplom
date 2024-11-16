const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()

    const blockId = anchor.getAttribute('href').substring(1);

    document.getElementById(blockId).scrollIntoView(
      {
        behavior: 'smooth',
        block: 'start',
      }
    );
  });
});
