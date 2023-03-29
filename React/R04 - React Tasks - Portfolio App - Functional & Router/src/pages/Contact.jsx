import { Fragment } from "react";
import ContactForm from "../components/ContactForm";

let Contact = () => {
    return (
      <Fragment>
        <div className="cover-page">
          <div className="tit">
            <h1>about us</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" className="active">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ContactForm />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.1673051531596!2d34.45312491468049!3d31.51486330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f2f4e84b4e3%3A0x3ced13b7324d6a0!2sZain%20eldeen%20fashion!5e0!3m2!1sen!2s!4v1657058471221!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Fragment>
    );
};
export default Contact;