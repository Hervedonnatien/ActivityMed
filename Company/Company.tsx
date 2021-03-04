import React from 'react';
import LeftHeader from '../Layout/Header/LeftHeader/LeftHeader';
import './Company.css';

const Company = () => {
  return (
    <>
      <header className="m_entreprise-header">
        <div className="up_header">
          <div className="up_header_label">ENTREPRISES MEMBRES</div>
          <div className="up_header_manage_entreprise">
            <a href="#">Gérer mon entreprise</a>
          </div>
        </div>
        <div className="nav_entreprise_header">
          <div className="menu_tout m_entreprise-header-links">
            <span>Tout (107)</span>
          </div>
          <div className="menu_entreprise m_entreprise-header-links">
            <span>Agriculture et élévage (08)</span>
          </div>
          <div className="menu_entreprise m_entreprise-header-links">
            <span>Artisanat (21)</span>
          </div>
          <div className="menu_entreprise m_entreprise-header-links">
            <span>Commerce (22)</span>
          </div>
          <div className="menu_entreprise m_entreprise-header-links">
            <span>Industrie (09)</span>
          </div>
          <div className="menu_entreprise m_entreprise-header-links">
            <span>Services (35)</span>
          </div>
          <div className="menu_entreprise m_entreprise-header-links">
            <span>Tourisme / Hôtellerie / Restauration (12)</span>
          </div>
        </div>
      </header>
      <div className="m_entreprise-main">
        <div className="content">
          <ul className="ul_entreprises">
            <li>
              <div className="entreprise">
                <img
                  className="entreprise-image"
                  src="ID14310477_1369971733030361_41.png"
                  alt="entreprise 1"
                />

                <div className="entreprise-info">
                  <div className="entreprise-name">e-elite</div>
                  <div className="entreprise-contact">
                    0343742663/0323466787
                  </div>
                  <div className="entreprise-siege">
                    <span>Analakely</span>
                    <a href="#">
                      <span className="entreprise-details-link">
                        Voir détails
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="entreprise">
                <img
                  className="entreprise-image"
                  src="ID18342818_1320467061399967_56.png"
                  alt="entreprise 1"
                />

                <div className="entreprise-info">
                  <div className="entreprise-name">Relia</div>
                  <div className="entreprise-contact">
                    0343742663/0323466787
                  </div>
                  <div className="entreprise-siege">
                    <span>Ambohipo</span>
                    <a href="#">
                      <span className="entreprise-details-link">
                        Voir détails
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="entreprise">
                <img
                  className="entreprise-image"
                  src="ID103574238_3272875982736121_3.png"
                  alt="entreprise 1"
                />

                <div className="entreprise-info">
                  <div className="entreprise-name">Hairun</div>
                  <div className="entreprise-contact">
                    0343742663/0323466787
                  </div>
                  <div className="entreprise-siege">
                    <span>Antsakaviro</span>
                    <a href="#">
                      <span className="entreprise-details-link">
                        Voir détails
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="entreprise">
                <img
                  className="entreprise-image"
                  src="ID15110300_1789270164680351_17.png"
                  alt="entreprise 1"
                />

                <div className="entreprise-info">
                  <div className="entreprise-name">IT-entreprise</div>
                  <div className="entreprise-contact">
                    0343742663/0323466787
                  </div>
                  <div className="entreprise-siege">
                    <span>Anosy</span>
                    <a href="#">
                      <span className="entreprise-details-link">
                        Voir détails
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="entreprise">
                <img
                  className="entreprise-image"
                  src="ID100603650_3029757110415299_4.png"
                  alt="entreprise 1"
                />

                <div className="entreprise-info">
                  <div className="entreprise-name">Tsara sera</div>
                  <div className="entreprise-contact">
                    0343742663/0323466787
                  </div>
                  <div className="entreprise-siege">
                    <span>Analakely</span>
                    <a href="#">
                      <span className="entreprise-details-link">
                        Voir détails
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="entreprise">
                <img
                  className="entreprise-image"
                  src="ID18342818_1320467061399967_56.png"
                  alt="entreprise 1"
                />

                <div className="entreprise-info">
                  <div className="entreprise-name">Pulse</div>
                  <div className="entreprise-contact">
                    0343742663/0323466787
                  </div>
                  <div className="entreprise-siege">
                    <span>Analakely</span>
                    <a href="#">
                      <span className="entreprise-details-link">
                        Voir détails
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="entreprise">
                <img
                  className="entreprise-image"
                  src="ID120757485_772763723291218_56.png"
                  alt="entreprise 1"
                />

                <div className="entreprise-info">
                  <div className="entreprise-name">Monent</div>
                  <div className="entreprise-contact">
                    0343742663/0323466787
                  </div>
                  <div className="entreprise-siege">
                    <span>Analakely</span>
                    <a href="#">
                      <span className="entreprise-details-link">
                        Voir détails
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Company;
