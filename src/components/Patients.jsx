import PropTypes from "prop-types";

export const Patients = ({ patient, setPatient, deletePatient }) => {
  const handleDeletePatient = () => {
    const resp = confirm("¿Deseas eliminar este paciente?");
    if (resp) {
      deletePatient(patient.id);
    }
  };

  return (
    <div className="bg-white rounded-lg p-10 mx-3 shadow-md mb-5">
      <p className="font-bold uppercase mb-3 text-gray-700">
        Nombre: <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Propietario:{" "}
        <span className="font-normal normal-case">{patient.owner}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Correo electrónico:{" "}
        <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">{patient.date}</span>
      </p>
      <p className="font-bold uppercase mb-3 text-gray-700">
        Síntomas:{" "}
        <span className="font-normal normal-case">{patient.symptoms}</span>
      </p>

      <div className="flex justify-between gap-4 md:gap-0 mt-8">
        <button
          type="button"
          className=" bg-green-600 rounded-lg py-2 md:px-10 w-full md:w-fit hover:bg-green-700 uppercase text-white font-bold transition-colors"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className=" bg-red-600 rounded-lg py-2 md:px-10 w-full md:w-fit hover:bg-red-700 uppercase text-white font-bold transition-colors"
          onClick={handleDeletePatient}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Patients.propTypes = {
  patient: PropTypes.object,
  setPatient: PropTypes.func,
  deletePatient: PropTypes.func,
};
