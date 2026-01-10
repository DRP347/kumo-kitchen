export default function DateStep({
  onSelect,
}: {
  onSelect: (date: string) => void;
}) {
  const dates = ["14 Oct", "15 Oct", "16 Oct", "17 Oct"];

  return (
    <div className="reservation-step">
      <span className="reservation-label">Select Date</span>

      <div className="reservation-calendar">
        {dates.map((date) => (
          <button
            key={date}
            className="calendar-date"
            onClick={() => onSelect(date)}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}
