import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";
import VideoFutbol from "./Video/VideoFutbol1.mp4";
import { Footer } from '../../Components/Footer/Footer';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

export function Landing() {
  const scrollToSection = () => {
    const section = document.querySelector('.third-section');
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="landing">

{/* SECCIÓN UNO */}
      <section className="first-section">
        <div className="video-overlay"></div> {/* Velo negro casi transparente */}
        <video src={VideoFutbol} autoPlay loop muted></video>
        <div className="column">
        <h1 className="scouters">
              Scouters <span className='NewEra'>NEW ERA</span>
            </h1>
        <div className="green-rectangle"></div>
        <div className='parrafo'>     
          <p>Bienvenidos a <span className='green-text'>Scouters New Era</span>, la herramienta revolucionaria para scouts de fútbol. <br /> <br />
            Genera informes en tiempo real de los jugadores mientras los observas en acción y obtén una media precisa para comparar nuevos talentos ojeados.<br /> <br />
            Potencia tu capacidad de evaluación con datos objetivos y análisis detallados. ¡Únete ahora y lleva tu scouting al siguiente nivel!</p>
        </div> 

        <div className='botones'>
          <Link to="/registro"><button>REGÍSTRATE</button></Link>
          <Link to="/login"><button>INICIA SESIÓN</button></Link>         
        </div>
        
        </div>
        <div className="column">
          <img className='balon' src="/assets/fotos/balon.png" alt="Imagen de la primera sección" />      
        </div>
      </section>



    {/* SECCIÓN DOS */}
      <section className="second-section">
        <div className="column1-section2">
          <h2>Crea, Gestiona y Compara Informes de Jugadores</h2>
          <br />
          <p>Potencia tu scouting con informes de jugadores personalizados. <br /> 
          Toma decisiones acertadas y descubre nuevos talentos en el mundo del fútbol.</p>
          <button onClick={scrollToSection}>Leer Más</button>
        </div>
        <div className="column2-section2">       
          <img src="/assets/fotos/futbol3.jpg" alt="Imagen de la segunda sección" />
        </div>
      </section>



      {/* SECCIÓN TRES */}
      <section className="third-section">
        <div className='service-header'>
          <h3>UNA HERRAMIENTA, <span className="highlight">MUCHAS SOLUCIONES</span></h3>
          <p>Descubre cómo nuestra herramienta revoluciona el mundo del scouting de fútbol</p>
        </div>
  <div className='service-container'>
    <div className="service-row">
      <div className="service">
        <SportsSoccerIcon />
      <p>Sistema de seguimiento de jugadores</p>
    </div>
    <div className="service">
      <CompareArrowsIcon />
      <p>Comparación de estadísticas y rendimiento</p>
    </div>
    <div className="service">
      <AssessmentIcon />
      <p>Métricas avanzadas de jugadores</p>
    </div>
    <div className="service">
      <GroupIcon />
      <p>Gestión de equipos y plantillas</p>
    </div>
  </div>
  <div className="service-row">
    <div className="service">
      <EventNoteIcon />
      <p>Calendario de partidos y eventos</p>
    </div>
    <div className="service">
      <PlaylistAddCheckIcon />
      <p>Seguimiento de progresión de jugadores</p>
    </div>
    <div className="service">
      <PeopleIcon />
      <p>Análisis de rendimiento colectivo</p>
    </div>
    <div className="service">
      <SettingsIcon/>
      <p>Personalización y configuración avanzada</p>
    </div>
  </div>
  </div>
</section>
    <Footer/>
    </div>
  );
}



