# Learn To Hygraph

A small blog project built with Hygraph as the headless CMS and a React + TypeScript + Vite frontend. The goal of this assignment is to combine a headless CMS, GraphQL, and query-based data fetching to build a dynamic blog where the content is managed from Hygraph.

## Assignment Goal

Build a blog page that fetches posts from Hygraph and renders them in the frontend with GraphQL. The content should be maintained in the CMS so new posts can be added without changing the frontend code.

## Requirements

- Create a content model in Hygraph for blog posts
- Add at least 5 blog posts
- Fetch and display the blog posts in the frontend using GraphQL
- Style the page with a component library such as Material UI or Shadcn
- Make the layout responsive

## Bonus Features

If time allows, you can also add the following:

- Search blog posts by title
- Filter posts to show only the newest posts from today
- Sort posts by date or name using a dropdown menu

## Tech Stack

- React
- TypeScript
- Vite
- GraphQL
- Hygraph
- Material UI
- Optional: TanStack Query for data fetching

## Getting Started

1. Install dependencies:

```bash
npm install
```

1. Create a `.env` file in the project root and add your Hygraph credentials:

```bash
VITE_HYGRAPH_ENDPOINT=your_hygraph_graphql_endpoint
VITE_HYGRAPH_TOKEN=your_hygraph_api_token
```

1. Start the development server:

```bash
npm run dev
```

1. Build the project:

```bash
npm run build
```

## Project Structure

- `src/main.tsx` - App entry point
- `src/App.tsx` - Main application component
- `public/` - Static assets

## Submission

Submit the assignment with a link to your GitHub repository.

## Notes

This repository currently contains the starter setup. The blog UI, Hygraph schema, and GraphQL fetching logic can be added on top of this foundation.

For a short explanation of the Hygraph rich text issue we hit and the correct setup, see [HYGRAPH_RICH_TEXT_NOTES.md](HYGRAPH_RICH_TEXT_NOTES.md).
