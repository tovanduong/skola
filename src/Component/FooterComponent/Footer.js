/* eslint-disable jsx-a11y/alt-text */
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <section className="section section-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/img/logo.png" />
              <p className="skola">
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>
              <p className="skola__address">123 456 7890</p>
              <p className="skola__address">support@skola.com</p>
              <div className="skola__iconGroup">
                <div className="skola__icon--fb"><img src="/img/f.png"/></div>
                <div className="skola__icon--fb"><img src="/img/t.png"/></div>
                <div className="skola__icon--fb"><img src="/img/insta.png"/></div>
                <div className="skola__icon--fb"><img src="/img/i.png"/></div>
              </div>
            </div>
            <div className="col-md-2 footer__content">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton >
                      Our Company<span></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="footer__company">
                    Our Company
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    About Us
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Contact Us
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Comunity
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Student Perks
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Blog
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Affiliate Program
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Careers
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="col-md-2 footer__content footer__content">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                    >
                      Topics<span></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="footer__company">
                    HTML
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    CSS
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Design
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    JavaScript
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Ruby
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    PHP
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Android
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Development Tools
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Business
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="col-md-2 footer__content">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                    >
                      Tracks<span></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="footer__company">
                    Web Design
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Web Development
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Rails Development
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    PHP Development
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Android Development
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Starting a Business
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="col-md-2 footer__content">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton
                    >
                      Support<span></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="footer__company">
                    Documentation
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Forums
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Language Packs
                  </AccordionItemPanel>
                  <AccordionItemPanel className="footer__company">
                    Release Status
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
