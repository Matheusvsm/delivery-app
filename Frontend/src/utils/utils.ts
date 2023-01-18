export const phoneMask = (phone: string) => {
  return phone.replace(/^\(?(\d{2})\)? ?(\d)?(\d{4})(\d{4})$/, '($1) $2$3$4');
};
