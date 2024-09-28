# TRON Transfer Application

## Overview

This full-stack application allows users to transfer TRX (TRON's cryptocurrency) using a modern, futuristic user interface. The application consists of a Node.js backend for handling TRON blockchain interactions and a React frontend for user interaction.

## Features

- Secure TRX transfers using private keys
- Futuristic UI design with animations and glassmorphism effects
- Real-time transaction status updates
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Git

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/trix0831/tronTry
   cd tron-transfer-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

## Configuration

1. Backend Configuration:
   - Create a `.env` file in the `backend` directory
   - Add the following environment variables:
     ```
     PORT=3001
     TRON_NETWORK=shasta  # Use 'mainnet' for production
     ```

2. Frontend Configuration:
   - Update the API endpoint in `frontend/src/App.js` if your backend is not running on `http://localhost:3001`

## Usage

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

4. Use the application to transfer TRX:
   - Enter your private key
   - Enter the recipient's TRON address
   - Enter the amount of TRX to send (in SUN)
   - Click "Transfer TRX"

## Security Considerations

- This application is for demonstration purposes only. In a production environment, never send private keys directly to a server.
- Always verify transaction details before confirming a transfer.
- Use the Shasta testnet for development and testing before deploying to the mainnet.

## Contributing

Contributions to the TRON Transfer Application are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` file for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/tron-transfer-app](https://github.com/your-username/tron-transfer-app)

## Acknowledgements

- [TRON Developer Hub](https://developers.tron.network/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)