import { useEffect, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const onSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const patientInfo = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    if (patient.id) {
      //Editar paciente
      patientInfo.id = patient.id;
      const updatedPatient = patients.map((patientState) =>
        patientState.id === patient.id ? patientInfo : patientState
      );
      setPatients(updatedPatient);
      setPatient({});
    } else {
      //Nuevo Registro
      patientInfo.id = Date.now().toString(36);
      setPatients([...patients, patientInfo]);
    }

    //Reiniciar form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-center font-extrabold text-3xl">
        Seguimiento Pacientes
      </h2>
      <p className="mt-4 text-center text-lg mb-6">
        Añade pacientes y {""}
        <span className="text-green-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={onSubmit}
        className="bg-white p-10 shadow-md rounded-lg mb-10"
      >
        {error && <Error message={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          <label
            className="font-bold block uppercase text-gray-700"
            htmlFor="mascota"
          >
            Nombre de Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de Mascota"
            className={`border-2 rounded-lg p-2 mt-2 placeholder-gray-400 w-full ${
              error && "border-red-500"
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="font-bold block uppercase text-gray-700"
            htmlFor="propietario"
          >
            Nombre del Propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className={`border-2 rounded-lg p-2 mt-2 placeholder-gray-400 w-full ${
              error && "border-red-500"
            }`}
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="font-bold block uppercase text-gray-700"
            htmlFor="email"
          >
            Correo electrónico
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            className={`border-2 rounded-lg p-2 mt-2 placeholder-gray-400 w-full ${
              error && "border-red-500"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="font-bold block uppercase text-gray-700"
            htmlFor="alta"
          >
            Fecha de alta
          </label>

          <input
            id="alta"
            type="date"
            className={`border-2 rounded-lg p-2 mt-2 placeholder-gray-400 w-full ${
              error && "border-red-500"
            }`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="font-bold block uppercase text-gray-700"
            htmlFor="sintomas"
          >
            Síntomas
          </label>

          <textarea
            id="sintomas"
            placeholder="Describe los síntomas"
            className={`border-2 rounded-lg p-2 mt-2 placeholder-gray-400 w-full ${
              error && "border-red-500"
            }`}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-green-600 w-full p-3 uppercase text-white font-bold rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
          value={patient.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  patients: PropTypes.array,
  setPatients: PropTypes.func,
  patient: PropTypes.object,
  setPatient: PropTypes.func,
};

export default Form;
