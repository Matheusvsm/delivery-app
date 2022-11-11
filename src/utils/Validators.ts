export function phoneValidator(phone: string) {
  const pattern = /^\((\d{2})\) (\d{4,5})-(\d{4})$/i;
  if (phone.match(pattern)) {
    return true;
  }
  return false;
}

export function phoneMask(phone: string) {
  const mask = phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{4,5})(\d{4}).*/, '($1) $2-$3');
  return mask;
}

export function emailValidator(email: string) {
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (email.match(pattern)) {
    return true;
  }
  return false;
}
