// Function to fetch and load libraries from the JSON file
async function loadLibraries() {
    const response = await fetch('libraries.json');
    const data = await response.json();
    return data;
}

// Function to randomly select a few libraries from all categories
async function loadRandomLibraries(numberOfLibraries = 5) {
    const libraries = await loadLibraries();
    const librariesList = document.getElementById('libraries-list');
    librariesList.innerHTML = ''; // Clear current list

    let allLibraries = [];

    // Collect all libraries from all categories
    Object.values(libraries).forEach(category => {
        allLibraries = allLibraries.concat(category); // Add all libraries to the list
    });

    // Shuffle the libraries array to get random libraries
    allLibraries = allLibraries.sort(() => Math.random() - 0.5);

    // Limit to the number of libraries we want to display
    allLibraries.slice(0, numberOfLibraries).forEach(lib => {
        const libraryCard = document.createElement('div');
        libraryCard.classList.add('library-card');
        libraryCard.innerHTML = `
            <h3>${lib.name}</h3>
            <p>${lib.description}</p>
            <div class="bash-box">
                <p><strong>Installation:</strong> ${lib.installation}</p>
                <button class="copy-btn" onclick="copyToClipboard('${lib.installation}')">Copy</button>
            </div>
        `;
        librariesList.appendChild(libraryCard);
    });
}

// Function to filter libraries based on the search input
async function searchLibrary() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    const librariesList = document.getElementById('libraries-list');
    librariesList.innerHTML = ''; // Clear current list

    if (input.trim() === '') {
        return; // If input is empty, return without any action
    }

    const libraries = await loadLibraries();
    let found = false;

    // Loop through all libraries and display only those that match the search input
    Object.values(libraries).forEach(category => {
        category.forEach(lib => {
            if (lib.name.toLowerCase().includes(input)) {
                const libraryCard = document.createElement('div');
                libraryCard.classList.add('library-card');
                libraryCard.innerHTML = `
                    <h3>${lib.name}</h3>
                    <p>${lib.description}</p>
                    <div class="bash-box">
                        <p><strong>Installation:</strong> ${lib.installation}</p>
                        <button class="copy-btn" onclick="copyToClipboard('${lib.installation}')">Copy</button>
                    </div>
                `;
                librariesList.appendChild(libraryCard);
                found = true;
            }
        });
    });

    // If no match found, show a message
    if (!found) {
        librariesList.innerHTML = '<p>No libraries found matching your search!</p>';
    }
}

// Event listener for the search input field to trigger real-time search
document.getElementById('search-bar').addEventListener('input', function() {
    searchLibrary(); // Trigger search each time the user types
});

// Copy function to copy the installation command to clipboard
function copyToClipboard(command) {
    const tempInput = document.createElement('input');
    tempInput.value = command;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Provide feedback to the user
    alert('Installation command copied to clipboard!');
}

// Initializing the page by loading random libraries when the page is loaded
window.onload = function() {
    loadRandomLibraries(5); // Load 5 random libraries on page load
};

// Initialize AOS animation
AOS.init({
    easing: 'ease-in-out',
    duration: 1200,
    once: true,
});

// Function to fetch and load libraries from the JSON file
async function loadLibraries() {
    const response = await fetch('libraries.json');
    const data = await response.json();
    return data;
}

// Function to filter libraries based on category
async function filterLibraries(category) {
    const libraries = await loadLibraries();
    const librariesList = document.getElementById('libraries-list');
    librariesList.innerHTML = ''; // Clear current list

    if (!libraries[category]) {
        librariesList.innerHTML = '<p>No libraries found for this category.</p>';
        return;
    }

    libraries[category].forEach(lib => {
        const libraryCard = document.createElement('div');
        libraryCard.classList.add('library-card');
        libraryCard.innerHTML = `
            <h3>${lib.name}</h3>
            <p>${lib.description}</p>
            <div class="bash-box">
                <p><strong>Installation:</strong> ${lib.installation}</p>
                <button class="copy-btn" onclick="copyToClipboard('${lib.installation}')">Copy</button>
            </div>
        `;
        librariesList.appendChild(libraryCard);
    });
}

// Copy function to copy the installation command to clipboard
function copyToClipboard(command) {
    const tempInput = document.createElement('input');
    tempInput.value = command;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Provide feedback to the user
    alert('Installation command copied to clipboard!');
}

// Initialize AOS animation
AOS.init({
    easing: 'ease-in-out',
    duration: 1200,
    once: true,
});

// Function to show random libraries on initial load
window.onload = function() {
    loadRandomLibraries(5); // Load 5 random libraries on page load
};

// Function to load random libraries
async function loadRandomLibraries(numberOfLibraries = 5) {
    const libraries = await loadLibraries();
    const librariesList = document.getElementById('libraries-list');
    librariesList.innerHTML = ''; // Clear current list

    let allLibraries = [];

    // Collect all libraries from all categories
    Object.values(libraries).forEach(category => {
        allLibraries = allLibraries.concat(category); // Add all libraries to the list
    });

    // Shuffle the libraries array to get random libraries
    allLibraries = allLibraries.sort(() => Math.random() - 0.5);

    // Limit to the number of libraries we want to display
    allLibraries.slice(0, numberOfLibraries).forEach(lib => {
        const libraryCard = document.createElement('div');
        libraryCard.classList.add('library-card');
        libraryCard.innerHTML = `
            <h3>${lib.name}</h3>
            <p>${lib.description}</p>
            <div class="bash-box">
                <p><strong>Installation:</strong> ${lib.installation}</p>
                <button class="copy-btn" onclick="copyToClipboard('${lib.installation}')">Copy</button>
            </div>
        `;
        librariesList.appendChild(libraryCard);
    });
};

// Word-by-word animation
document.addEventListener('DOMContentLoaded', function () {
    const h1Text = document.querySelector('.word-animate');
    const words = h1Text.textContent.split(' '); // Split the text by spaces
    h1Text.innerHTML = ''; // Empty the content of h1

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' '; // Add a space to separate words
        span.style.animationDelay = `${index * 0.5}s`; // Delay each word animation
        h1Text.appendChild(span);
    });
});
// Add scroll event listener to change navbar background when scrolling
window.onscroll = function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 50) { // Scroll position, when to add background
        navbar.classList.add('scrolled'); // Add the "scrolled" class when scrolled down
    } else {
        navbar.classList.remove('scrolled'); // Remove the "scrolled" class when at the top
    }
};

