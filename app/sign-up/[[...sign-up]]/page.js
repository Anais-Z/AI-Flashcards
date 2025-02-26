import {
    AppBar,
    Container,
    Typography,
    Toolbar,
    Button,
    Box,
  } from "@mui/material";
  import Link from "next/link";
  import { SignUp } from "@clerk/nextjs";
  
  export default function SignUpPage() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Flashcard SaaS
            </Typography>
            <Button color="inherit">
              <Link href="/sign-in" passHref>
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/sign-up" passHref>
                Sign Up
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
  
        <Container maxWidth="sm">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4">Sign Up</Typography>
            <SignUp />
          </Box>
        </Container>
      </>
    );
  }