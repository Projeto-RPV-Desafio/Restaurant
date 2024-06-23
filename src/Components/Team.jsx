import first from '../Images/colab1.jpg';
import brunoImg from '../Images/bruno.jpeg';
import jpImg from '../Images/jp.jpg';
import marcosImg from '../Images/marcos.jpg';
import erickImg from '../Images/erick.jpg';
import pedroImg from '../Images/pedro.jpeg';
import './Team.css';

export default function Team() {
    return (
        <div id="team"><br />
            <h1>Melhor Equipe</h1>
            <div className="teamtext">
                <br />
                <h3 className='flint'>Bruno</h3>
                <img src={brunoImg} className='imgTeam' alt="pic" />
                <br />
                <p className='text'>Desenvolvedor Front-end - Garçom Pleno</p>
            </div>

            <div className="teamtext">
                <br />
                <h3>Marcos</h3>
                <img src={marcosImg} className='imgTeam' alt="pic" />
                <br />
                <p className='text'>Desenvolvedor Back-end - Cozinheiro Sênior</p>
            </div>

            <div className="teamtext">
                <br />
                <h3>Pedro</h3>
                <img src={pedroImg} className='imgTeam' alt="pic" />
                <br />
                <p className='text'>Desenvolvedor Back-end - Cozinheiro Pleno</p>
            </div>

            <div className="teamtext">
                <br />
                <h3>João Pedro</h3>
                <img src={jpImg} className='imgTeam' alt="pic" />
                <br />
                <p className='text'>Desenvolvedor Front-end - Garçom Júnior</p>
            </div>

            <div className="teamtext">
                <br />
                <h3>Erick</h3>
                <img src={erickImg} className='imgTeam' alt="pic" />
                <br />
                <p className='text'>Analista de Testes - Inspetor de Qualidade</p>
            </div>
        </div>
    )
}
