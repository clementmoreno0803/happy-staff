import { defineRule } from "vee-validate";

export const veeValidateRules = () => {
  const required = defineRule("required", (value: string) => {
    if (!value || !value.length) {
      return "This field is required";
    }
    return true;
  });
  const email = defineRule("email", (value: string) => {
    console.log(value, "email");

    // Field is empty, should pass
    if (!value || !value.length) {
      return true;
    }
    // Check if email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "This field must be a valid email";
    }
    return true;
  });
  const tel = defineRule("tel", (value: string) => {
    if (!value || !value.length) {
      return true;
    }
    if (!/^(0[67]\d{8}|(\+33)[67]\d{8})$/.test(value)) {
      return "Votre numéro de téléphone doit commencer par 06, 07 ou +33";
    }
    return true;
  });
  return { required, email, tel };
};
