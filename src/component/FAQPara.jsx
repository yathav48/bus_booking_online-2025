import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Accordion Item
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between py-3"
      >
        <span className="text-md font-medium text-start">{question}</span>

        <FiChevronDown
          className={`text-2xl transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <p className="text-gray-600 leading-relaxed text-md">
          {answer}
        </p>
      )}
    </div>
  );
};

// Main Page Component
const FAQPara = () => {
  const tabs = ["General", "Ticket-related", "Payment", "Cancellation & Refund"];
  const [activeTab, setActiveTab] = useState("General");

  const faqData = {
    General: [
      {
        q: "Can I track the location of my booked bus online?",
        a: "Yes, you can track your bus online using our bus tracking feature...",
      },
      {
        q: "What are the advantages of bus ticket booking with redBus?",
        a: "There are many advantages of booking bus tickets online with redBus. redBus is India’s leading bus ticket booking platform, where you can book private or government-owned buses. redBus allows you to find the different types of buses, choose the preferred bus seats, and find your nearest boarding and dropping points. You can also filter the buses based on timings, like morning, evening, etc.",
      },
      {
        q: "Why book bus tickets online on redBus?",
        a: "Booking bus tickets online on redBus is increasingly becoming the preferred choice for travellers due to its numerous advantages over traditional methods. With redBus, customers can book their bus tickets effortlessly from the comfort of their homes, avoiding the inconvenience of standing in long lines at bus stations or travel agencies. Online bus booking offers the luxury of comparing different bus schedules and operators and presents various discount offers and exclusive deals, resulting in significant savings. Payment security is another notable feature of online booking, which ensures that your financial information is well-protected against fraud. Additionally, customers can pick their seats, providing a customized travel experience. Online bus booking platforms give real-time updates about any changes in the bus timetable, including delays or cancellations, enabling better planning. The convenience doesn't stop here; travellers can even compare onboard amenities like charging points or snacks, further enhancing the travel experience."
      },
      {
        q: "Do I need to create an account on the redBus site to book bus ticket?",
        a: "No, you don’t have to create an account on the redBus site to book bus ticket. But it is advisable to make one to accelerate the process next time you want to book bus tickets. Also, redBus has many discounts and bus booking offers that you can easily access if you have an account with us."
      },
      {
        q: "Does bus booking online cost me more?",
        a: "Not at all! The bus ticket price is the same as you would get from the bus operator/ counter of any bus ticket agency. redbus reduces the travel budget by comparing the bus ticket prices among various operators, making it a more cost-effective choice. Therefore, online bus booking is increasingly recognized as a more convenient, efficient, and economical mode of securing travel arrangements."
      },
    ],
    "Ticket-related": [
      { q: "How to download a bus ticket?", a: "You can download it from bookings section..." },
      { q: "How to reschedule a ticket?", a: "Go to manage booking and choose reschedule..." },
    ],
    Payment: [
      { q: "What payment methods are available?", a: "UPI, cards, netbanking, wallets..." },
    ],
    "Cancellation & Refund": [
      { q: "How to cancel a ticket?", a: "Go to your bookings and click cancel..." },
    ],
  };

  return (
    <div className="mb-4">
      <div className="text-black font-bold text-2xl py-4">
        FAQs related to Bus Tickets Booking
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-medium relative px-3 py-2 whitespace-nowrap hover:bg-gray-200 ${
              activeTab === tab ? "text-red-600" : "text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-1 rounded-2xl bg-red-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="mt-6">
        {faqData[activeTab].map((item, index) => (
          <FAQItem key={index} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  );
};

export default FAQPara;
