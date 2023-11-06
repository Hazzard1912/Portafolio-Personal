import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <AppBar position="static" className="navigation__bar">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          className="navigation__logo"
        >
          <span className="navigation__logo__img">jh</span> desarrollo web
        </Typography>
        <Button color="inherit" href="#home" className="navigation__button">
          Inicio
        </Button>
        <Button color="inherit" href="#about" className="navigation__button">
          Sobre mí
        </Button>
        <Button color="inherit" href="#projects" className="navigation__button">
          Proyectos
        </Button>
        <Button color="inherit" href="#contact" className="navigation__button">
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  );
};
