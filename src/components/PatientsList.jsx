import { Patients } from "./Patients";
import PropTypes from "prop-types";

const PatientsList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll ">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg mt-4 mb-6 text-center">
            Administra tus{" "}
            <span className="text-green-600 text-lg font-bold">
              Pacientes y Citas
            </span>
          </p>

          {patients.map((patient) => (
            <Patients
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No existen pacientes
          </h2>
          <p className="text-lg mt-4 mb-6 text-center">
            Comienza creado nuevos pacientes{" "}
            <span className="text-green-600 text-lg font-bold">
              y podrás verlos en este espacio
            </span>
          </p>
        </>
      )}
    </div>
  );
};

PatientsList.propTypes = {
  patients: PropTypes.array,
  setPatient: PropTypes.func,
  deletePatient: PropTypes.func,
};

export default PatientsList;
