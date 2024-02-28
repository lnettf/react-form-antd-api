import axios from "axios";
import { FormUser } from "./components/FormUser";
import Swal from "sweetalert2";

export const Register = () => {
  const handleSubmit = async (formData) => {
    const res = await axios.post(
      "https://api-node-form-dev-rsbk.2.us-1.fl0.io/api/users",
      formData
    );

    if(res.status === 200){
        Swal.fire({
          title: "Guardado",
          text: "Tenemos el elemento en db",
          icon: "success",
        });
    }

  };

  return <FormUser onSubmit={handleSubmit} />;
};
