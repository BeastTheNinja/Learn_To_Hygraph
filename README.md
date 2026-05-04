# Learn To Hygraph

This is a small blog project built with Hygraph as the headless CMS and a React + TypeScript + Vite frontend. It fetches posts from Hygraph with GraphQL and renders them with Material UI and the Hygraph rich text renderer.

## What This Project Does

The app loads blog posts from Hygraph, shows a loading state and error state, and renders each post as a styled card. Rich text content is displayed with the Hygraph renderer instead of being treated like plain text.

## Features

- Fetches blog posts from Hygraph with GraphQL
- Renders rich text content with `@graphcms/rich-text-react-renderer`
- Uses Material UI for layout, spacing, and typography
- Has a responsive layout with a centered content column
- Includes a separate note file that explains the rich text issue and fix

## Tech Stack

- React
- TypeScript
- Vite
- GraphQL
- Hygraph
- Material UI
- `@graphcms/rich-text-react-renderer`

## Getting Started

1. Install dependencies.

```bash
npm install
```

1. Create a `.env` file in the project root and add your Hygraph endpoint.

```bash
VITE_HYGRAPH_ENDPOINT=your_hygraph_graphql_endpoint
```

1. Start the development server.

```bash
npm run dev
```

1. Build the project.

```bash
npm run build
```

## Project Structure

- [src/main.tsx](src/main.tsx) - App entry point with the MUI theme setup
- [src/App.tsx](src/App.tsx) - Main blog UI and rich text rendering
- [src/hook/useFetchBlog.tsx](src/hook/useFetchBlog.tsx) - Custom data fetching hook
- [src/query/BlogHygraph.ts](src/query/BlogHygraph.ts) - GraphQL query for blog posts
- [src/types/Blog.ts](src/types/Blog.ts) - TypeScript types for blog data
- [HYGRAPH_RICH_TEXT_NOTES.md](HYGRAPH_RICH_TEXT_NOTES.md) - Short explanation of the rich text issue and fix

## Notes

Hygraph rich text should be queried as AST data and passed directly into `RichText`. It should not be parsed as JSON manually or treated like plain text.

If the rich text content later includes embeds, images, links, or custom models, the query may also need `references`.

## Acknowledgements

This project was developed with help from GitHub Copilot. It helped explain:

- how Hygraph rich text should be queried and rendered
- how the Material UI components fit together in the layout
- how the fetch hook and TypeScript types line up with the API data
