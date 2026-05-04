# Hygraph Rich Text Notes

This note explains why the rich text renderer originally broke and what the correct setup is in this project.

## What went wrong

At first, the app tried to render Hygraph rich text as if it were plain text.

That caused problems because:

- `@graphcms/rich-text-react-renderer` does not want a string.
- It wants the rich text AST object returned by Hygraph.
- Calling `JSON.parse(...)` on the wrong value failed when the field was `undefined`.

The error you saw was:

```text
Uncaught SyntaxError: "undefined" is not valid JSON
```

That means the code tried to parse a value that did not exist in the response.

## The correct idea

Hygraph rich text should be queried as `raw` and passed directly into `RichText`.

The key point is that the renderer expects the AST structure itself, not a manually parsed string.

## What the code now does

1. Query the rich text field as `paragraph { raw }`.
2. Type that field as `RichTextContent` from `@graphcms/rich-text-types`.
3. Pass `blog.paragraph.raw` directly into `RichText`.
4. Do not use `JSON.parse`.

## Why this works

The Hygraph renderer understands the AST format directly.

So if the API returns something like:

```tsx
const content = {
  children: [
    {
      type: 'paragraph',
      children: [
        {
          text: 'Hello World!',
        },
      ],
    },
  ],
};
```

then this is enough:

```tsx
<RichText content={content} />
```

## Steps to remember

1. Install the package:

```bash
npm i @graphcms/rich-text-react-renderer @graphcms/rich-text-types
```

1. Query the rich text field as `raw` in GraphQL.

2. Type the field as `RichTextContent`.

3. Render it directly:

```tsx
<RichText content={blog.paragraph.raw} />
```

1. Add `references` later if the content contains embeds, images, links, or custom models.

## Common mistakes

- Using `documentToReactComponents` from Contentful instead of the Hygraph renderer.
- Treating the rich text value as plain text.
- Parsing a value with `JSON.parse` even though the renderer already wants the object form.
- Querying `text` when the rich text field should be queried as `raw`.

## If embeds are added later

If the rich text field contains embedded assets or custom models, the query usually needs `references` as well.

Then the renderer becomes something like:

```tsx
<RichText content={content.raw} references={content.references} />
```

That is only needed when the rich text content includes embeds.

## Short version

Hygraph rich text is not regular string data.
It should be queried as AST data and rendered directly with `RichText`.

## Link to the hygraph rich text renderer

<https://hygraph.com/blog/hygraph-react-rich-text-renderer>

###### This is documented by AI Co-pilot
