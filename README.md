# Compliance Atlas

This repository provides a minimal starting point for a Governance, Risk, and Compliance (GRC) system using Node.js.

## Getting Started

1. **Install dependencies:** No external dependencies are required.
2. **Run the server:**
   ```bash
   npm start
   ```
   The server listens on port `3000` by default and returns a simple JSON response at `/`.
3. **Run tests:**
   ```bash
   npm test
   ```
   This uses Node's built-in test runner.

## Project Structure

- `src/index.js` – basic HTTP server that exposes a minimal API endpoint.
- `src/risk.js` – simple risk evaluation helper used by the server.
- `tests/` – Node test files verifying core logic.

This codebase is intended as a foundation you can extend with additional GRC features such as policy management, audit tracking, and reporting.
