# Storybooks fullstack-application
install nodeJs (if not installed) --> https://nodejs.org/en/download/

# Install all dependencies and devDependencies
npm install

# Config
Add MongoDB URI and Google OAuth credentials in config.env file

# Run application
run in development-mode (app uses morgan for login)
npn run dev
Run production-mode
npm start

# Application
localhost:4000 (login page)
Login with Google credentials
localhost:4000/dashboard (dashboard page)
