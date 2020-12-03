import React from "react";
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
  display: 'inline-block';
  margin: 5 auto;
  border-color: '#3688D7';
`

/**
 * Function Header component
 * @author Eleazar Martinez
 */
const Header = ({loading, onClickRefresh}) => {

  /**
   * Refresh Function
   * @author Eleazar Martinez
   */
  const onClickRefreshHeader = () =>{
    onClickRefresh();
  }

  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        <form className="form-inline ml-3">
        </form>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
                      <button className="btn btn-block btn-info" onClick={() => onClickRefreshHeader()}>
                      {
                                          loading ?
                                              <div className="sweet-loading" style={{ flexWrap:"nowrap", display: "flex",alignItems: "center", justifyContent: "center"}}>
                                                  <ClipLoader
                                                      css={override}
                                                      size={15}
                                                      color={"#ffffff"}
                                                      loading={loading}
                                                  />
                                                              refreshing...
                                                          </div>
                                              :
                                              'Refresh'
                                      }
                      </button>
                </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
