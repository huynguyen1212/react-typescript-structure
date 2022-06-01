/**
 *
 * Alert
 *
 */
import Swal from "sweetalert2";

interface Props {
  name: string;
  icon?: "success" | "error" | "warning" | "info" | "question" | undefined;
}

function Alert({ name, icon }: Props) {
  return Swal.fire({
    title: name,
    icon: icon,
    position: "top-right",
    toast: true,
    showConfirmButton: false,
  });
}

export { Alert };
