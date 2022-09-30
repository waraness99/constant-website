import { format } from "date-fns";

export function formatDate(dateString: string, formatPattern: string = "MMMM dd, yyyy") {
  if (!dateString) {
    return;
  }
  const date = new Date(dateString);
  return `${format(date, formatPattern)}`;
}
