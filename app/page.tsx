import Ticket from "@/stories/Ticket/Ticket";

const mockTicket = {
  id: "123",
  title: "Network Issue",
  priority: "high",
  messages_count: 5,
  business: { name: "TechCorp" },
  _status: "1",
  created_at: "2024-11-23T14:30:00Z",
};

export default function Page() {
  return (
    <div>
      <Ticket ticket={mockTicket} />
    </div>
  );
}
