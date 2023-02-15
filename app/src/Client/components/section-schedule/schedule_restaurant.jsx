import "./schedule_restaurant.css";
const ScheduleRestaurant = () => {
  return (
    <>
      <section className="section-schedule">
        <div className="section-schedule__container">
          <div className="img__container">
            <img src="https://olecapilarbogota.com/wp-content/uploads/2022/10/Tratamiento-de-Papaya.jpg"></img>
          </div>
          <div className="schedule__container">
            Horario
            <br />
            Lunes 1:00 a 7:00 pm
            <br />
            Martes a Jueves: 1 pm a 9:00 pm
            <br />
            Viernes y Sábado: 1 pm a 10:00 pm
            <br />
            Domingo 1:00 a 8:00 pm
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleRestaurant;
