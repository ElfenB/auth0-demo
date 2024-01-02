# auth0-demo

This project aims to provide a simple demonstration of implementing Auth0 authentication in a React Single Page Application (SPA).

## Goal

[Auth0](https://auth0.com) allows users to log in using various methods, including creating a new account or using existing credentials from popular social providers such as Google, GitHub, Apple, Microsoft, and more.

## How to Navigate

### Logging In

Click on the Login button located in the top right corner of the application. This will prompt you to log in using Auth0. Choose your preferred method, whether it be creating a new account or utilizing an existing one from a social provider.

### Accessing the Profile Page

Once logged in via Auth0, you will gain access to the Profile page (new tab appears). Here, you can view your profile information, starting with your profile picture. The table below the profile picture displays your user data that is returned by the Auth0 API.

## Running locally

### Clone the Repository

```bash
git clone https://github.com/ElfenB/auth0-demo
cd auth0-demo
```

### Set Environment Variables

Copy the file `.env.example` in the root directory of the project and rename it to `.env`. This file will contain the environment variables needed to run the application.

### Install Dependencies and Start the Development Server

```bash
npm run dev
```

You can now access the application by visiting [http://localhost:5173](http://localhost:5173) in your browser.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.
