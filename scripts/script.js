// Function to switch sections
function switchSection(sectionId) {
  // Hide all sections
  $('.section').hide();

  // Show the selected section
  $(sectionId).show();
}

// Event listener for navbar links
$('.nav-link').on('click', function(e) {
  e.preventDefault();
  var sectionId = $(this).attr('href');
  switchSection(sectionId);
});

// Set the initial active section
switchSection('#home');

function openModal(imageSrc, caption) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');
  var modalCaption = document.getElementById('modal-caption');

  modal.style.display = 'block';
  modalImage.src = imageSrc;
  modalCaption.innerText = caption;
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Function to open the lightbox
function openLightbox() {
  // Get the clicked image source
  var imageSrc = event.target.src;
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");

  // Set the lightbox image source
  lightboxImage.src = imageSrc;

  // Display the lightbox
  lightbox.style.display = "block";

    // Add event listener for "Esc" key press
  document.addEventListener("keydown", closeLightboxOnEsc);
}

// Function to close the lightbox
function closeLightbox() {
  var lightbox = document.getElementById("lightbox");

  // Hide the lightbox
  lightbox.style.display = "none";

    // Remove event listener for "Esc" key press
  document.removeEventListener("keydown", closeLightboxOnEsc);
}

// Function to close the lightbox on "Esc" key press
function closeLightboxOnEsc(event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
}


