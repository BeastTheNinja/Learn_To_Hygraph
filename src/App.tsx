import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { useFetchBlog } from "./hook/useFetchBlog";
import { BlogGraphQL } from "./query/BlogHygraph";
import type { BlogPost } from "./types/Blog";
import { RichText } from "@graphcms/rich-text-react-renderer";

function App() {
  const { data, loading, error } = useFetchBlog(BlogGraphQL);
  const errorMessage = error ? String(error) : null;
  // Card = én blogpost pr. post i listen.
  const blogCards = data?.blogs.map((blog: BlogPost) => {
    return (
      <Card
        key={blog.headLine}
        elevation={0}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 16px 40px #1f293714',
        }}
      >
        {/* CardContent = den indvendige padding i kortet */}
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          {/* Stack = holder titel, metadata og indhold adskilt */}
          <Stack spacing={2}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
              {blog.headLine}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By {blog.author} · {blog.published}
            </Typography>

            {/* Box = wrapper til rich text, så indholdet kan styles */}
            <Box
              sx={{
                '& p': {
                  mt: 0,
                  mb: 2,
                  lineHeight: 1.8,
                  color: 'text.primary',
                },
                '& p:last-child': {
                  mb: 0,
                },
                '& h1, & h2, & h3, & h4, & h5, & h6': {
                  mt: 3,
                  mb: 1,
                  fontWeight: 700,
                },
                '& ul, & ol': {
                  pl: 3,
                  mb: 2,
                },
                '& a': {
                  color: 'primary.main',
                },
              }}
            >
              <RichText content={blog.paragraph.raw} />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    );
  });

  return (
    // Box = yderste wrapper med baggrund og spacing.
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f4f1ea 0%, #faf7f2 100%)',
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Container = centrerer indholdet og begrænser bredden. */}
      <Container maxWidth="md">
        {/* Stack = lægger sektionerne lodret med fast afstand. */}
        <Stack spacing={4}>
          <Box>
            {/* Typography = MUI's tekst-komponent til overskrifter og brødtekst. */}
            <Typography variant="overline" sx={{ letterSpacing: 3, color: 'primary.main' }}>
              Learn To Hygraph
            </Typography>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mt: 1, mb: 1 }}>
              Hygraph blog posts
            </Typography>
            <Typography variant="body1" color="text.secondary">
              A small React + TypeScript demo showing blog content rendered from Hygraph rich text.
            </Typography>
          </Box>

          {loading && <Typography>Loading...</Typography>}
          {errorMessage && <Typography color="error">Error: {errorMessage}</Typography>}

          {blogCards}
        </Stack>
      </Container>
    </Box>
  )
}
export default App
