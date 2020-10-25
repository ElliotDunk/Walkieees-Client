const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const LETTERS_NUMBERS = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
const NAME = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

export default class Validate {
  static email(email) {
    if (email.length <= 0) return { error: true, message: "Email cannot be blank." };
    if (EMAIL_REGEX.test(email)) {
      return { error: false };
    } else {
      return { error: true, message: "Please enter a valid email." };
    }
  }

  static password(password) {
    if (password.length < 8) return { error: true, message: "Passwords must be atleast 8 charecters." };
    if (!LETTERS_NUMBERS.test(password)) return { error: true, message: "Passwords must be letters and numbers." };
    return { error: false };
  }

  static confirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) return { error: true, message: "Passwords don't match." };
    return { error: false };
  }

  static name(name) {
    if (!NAME.test(name)) return { error: true, message: "Please enter a valid name." };
    return { error: false };
  }

  static DOB(DOB) {
    if (DOB.length <= 0) return { error: true, message: "Date of birth can't be blank." };
    const minAgeDate = Date.now() - 504910816000; //16 Years Ago From Today
    if (minAgeDate < Date.parse(DOB)) return { error: true, message: "Minimum age is 16 years." };
    return { error: false };
  }

  static terms(terms) {
    if (!terms) return { error: true, message: "You must agree to the terms." };
    return { error: false };
  }
}
