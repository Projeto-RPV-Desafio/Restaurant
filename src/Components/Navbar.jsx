import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  // Estado para controlar se o menu hambúrguer está aberto
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);

  // Função para fechar o menu ao clicar em um item
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  // Efeito para fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, insira seu endereço de email!",
      });
      return;
    }

    Swal.fire({
      title: "Você tem certeza?",
      text: "Uma vez submetido, você não poderá alterar seus dados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, envie!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Inscrito com sucesso!",
          "Aproveite sua assinatura",
          "success"
        );
        toggleModal();
      }
    });
  };

  return (
    <>
      <nav>
        {/* Checkbox para controlar o menu hambúrguer */}
        <input
          type="checkbox"
          id="click"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <div id="logo">
          <Link to="/" className="navbar-brand">
            <h1>Restaurant</h1>
          </Link>
        </div>
        {/* Classe 'open' adicionada quando o menu está aberto */}
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink
              activeclassname="active"
              to="/"
              onClick={handleMenuItemClick}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleMenuItemClick}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleMenuItemClick}>
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" onClick={handleMenuItemClick}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" onClick={handleMenuItemClick}>
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleMenuItemClick}>
              Contato
            </NavLink>
          </li>
          <li>
            <button onClick={toggleModal} className="btn btn-signup show">
              Assinar
            </button>
          </li>
        </ul>
        <div className="btn-main hide">
          <button onClick={toggleModal} className="btn btn-signup hide">
            Assinar
          </button>
        </div>
      </nav>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2 className="h1-1">Restaurante Boca Aberta</h2>
            <p className="p-l-1">Restaurante</p>
            <h2>Assine nossa NewsLetter</h2>
            <p>
              A assinatura é GRATUITA, assine e ganhe 20% OFF na primeira
              compra.
            </p>
            <form onSubmit={handleFormSubmit}>
              <input
                className="inp"
                type="email"
                required
                placeholder="Seu Email"
              />
              <span>
                <p>
                  <input id="same" type="checkbox" required className="in" />
                  <label htmlFor="same">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aperiam, quam libero consequuntur similique tempora fuga
                    odio a possimus mollitia ducimus, itaque soluta officiis
                    error, sapiente distinctio qui obcaecati culpa hic?
                  </label>
                </p>
              </span>
              <button className="btn-pr" type="submit">
                Assine
              </button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
