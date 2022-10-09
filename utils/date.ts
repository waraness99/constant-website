import { format } from "date-fns";

export function formatDate(dateString: string, formatPattern: string = "MMMM dd, yyyy") {
  if (!dateString) {
    return;
  }
  const date = new Date(dateString);
  return `${format(date, formatPattern)}`;
}

export const getAgeByBirthDate = (birthDate: string) => {
  const today = new Date();
  const birthDateDate = new Date(birthDate);
  let age = today.getFullYear() - birthDateDate.getFullYear();
  const month = today.getMonth() - birthDateDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDateDate.getDate())) {
    age--;
  }
  return age;
};
