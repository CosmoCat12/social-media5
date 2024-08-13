import "./MainPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import List from "../../components/List/List";
// import WhatsNew from "../../components/WhatsNew/WhatsNew";
// import History from "../../components/History/History";
// import Post from "../../components/Post/Post";
// import Repost from "../../components/Repost/Repost";
export const MainPage = () => {
  return (
    <div className="MainPage">
      <aside className="LeftSide">
        <NavBar />
        <List listType="subscribes"/>
      </aside>
      <main className="Main">
        {/* <WhatsNew />
        <History />
        <Post />
        <Repost /> */}
      </main>
      <aside className="RightSide">
        <List listType="closeFriends"/>
        <div className="MusicBlock">
          <div className="MusicBlock__title">
            <h2>Вы недавно слушали</h2>
            <span>123</span>
          </div>
          <List listType="music"/>
          {/* <div className="MusicElem">
            <img src="./img/music/album-1.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Pieces</p>
              <p className="secondary__text">Andrew Belle</p>
            </div>
            <div className="plus-button _active"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-2.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">In the Wind</p>
              <p className="secondary__text">On-The-Go</p>
            </div>
            <div className="plus-button"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-3.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">On you own</p>
              <p className="secondary__text">Meltt</p>
            </div>
            <div className="plus-button _active"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-4.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Infinity</p>
              <p className="secondary__text">James Young</p>
            </div>
            <div className="plus-button"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-5.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Let me follow</p>
              <p className="secondary__text">Son Lux</p>
            </div>
            <div className="plus-button _active"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-6.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Youth</p>
              <p className="secondary__text">Glass Animals</p>
            </div>
            <div className="plus-button"></div>
          </div> */}
        </div>
      </aside>
    </div>
  );
};
