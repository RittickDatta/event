import React from 'react';
import * as classes from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={classes.Footer_Top}>
        <div className={classes.Footer_Content}>
          <div className={classes.Subscribe_Message}>
            <h2 className={classes.Subscribe_Heading}>Subscribe for updates</h2>
            <p className={classes.Subscribe_Para}>
              A weekly update of what’s on the Global Agenda
            </p>
          </div>
          <div className={classes.Subscribe_Form}>
            <form>
              <input
                className={classes.Subscribe_Form_email}
                type='email'
                name='email'
                id='email'
                placeholder='Email'
              />
              <button
                className={classes.Subscribe_Form_Submit}
                type='submit'
              >
                  Subscribe
              </button>
            </form>
          </div>
          <div className={classes.FollowUsSocialIcons}>
            <div className={classes.Follow_Us}>
                Follow Us
            </div>
            <div className={classes.Social_Icon_Block}>
              <ul className={classes.Social_Icons}>
                <li className={classes.Social_Icon}>
                  <a href=''>X</a>
                </li>
                <li className={classes.Social_Icon}>
                  <a href=''>X</a>
                </li>
                <li className={classes.Social_Icon}>
                  <a href=''>X</a>
                </li>
                <li className={classes.Social_Icon}>
                  <a href=''>X</a>
                </li>
                <li className={classes.Social_Icon}>
                  <a href=''>X</a>
                </li>
                <li className={classes.Social_Icon}>
                  <a href=''>X</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Footer_Middle}>
        <div className={classes.Footer_Content}>
          <div className={classes.Footer_Columns}>
            <div className={classes.Footer_Column_Heading}>
                About
            </div>
            <div>
                <ul className={classes.Footer_Links}>
                    <li className={classes.Footer_Link}>
                        <a href="">
                            Our Mission
                        </a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">
                            The Davos Manifesto
                        </a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">
                            Leadership and Governance
                        </a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">
                            Our Partners
                        </a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">
                            Communities
                        </a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">
                            Centre for the Fourth Industrial Revolution
                        </a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Our Impact</a>
                    </li>
                </ul>
            </div>
          </div>
          <div className={classes.Footer_Columns}>
            <div className={classes.Footer_Column_Heading}>
                Media
            </div>
            <div>
                <ul className={classes.Footer_Links}>
                    <li className={classes.Footer_Link}>
                        <a href="">News</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Accredation</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Subscribe to our news</a>
                    </li>
                </ul>
            </div>
          </div>
          <div className={classes.Footer_Columns}>
            <div className={classes.Footer_Column_Heading}>
                Members & Partners
            </div>
            <div>
                <ul className={classes.Footer_Links}>
                    <li className={classes.Footer_Link}>
                        <a href="">Member login to TopLink</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Strategic Partners' area</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Partner Institutes' area</a>
                    </li>
                </ul>
            </div>
          </div>
          <div className={classes.Footer_Columns}>
            <div className={classes.Footer_Column_Heading}>
                Global Sites
            </div>
            <div>
                <ul className={classes.Footer_Links}>
                    <li className={classes.Footer_Link}>
                        <a href="">Centre for Fourth Industrial Revolution</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Open Forum</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Global Shapers</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Schwab Foundation for Social Entrepreneurship</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Strategic Intelligence</a>
                    </li>
                    <li className={classes.Footer_Link}>
                        <a href="">Global Risks</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Footer_Bottom}>
        <div className={classes.Footer_Content}>
            <div className={classes.Copyright}>
                © 2020 World Economic Forum
            </div>
            <div className={classes.PolicyAndTerms}>
                Privacy Policy & Terms of Service
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
