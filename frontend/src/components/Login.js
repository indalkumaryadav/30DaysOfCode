import React from "react";
import {
  Container,
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Container>
      <Grid container justify="center" style={{ padding: 20 }}>
        <Grid item md={6}>
          <Typography variant="h4" align="center">
            Login
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            margin="normal"
            placeholder="email"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            margin="normal"
            placeholder="password"
          />

          <Button fullWidth style={{ backgroundColor: "red", marginTop: 20 }}>
            Login
          </Button>
          <Typography variant="h6" align="right" style={{ marginTop: 8 }}>
            create an account <Link to="/signup">Click Here</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
