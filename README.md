# Chaterine
This repository contains a basic chat app that uses the following technologies:

• Typescript
• React (Hooks, Context)
• Express
• WebSockets (socket.io)
• Styled components

I have used a boiler-plate React/Node/Express structure for this challenge.
The boiler-plate code I've used is also my own code: https://github.com/selmanbey/react-express-boilerplate

Following is the relevant information to run the app:
  
# Installation

1. Download the repository to your local computer

# Getting Started

Before getting started, you'll need to:

1. Go to the project folder.
1. Run  `npm install`  in the root directory for server dependencies
1. Run `npm run install-client` in the root directory for client dependencies

# Development

Open two terminal tabs and run the following commands in parallel:

1. Make sure you are in the root directory
1. Run `npm run start-server` in one terminal (runs the express server in `localhost:8000`)
1. Run `npm run start-client` in the other terminal (runs the react app in `localhost:3000`)
1. Go to `localhost:3000`

# Production

1. Run `npm run build` in the root directory
1. Go to `localhost:8000`