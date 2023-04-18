import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return ( 

    <AuthLayout title="Crea una cuenta">
      <form>
        <Grid container>

          <Grid item
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            >Nombre completo</TextField>
          </Grid>

          <Grid item
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label="Correo electronico"
              type="email"
              placeholder="Correo electronico"
              fullWidth
            >Correo electronico</TextField>
          </Grid>

          <Grid item
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField
              label="Contrasena"
              type="password"
              placeholder="Contrasena"
              fullWidth
            >Contrasena</TextField>
          </Grid>

          <Grid container 
            spacing={ 2 }
            sx={{ mb: 2, mt: 1}}
          >
            <Grid item xs={ 12 }>
              <Button
                variant="contained"
                fullWidth
              >Login</Button>
            </Grid>
          </Grid>

          <Grid 
            container 
            direction="row" 
            justifyContent="end"
          >
            <Grid item>
                <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
                <Link component={ RouterLink } color="inherit" to="/auth/login">
                  ingresa
                </Link>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  );
}
 
