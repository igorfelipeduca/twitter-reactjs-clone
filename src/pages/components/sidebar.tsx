import { BsTwitter } from "react-icons/bs";
import {
  RiHome7Fill,
  RiHome7Line,
  RiHashtag,
  RiBellLine,
  RiFileList2Line,
  RiFileList2Fill,
  RiUser3Line,
  RiUser3Fill,
} from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import "./assets/styles/sidebar.css";
import UserImage from "./userImage";
import { FiMoreHorizontal } from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex sticky">
      <div className="sidebar">
        <h2 className="sidebar-twitter-icon-wrapper">
          <BsTwitter className="sidebar-twitter-icon" />
        </h2>

        <div className="mt-4">
          <div className="d-flex align-items-center sidebar-item">
            <h3>
              <RiHome7Fill className="mr-3" />
            </h3>
            <h5>
              <b>Página Inicial</b>
            </h5>
          </div>

          <div className="d-flex align-items-center sidebar-item mt-2">
            <h3>
              <RiHashtag className="mr-3" />
            </h3>
            <h5>Explorar</h5>
          </div>

          <div className="d-flex align-items-center sidebar-item mt-2">
            <h3>
              <AiOutlineBell className="mr-3" />
            </h3>
            <h5>Notificações</h5>
          </div>

          <div className="d-flex align-items-center sidebar-item mt-2">
            <h3>
              <MdMailOutline className="mr-3" />
            </h3>
            <h5>Mensagens</h5>
          </div>

          <div className="d-flex align-items-center sidebar-item mt-2">
            <h3>
              <BsBookmark className="mr-3" />
            </h3>
            <h5>Itens Salvos</h5>
          </div>

          <div className="d-flex align-items-center sidebar-item mt-2">
            <h3>
              <RiFileList2Line className="mr-3" />
            </h3>
            <h5>Listas</h5>
          </div>

          <div className="d-flex align-items-center sidebar-item mt-2">
            <h3>
              <RiUser3Line className="mr-3" />
            </h3>
            <h5>Perfil</h5>
          </div>

          <div className="d-flex align-items-center sidebar-item mt-2">
            <h3>
              <CgMoreO className="mr-3" />
            </h3>
            <h5>Mais</h5>
          </div>

          <div className="d-flex align-items-center mt-2">
            <button className="sidebar-tweet-button">
              <b>Tweetar</b>
            </button>
          </div>

          <div className="d-flex align-items-center user-info-wrapper justify-content-end hover-effect-component">
            <UserImage sm />

            <div className="ml-3">
              <b>
                <p className="sidebar-screenname">duca🌹</p>
              </b>
              <span className="sidebar-username">@wluvigor</span>
            </div>

            <FiMoreHorizontal className="ml-5 font-size-20" />
          </div>
        </div>
      </div>

      <hr className="vertical-hr" />
    </div>
  );
};

export default Sidebar;
