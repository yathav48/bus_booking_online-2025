import seater from "../assets/seater.svg";
import sleeper from "../assets/sleeper.svg";
import maleseater from "../assets/male_seater.svg";
import malesleeper from "../assets/male_sleeper.svg";
import sleeperbooked from "../assets/sl_booked.svg";
import seaterbooked from "../assets/seater_booked.svg";
// import maleseaterbooked from "../assets/male_seater_booked.svg";
export default function SeatTypeInfo() {

  return (
    <div className="my-4">
        <div className="text-center font-bold text-black text-xl">
            Know your seat types
        </div>
        <div className="mt-2 space-y-2 text-sm text-gray-600">
            <table className="w-full border-collapse border border-black rounded-full!">
                <thead>
                    <tr className="flex flex-row justify-between border-b! border-black p-4">
                        <th className="text-left pr-4">Seat Type</th>
                        <th className="text-left">Seater</th>
                        <th className="text-left">Sleeper</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex flex-row justify-between p-4 items-center">
                        <td className="text-left pr-4">Available</td>
                        <td className="text-left"><img src={seater} alt="Seater" className="w-8 h-8" /></td>
                        <td className=""><img src={sleeper} alt="Sleeper" size={12} /></td>
                    </tr>
                    <tr className="flex flex-row justify-between p-4">
                        <td className="text-left pr-4">Available only for male passenger</td>
                        <td className=""><img src={maleseater} alt="Male Seater" className="w-8 h-8" /></td>
                        <td className=""><img src={malesleeper} alt="Male Sleeper" className="w-8 h-8" /></td>
                    </tr>
                    <tr className="flex flex-row justify-between p-4">
                        <td className="text-left pr-4">Already booked</td>
                        <td className=""><img src={seaterbooked} alt="Seater Booked" className="w-8 h-8" /></td>
                        <td className=""><img src={sleeperbooked} alt="Sleeper Booked" className="w-8 h-8" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}