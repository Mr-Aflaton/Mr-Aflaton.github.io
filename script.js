document.addEventListener('DOMContentLoaded', function () {
  // Get references to HTML elements
  const yearSelect = document.getElementById('year');
  const apolloMissionSelect = document.getElementById('apolloMission');
  const daySelect = document.getElementById('day');
  const loadButton = document.getElementById('loadImages');
  const seismometerImagesDiv = document.getElementById('seismometerImages');

  // Define day options for different Apollo missions
  const dayOptions = {
    s11: [
      202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215,
      231, 232, 233, 234, 235, 236, 237, 238
    ],
    s12: [
      323, 325, 327, 329, 331, 333, 335, 337, 339, 341, 343, 345, 347, 349,
      351, 353, 355, 357, 359, 361, 363, 365,
      324, 326, 328, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348, 350,
      352, 354, 356, 358, 360, 362, 364
    ],
    s14: [
      0
    ],
    s15: [
      0
    ],
    s16: [
      0
    ],
    // Add options for other Apollo missions if needed
  };

  // Function to populate the year dropdown
  function populateYearDropdown() {
    // Replace this with your logic to fetch available years
    const availableYears = [1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977]; // Example available years

    // Clear existing options
    yearSelect.innerHTML = '';

    // Populate year dropdown
    availableYears.forEach(year => {
      const option = document.createElement('option');
      option.textContent = year;
      option.value = year;
      yearSelect.appendChild(option);
    });
  }

  // Function to populate the day dropdown based on the selected Apollo mission
  function populateDayDropdown() {
    // Clear existing options
    daySelect.innerHTML = '';

    // Get the selected Apollo mission
    const selectedApolloMission = apolloMissionSelect.value;

    // Retrieve day options based on the selected mission
    const missionDayOptions = dayOptions[selectedApolloMission];

    // Populate day dropdown
    missionDayOptions.forEach(day => {
      const option = document.createElement('option');
      option.textContent = day;
      option.value = day;
      daySelect.appendChild(option);
    });
  }

  // Function to open the modal
  function openModal(imageUrl) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    if (modal.style.display != "block") {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
    
    modalImage.src = imageUrl;
  }

  function closeImage() {
    modal.style.display = 'none';
  }

  
  const close_button = document.getElementsByClassName("close")[0];
  close_button.addEventListener("click", closeImage);

  // Function to load images based on user's selections
  function loadImages() {
    const selectedYear = yearSelect.value;
    const selectedApolloMission = apolloMissionSelect.value;
    const selectedDay = daySelect.value;

    // Construct the URL for the seismometer image
	const imageUrl = `./collected_data_png/${selectedApolloMission}/${selectedYear}/${selectedDay}/xa.${selectedApolloMission}..att.${selectedYear}.${selectedDay}.0.png`;


    // Display the image in a modal
    openModal(imageUrl);
  }

  // Rest of your code...

  // Add event listeners to the dropdowns for change events
  yearSelect.addEventListener('change', populateDayDropdown);
  apolloMissionSelect.addEventListener('change', populateDayDropdown);

  // Add event listener to the "Load Images" button
  loadButton.addEventListener('click', loadImages);

  // Populate year dropdown when the page loads
  populateYearDropdown();
  populateDayDropdown();
  
});

