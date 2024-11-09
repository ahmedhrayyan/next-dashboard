# Next Dashboard

## Overview

Next Dashboard is a web application built with Next.js, React, and TypeScript. It provides a dashboard interface with various features and components.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn/ui**: A collection of React components for building dashboards and admin panels.
- **Husky**: A Git hook manager for linting and testing code.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.

## Installation

To get started with the project, clone the repository and install the dependencies using `pnpm`:

````sh
pnpm install

## Scripts

You can run these scripts using `pnpm`:

```sh
pnpm run dev
pnpm run build
pnpm run start
pnpm run lint
pnpm run test
````

## Testing

This project uses Jest and React Testing Library for unit testing. To run the tests, use the following command:

```sh
pnpm run test
```

## Project Structure

- `pages/`: Contains the Next.js pages.
- `components/`: Contains the React components.
- `components/ui/`: Contains the UI components from `shadcn/ui`.
- `lib/`: Contains utility functions.
- `services/`: Contains service functions for API calls.

## Configuration

### Jest

The Jest configuration is located in `jest.config.ts`. It includes settings for the test environment, module paths, and more.

### TypeScript

The TypeScript configuration is located in `tsconfig.json`. It includes compiler options and path mappings.
