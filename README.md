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

- **Frontend**: ReactJS <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png" alt="ReactJS" width="20px"/>.
- **Backend**: ExpressJS <img src="data:image/png;base64,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" alt="ExpressJS" width="20px"/> and Node.js <img src="data:image/png;base64,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" alt="Node.js" width="20px"/>.
- **Database**: MongoDB <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170944.png" alt="MongoDB" width="20px"/>.
