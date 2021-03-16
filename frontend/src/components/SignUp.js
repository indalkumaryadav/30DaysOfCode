import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Grid,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function SignUp() {
  const [createdUser, setCreatedUser] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => userCreate(data);

  function userCreate(data) {
    axios
      .post(`http://127.0.0.1:8000/account/user/register/`, data)
      .then((data) => {
        console.log(data.data.message);
      });
  }
  return (
    <Container>
      <Grid container justify="center" style={{ padding: 20 }}>
        <Grid item md={6}>
          <Typography variant="h4" align="center">
            Register
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              fullWidth
              name="email"
              inputRef={register}
              label="Email"
              margin="normal"
              placeholder="email"
            />
            <TextField
              fullWidth
              name="password"
              inputRef={register}
              variant="outlined"
              label="Password"
              margin="normal"
              placeholder="password"
            />

            <Button
              type="submit"
              fullWidth
              style={{ backgroundColor: "red", marginTop: 20 }}
            >
              Register
            </Button>
          </form>
          <Typography variant="h5" align="right" style={{ marginTop: 8 }}>
            Already have an account <Link to="/login">Click Here</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
