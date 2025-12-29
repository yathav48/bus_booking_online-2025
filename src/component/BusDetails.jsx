function BusDetails({ bus }) {
  return (
    <div className="space-y-4">

      <div>
        <h2 className="font-bold text-lg">{bus.name}</h2>
        <p className="text-sm text-gray-500">
          AC Seater / Sleeper
        </p>
      </div>

      <div className="flex gap-2">
        <img className="w-24 h-16 rounded object-cover" src={bus.image} />
        <img className="w-24 h-16 rounded object-cover" src={bus.image} />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Why book this bus?</h3>
        <ul className="text-sm space-y-1">
          <li>• On-time performance</li>
          <li>• Highly rated by passengers</li>
          <li>• Clean interiors</li>
        </ul>
      </div>

    </div>
  );
}

export default BusDetails;
