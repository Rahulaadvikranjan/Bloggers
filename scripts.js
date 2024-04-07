document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    const blogPostsContainer = document.getElementById('blogPosts');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const content = document.getElementById('content').value;

        // Create new post element
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        const authorElement = document.createElement('p');
        authorElement.innerHTML = '<strong>Author:</strong> ' + author;

        const dateElement = document.createElement('p');
        const currentDate = new Date();
        dateElement.innerHTML = '<strong>Date:</strong> ' + currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString();

        

        // Append elements to postDiv
        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);
        postDiv.appendChild(authorElement);
        postDiv.appendChild(dateElement);

        // Append postDiv to blogPostsContainer
        blogPostsContainer.appendChild(postDiv);

        // Reset form fields
        blogForm.reset();
    });

    // Sample initial blog posts (for demonstration purposes)
    const initialPosts = [
        {
            title: 'My Wonderful Day',
            author: 'Karan',
            content: 'Today was a great day! I visited the park and had a picnic with my friends.',
        },
        {
            title: 'A Rainy Evening',
            author: 'Ruhi',
            content: 'It rained heavily in the evening. I stayed indoors and watched movies.',
        }
    ];

    // Function to display initial posts
    function displayInitialPosts() {
        initialPosts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            const authorElement = document.createElement('p');
            authorElement.innerHTML = '<strong>Author:</strong> ' + post.author;

            // Append elements to postDiv
            postDiv.appendChild(titleElement);
            postDiv.appendChild(contentElement);
            postDiv.appendChild(authorElement);

            // Append postDiv to blogPostsContainer
            blogPostsContainer.appendChild(postDiv);
        });
    }

    // Display initial posts when the page loads
    displayInitialPosts();
});

// JavaScript: Open and close modal
document.addEventListener('DOMContentLoaded', function() {
    const userModal = document.getElementById('userModal');
    const userInfoForm = document.getElementById('userInfoForm');

    // Show modal when page loads if user info is not provided
    if (!localStorage.getItem('username')) {
        openModal();
    }

    function openModal() {
        userModal.style.display = 'block';
    }

    function closeModal() {
        userModal.style.display = 'none';
    }

    // Save user information and close modal on form submission
    userInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const profilePic = document.getElementById('profilePic').value;

        // Save user info to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('profilePic', profilePic);

        // Close modal
        closeModal();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profilePicUpload = document.getElementById('profilePicUpload');
    const profilePicPreview = document.getElementById('profilePicPreview');

    // Handle profile picture selection
    profilePicUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                imgElement.classList.add('profile-pic-preview');

                // Clear previous preview
                profilePicPreview.innerHTML = '';
                profilePicPreview.appendChild(imgElement);
            };

            reader.readAsDataURL(file);
        }
    });

    // Save user information and close modal on form submission
    userInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;

        // Retrieve selected profile picture
        const profilePicElement = profilePicPreview.querySelector('img');
        const profilePicUrl = profilePicElement ? profilePicElement.src : '';

        // Save user info to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('profilePic', profilePicUrl);

        // Close modal
        closeModal();
    });
});

// JavaScript: Create blog post with user info
blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Retrieve user info from localStorage
    const author = localStorage.getItem('username');
    const profilePic = localStorage.getItem('profilePic');

    // Create new post element
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    const authorElement = document.createElement('p');
    authorElement.innerHTML = '<strong>Author:</strong> ' + author;

    const profilePicElement = document.createElement('img');
    profilePicElement.src = profilePic;
    profilePicElement.alt = 'Profile Picture';
    profilePicElement.classList.add('profile-pic'); // Add a class for styling

    const dateElement = document.createElement('p');
    const currentDate = new Date();
    dateElement.textContent = formatDate(currentDate);
    dateElement.classList.add('date-time'); // Add a class for styling

    // Append elements to postDiv
    postDiv.appendChild(titleElement);
    postDiv.appendChild(contentElement);
    postDiv.appendChild(authorElement);
    postDiv.appendChild(profilePicElement);
    postDiv.appendChild(dateElement);

    // Append postDiv to blogPostsContainer
    blogPostsContainer.appendChild(postDiv);

    // Reset form fields
    blogForm.reset();
});
