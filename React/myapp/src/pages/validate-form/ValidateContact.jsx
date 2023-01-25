import * as Yup from "yup";

export const ValidateFormContact = Yup.object({
  name: Yup.string().required("กรุณากรอกชื่อ"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "รูปแบบอีเมลไม่ถูกต้อง"
    )
    .required("กรุณากรอกอีเมล"),
  subject: Yup.string().required("กรุณาเรื่อง"),
  phoneNumber: Yup.string().required("กรุณาเบอร์โทรศัพท์"),
  // status: Yup.string().required("กรุณาเลือก"),

});
