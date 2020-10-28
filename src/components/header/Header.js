import React from 'react';
import * as classes from './Header.module.css';

function Header() {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.FirstRowNavigation}>
        <div className={classes.LeftOfNavigation}>
          <div className={classes.Logo}>
            <img
              src='https://www.weforum.org/assets/logo-ddc1cc485dc7b53710927fa8446c3260a3f026b25924f28c1e58fa996be66db1.svg'
              alt='World Economic Forum'
            />
          </div>

          <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>Agenda</li>
            <li className={classes.NavigationItem}>Platforms</li>
            <li className={classes.NavigationItem}>Reports</li>
            <li className={classes.NavigationItem}>Events</li>
            <li className={classes.NavigationItem}>Videos</li>
          </ul>
        </div>
        <div className={classes.RightOfNavigation}>
          <div className={classes.LanguageDropdown}>
            <select name='language' id='language'>
              <option value='English'>English</option>
            </select>
          </div>
          <div className={classes.SigninAndSearch}>
            <div>Sign-in</div>
            <div className={classes.SearchIcon}>Search</div>
          </div>
        </div>
      </div>
      <div className={classes.SecondRowNavigation}>
        <div className={classes.SecondRowNavigation_leftOptions}>
          <ul className={classes.SecondRowNavigation_navItems}>
            <li className={classes.SecondRowNavigation_navItem}>
              <a>Home</a>
            </li>
            <li className={classes.SecondRowNavigation_navItem}>
              <a>About</a>
            </li>
            <li className={classes.SecondRowNavigation_navItem}>
              <a>Programme</a>
            </li>
            <li className={classes.SecondRowNavigation_navItem}>
              <a>Themes</a>
            </li>
            <li className={classes.SecondRowNavigation_navItem}>
              <a>Liveblog</a>
            </li>
          </ul>
        </div>
        <div className={classes.SecondRowNavigation_rightOptions}>
          <div className={classes.twitter_hashtag}>#OceanDialogues</div>
          <div className={classes.socialMeida}>
            <ul className={classes.socialMediaIcons}>
              <li className={classes.socialMediaIcon}>
                <i>Facebook</i>
              </li>
              <li className={classes.socialMediaIcon}>
                <i>Twitter</i>
              </li>
              <li className={classes.socialMediaIcon}>
                <i>LinkedIn</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
