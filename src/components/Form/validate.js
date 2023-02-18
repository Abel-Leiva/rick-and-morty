export default function validate(input) {
  const error = {};
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(input.username))
    error.username = "el usuario debe ser una direccion de mail";
  if (!input.username)
    error.username = "debe llenar el campo con una direccion de mail";
  if (!/\d/.test(input.password))
    error.password = "la contraseña debe tener por lo menos un numero";
  if (input.password.length < 6)
    error.password = "la contraseña deber tener al menos 6 caracteres";
  return error;
}
