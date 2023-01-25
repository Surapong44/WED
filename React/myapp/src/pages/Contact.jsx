import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { ValidateFormContact } from "./validate-form/ValidateContact";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Contact us the get started</p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
            </div>
          </div>

          {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" > */}

          {/* <form action="" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name" >Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name" >Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name" >Message</label>
                  <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form> */}

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                massage: "",
                phoneNumber: "",
              }}
              validationSchema={ValidateFormContact}
              onSubmit={(values) => {
                let data = { ...values };
                console.log("data:" + JSON.stringify(data));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <Form className="php-email-form">
                  <div className="form-group col">
                    <label htmlFor="name">สถานภาพ: </label>
                    <input type="radio" name="student" checked="checked" />
                    นักศึกษา
                    <input type="radio" name="university-personnel" />
                    บุคลากรมหาวิทยาลัย
                    <input type="radio" name="third-party" />
                    บุคคลภายนอก
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <label htmlFor="name">ชื่อ-นามสกุล</label>
                      <input
                        placeholder="ชื่อ-นามสกุล"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <label htmlFor="name">อีเมล</label>
                      <input
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        type="text"
                        name="email"
                        placeholder="อีเมล"
                        onChange={(e) => {
                          setFieldValue(
                            "email",
                            e.target.value.replace(/[^A-Za-z_.#?!@$%^&*0-9i]/g)
                          );
                        }}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group row-5 mt-3 mt-md-0">
                      <label htmlFor="name">เรื่อง</label>
                      <input
                        className={
                          "form-control" +
                          (errors.subject && touched.subject
                            ? " is-invalid"
                            : "")
                        }
                        type="text"
                        name="subject"
                        placeholder="เรื่อง"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group row-5 mt-3 mt-md-0">
                      <label htmlFor="name">เบอร์โทรศัพท์</label>
                      <input
                        className={
                          "form-control" +
                          (errors.phoneNumber && touched.phoneNumber
                            ? " is-invalid"
                            : "")
                        }
                        type="text"
                        name="phoneNumber"
                        placeholder="เบอร์โทรศัพท์"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group row-5 mt-3 mt-md-0">
                      <label htmlFor="name">รายละเอียด</label>
                      <textarea
                        className={
                          "form-control" +
                          (errors.massage && touched.massage
                            ? " is-invalid"
                            : "")
                        }
                        type="text"
                        rows={6}
                        name="massage"
                        placeholder="รายละเอียด"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.massage}
                      />
                      <ErrorMessage
                        name="massage"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                  <button type="submit">บันทึก</button>
                  <button type="reset">ล้างข้อมูล</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;
