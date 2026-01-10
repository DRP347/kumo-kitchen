export default function ConfirmStep({
  date,
  guests,
  time,
}: {
  date: string;
  guests: number;
  time: string;
}) {
  return (
    <div className="reservation-step">
      <div className="reservation-ticket">
        <h3>KUMO KITCHEN</h3>
        <p>Moti Daman</p>

        <div className="ticket-details">
          <span>{date}</span>
          <span>{guests} Guests</span>
          <span>{time}</span>
        </div>

        <p className="ticket-note">
          Please arrive 10 minutes early.
        </p>
      </div>

      <button className="reservation-confirm">
        CONFIRM RESERVATION
      </button>
    </div>
  );
}
