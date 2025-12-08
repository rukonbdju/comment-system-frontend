# 🌐 Real-Time Commenting Platform Frontend

This repository contains the Next.js frontend application built to consume the **Real-Time Comment & Reaction API `(http://localhost:5000)`.** It features an efficient UI built with **React, Redux Toolkit for state management, and real-time updates via Socket.IO.**


It includes a real-time reaction system using **Socket.IO** for instantaneous count updates.

## ✨ Features

* **Layered State Management:** Uses Redux Toolkit for predictable and scalable state, especially for managing comment lists and user authentication.
* **Real-Time UI:** Utilizes custom React hooks and Socket.IO-Client to display instantaneous updates to like/dislike counts.
* **TypeScript:** Full type safety across components and data layers.

## 📦 Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

## ⚙️ Project Setup

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-link>
cd <repo-name>
npm install
npm run dev
```

### 2. Environment Variables

Create a file named .env in the root directory and add the following variables:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_WS_BASE_URL=http://localhost:5000
```

### 3. Run Application

Clone the repository and install dependencies:

```bash
npm run build
npm run start
```