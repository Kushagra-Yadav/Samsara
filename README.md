# Samsara
A news website for IIIT Jabalpur to share news and update of institute.

This web application allows users to read news articles, like articles without login, and provides additional features such as admin login, 
text-to-speech functionality, domain-based filtering, and image storage using Multer.

Features
--------

*   **Read Articles**: Users can access news articles without the need to log in.
*   **Like Articles**: Users can like articles, and their likes are stored in local storage to prevent continuous liking by refreshing.
*   **Admin Login**: Admins have access to publish articles.
*   **Text-to-Speech**: Users can listen to the articles using text-to-speech functionality.
*   **Domain Categories**: Articles are categorized into domains such as cultural, sports, technical, and academic.
*   **Search Functionality**: Users can search for articles, and the system filters and returns articles matching any domain.
*   **Image Storage**: Multer is used for storing article images.
*   **Admin Authentication**: Admins are authenticated with cookies to prevent frequent logins.
*   **Logout Functionality**: Logged-in users, including admins, can log out and clear cookies.

## Technology Stack

- **Frontend**: ReactJS <img src="react_icon.png" alt="ReactJS" width="20px"/>.
- **Backend**: ExpressJS <img src="express_icon.png" alt="ExpressJS" width="20px"/> and Node.js <img src="nodejs_icon.png" alt="Node.js" width="20px"/>.
- **Database**: MongoDB <img src="mongodb_icon.png" alt="MongoDB" width="20px"/>.
