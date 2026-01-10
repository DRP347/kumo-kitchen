export default function TimeStep({
  onSelect,
}: {
  onSelect: (time: string) => void;
}) {
  const times = ["19:00", "19:30", "20:00", "20:30", "21:00"];

  return (
    <div className="reservation-step">
      <span className="reservation-label">Seating Time</span>

      <div className="time-slots">
        {times.map((time) => (
          <button
            key={time}
            className="time-chip"
            onClick={() => onSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
