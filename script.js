// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
    typingLoader('Loading...', function () {
        document.getElementById('question').style.display = 'none';
        displayYesImage();
    });
    

    } else if (option === 'no') {
        // Change text on the "No" button
        document.getElementById('no-button').innerText = 'No?';

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';

        // 🔹 Add No image (only one at a time)
        var imageContainer = document.getElementById('image-container');

        // Remove existing No image if it exists
        var existingNoImage = document.getElementById('no-image');
        if (existingNoImage) {
            existingNoImage.remove();
        }

        // Create new No image
        var noImage = new Image();
        noImage.src = 'NoImage.jpeg'; // change extension if needed
        noImage.alt = 'No Image';
        noImage.id = 'no-image';

        // Make it smaller
        noImage.style.width = '300px';
        noImage.style.height = 'auto';
        noImage.style.marginTop = '10px';

        imageContainer.appendChild(noImage);

    } else {
        alert('Invalid option!');
    }
}

function typingLoader(text, callback) {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var loader = document.createElement('p');
    loader.style.fontSize = '28px';
    loader.style.fontFamily = "'Sacramento', cursive";
    imageContainer.appendChild(loader);

    var index = 0;
    var interval = setInterval(function() {
        loader.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
            clearInterval(interval);
            setTimeout(callback, 500);
        }
    }, 150);
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image and text will be displayed
    var imageContainer = document.getElementById('image-container');

    // Clear previous content (optional, remove if you want multiple cats)
    imageContainer.innerHTML = '';

    // Create a new Image element for the cat
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Cat image file
    catImage.alt = 'Cat';

    // When the image loads, add both image and text
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

function displayYesImage() {
    document.getElementById('image-container').innerHTML = '';

    var imageContainer = document.getElementById('image-container');

    // Image
    var YesImage = new Image();
    YesImage.src = 'YesImage.png';
    YesImage.alt = 'Yes Image';
    YesImage.classList.add('fade-in');

    // Title
    var title = document.createElement('p');
    title.textContent = 'Simple Date 💖';
    title.classList.add('fade-in');
    title.style.fontFamily = "'Sacramento', cursive";
    title.style.fontSize = '42px';
    title.style.margin = '10px 0 0';

    // Details
    var details = document.createElement('p');
    details.textContent = 'Ipponyari Santa Rosa | February 14, 2026 | 6:00 PM';
    details.classList.add('fade-in');
    details.style.fontFamily = "'Sacramento', cursive";
    details.style.fontSize = '28px';
    details.style.margin = '0';

    YesImage.onload = function () {
        imageContainer.appendChild(YesImage);
        imageContainer.appendChild(title);
        imageContainer.appendChild(details);

        document.getElementById('options').style.display = 'none';
    };
}
