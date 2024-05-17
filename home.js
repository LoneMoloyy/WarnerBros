document.querySelector('.play').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    
    var trailer = document.querySelector('.trailer');
    var video = document.getElementById('myVideo');
    
    // Toggle the visibility of the trailer and play/pause the video
    if (trailer.classList.contains('active')) {
      trailer.classList.remove('active');
      video.pause();
    } else {
      trailer.classList.add('active');
      video.play();
    }
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    var trailer = document.querySelector('.trailer');
    var video = document.getElementById('myVideo');
    
    // Hide the trailer and pause the video when the close button is clicked
    trailer.classList.remove('active');
    video.pause();
  });

  function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    banner.style.background = `url("images/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}



