import React, { Component } from "react";
import Media from "react-media";
import classnames from "classnames";
import styles from "../CSS/navbar.styl";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  toggleNav = () => {
    console.log("Test");
    this.setState({
      active: !this.state.active
    });
  };
  render() {
    const { active } = this.state;
    return (
      <Media query="(max-width: 968px)">
        {matches =>
          matches ? (
            <nav
              className={classnames({
                [styles["navbar__main-mobile"]]: true,
                [styles["active"]]: this.state.active
              })}
            >
              <a
                className={classnames({
                  [styles["navbar__collapse-btn"]]: true,
                  [styles["active"]]: this.state.active
                })}
                onClick={this.toggleNav}
              >
                <span />
                <span />
                <span />
              </a>
              <div className={styles["navbar__mobile-img"]}>
                <img src="../../public/images/pizza.png" alt="" />
              </div>
              <div
                className={classnames({
                  [styles["navbar__wrap"]]: true,
                  [styles["active"]]: this.state.active
                })}
              >
                <a className={styles["navbar__link-mobile"]}>Home</a>
                <a className={styles["navbar__link-mobile"]}>About</a>
                <a className={styles["navbar__link-mobile"]}>Menu</a>
                <a className={styles["navbar__link-mobile"]}>Contact</a>
              </div>
            </nav>
          ) : (
            <nav className={styles["navbar__main"]}>
              <div className={styles["navbar__section-1"]}>
                <a href="#" className={styles["navbar__link"]}>
                  Home
                  <span />
                </a>
                <a href="#" className={styles["navbar__link"]}>
                  About
                  <span />
                </a>
              </div>
              <div className={styles["logo__wrap"]}>
                <img
                  className={styles["logo"]}
                  src="../../public/images/pizza.png"
                  alt="Pizza"
                />
              </div>
              <div className={styles["navbar__section-2"]}>
                <a href="#" className={styles["navbar__link"]}>
                  Menu
                  <span />
                </a>
                <a href="#" className={styles["navbar__link"]}>
                  Contact
                  <span />
                </a>
              </div>
            </nav>
          )
        }
      </Media>
    );
  }
}

export default Navbar;
