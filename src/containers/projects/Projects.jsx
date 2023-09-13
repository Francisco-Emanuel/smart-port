import * as React from "react";
import { FaBackspace } from 'react-icons/fa'

import "swiper/css";
import "swiper/css/pagination";
import "./projects.css";
import Italia from "../../assets/italia.png";
import ItaliaM from "../../assets/pizzaria.png";
import Burguer from "../../assets/burguer.png";
import BurguerM from "../../assets/hamburgueria.png";
import Loja from "../../assets/modalforyou.png";
import LojaM from "../../assets/loja.png";
import Gpt from "../../assets/gpt.png";
import Rest from "../../assets/restlogo.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "block",
  overflow: "scroll",
  height: "100%",
  outline: "none",
};

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [pinto, setPinto] = React.useState(false);
  const handlePinto = () => setPinto(true);
  const handlePintoc = () => setPinto(false);

  const [penis, setPenis] = React.useState(false);
  const handlePenis = () => setPenis(true);
  const handlePenisc = () => setPenis(false);

  return (
    <section>
      <div className="smart__projects">
        <div className="smart__projects-title">
          <h1>nosso trabalho</h1>
          <div className="smart__projects-title_sub">
            <div />
            <p>Portfólio</p>
            <div />
          </div>
        </div>
        <div className="smart__projects-design">
          <div className="smart__projects-design_title">
            <div />
            <h1>design</h1>
          </div>
          <div className="smart__projects-design_cards">
              <div className="smart__projects-card">
                <Button onClick={handleOpen}>
                  <img
                    src={Italia}
                    className="smart__projects-card_img"
                    alt="dev"
                  />
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                
                  <Box sx={style}>
                    <Button onClick={handleClose}>
                      <FaBackspace size={60} color="#ffff00" />
                    </Button>
                    <img src={ItaliaM} alt="sla" id="italia" />
                  </Box>
                </Modal>
              </div>
              <div className="smart__projects-card">
                <Button onClick={handlePinto}>
                  <img
                    src={Burguer}
                    className="smart__projects-card_img"
                    alt="dev"
                  />
                </Button>
                <Modal
                  open={pinto}
                  onClose={handlePintoc}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >

                  <Box sx={style}>
                    <Button onClick={handlePintoc}>
                      <FaBackspace size={60} color="#ffff00" />
                    </Button>
                    <img src={BurguerM} alt="sla" id="burguer" />
                  </Box>
                </Modal>
              </div>
              <div className="smart__projects-card">
                <Button onClick={handlePenis}>
                  <img
                    src={Loja}
                    className="smart__projects-card_img"
                    alt="dev"
                  />
                </Button>
                <Modal
                  open={penis}
                  onClose={handlePenisc}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                
                  <Box sx={style}>
                    <Button onClick={handlePenisc}>
                      <FaBackspace size={60} color="#ffff00" />
                    </Button>
                    <img src={LojaM} alt="sla" id="ffy" />
                  </Box>
                </Modal>
              </div>
          </div>
        </div>
        <div className="smart__projects-dev">
          <div className="smart__projects-dev_title">
            <div />
            <h1>dev web</h1>
          </div>
          <div className="smart__projects-dev_cards">
            
              <div className="smart__projects-card">
                <a href="https://landingpagecomtypescript.vercel.app/">
                  <img
                    src={Rest}
                    className="smart__projects-card_img"
                    alt="dev"
                  />
                </a>
              </div>
              <div className="smart__projects-card">
                <a href="https://design-gpt.vercel.app/">
                  <img
                    src={Gpt}
                    className="smart__projects-card_img"
                    alt="dev"
                  />
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
