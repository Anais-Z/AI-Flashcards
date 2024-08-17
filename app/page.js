
"use client"

import { useState } from "react";
import { Box, Modal, Stack, TextField, Typography, Button, List } from "@mui/material";
import { deepPurple, lightBlue} from '@mui/material/colors';
import Generate from '../app/generate/page'
import { Container } from "postcss";

export default function Home() {
    return(
        <>
      {/* Metadata component */}
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      {/* Navigation bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
        </>
    )
}

