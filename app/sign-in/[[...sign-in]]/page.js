import { SignIn } from "@clerk/nextjs";
import {
    AppBar,
    Container,
    Typography,
    Toolbar,
    Button,
    Box,
  } from "@mui/material";
import Link from "next/link";


  export default function SignUpPage(){
        return(
            <>
            <Container maxWidth='sm'>
                <AppBar position="static" sx={{backgroundColor:  '#31f51b5'}}>
                    <Toolbar>
                        <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                        }}
                        >
                            FlashKards AI
                        </Typography>

                        <Link href="/login"> Login </Link>
                        <Link href="/signup"> Sign Up </Link>
                    </Toolbar>

                </AppBar>

                <Box display = "flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                >

                    <Typography variant="h4"> Sign In</Typography>
                    <SignIn/>

                </Box>

            </Container>
            </>
        )
  }