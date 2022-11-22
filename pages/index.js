import Link from "next/link";
import Image from "next/image";
import art from "../assets/image/landingpage-art.png";
export default function Home() {
  return (
    <div>
      <>
        <navbar>
          <div className="container pt-3">
            <div className="row">
              <div className="col col-md-12 col-lg-4 d-flex">
                <img
                  id="menubar-icon"
                  src="menubar.svg"
                  alt=""
                  className="img-fluid"
                />
                <h1>
                  <Link href="#">
                    <a className="homebutton">BINARGAME</a>
                  </Link>
                </h1>
              </div>
              <div id="menu" className="col-8 text-uppercase pt-2 pl-5 pr-5">
                <ul className="d-lg-flex d-md-block justify-content-between">
                  <Link href="#">
                    <a className="menunavigasi">game list</a>
                  </Link>
                  <Link href="#">
                    <a className="menunavigasi">about</a>
                  </Link>
                  <Link href="login">
                    <a className="menunavigasi">login</a>
                  </Link>
                  <Link href="register">
                    <a className="menunavigasi">register</a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </navbar>
        <aside>
          <div className="container pt-5">
            <div className="row justify-content-between">
              <div className="col col-lg-6 col-md-12">
                <p className="aside-p">
                  THE POPULER GAME WEBSITE IN THE WORLD, EASY TO JOIN AND PLAY
                  GAME FROM YOUR DEVICE
                </p>
                <Link href="/game">
                  <button className="aside-button rounded-5">PLAY NOW</button>
                </Link>
              </div>
              <div id="art-game" className="col col-1 col-lg-5">
                <Image className="img-fluid pt-5" src={art} alt="" />
              </div>
            </div>
          </div>
        </aside>
      </>
    </div>
  );
}
