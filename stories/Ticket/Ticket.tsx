import Blocks from "../../stories/Blocks/Blocks";
import Language from "@/gcui-main/locales/Language";
import Badge from "../../stories/Badge/Badge";
import ColorTypes from "@/gcui-main/functions/ColorTypes";
import TicketStatus from "../TicketStatues/TicketStatus";

const Ticket = ({ ticket }) => {
  return (
    <Blocks.Dark>
      <div className={"flex items-center justify-between text-xs"}>
        <div className={"text-slate-600"}>
          {ticket.business && ticket.business.name}
        </div>
        <div>
          <Badge color={ColorTypes.default}>
            <a
              href={`/management/ticket/${ticket.id}`}
              className={"items-center flex gap-2"}
            >
              <span>{ticket.messages_count}</span>
              <span className={"fa fa-message-captions"} />
            </a>
          </Badge>
        </div>
      </div>
      <a href={`/management/ticket/${ticket.id}`} className={"text-slate-300"}>
        {ticket && ticket.priority == "low" && (
          <span className={"text-yellow-400 far fa-sun"} />
        )}
        {ticket && ticket.priority == "medium" && (
          <span className={"text-slate-500 fa fa-cloud"} />
        )}
        {ticket && ticket.priority == "high" && (
          <span className={"text-slate-200 fa fa-bolt"} />
        )}
        {ticket && ticket.priority == "urgent" && (
          <span
            className={"text-red-500 far fa-light-emergency-on fa-beat-fade"}
          />
        )}

        <span className={"ps-1"}>{ticket.title}</span>
      </a>
      <div className={"flex items-center justify-between mt-8"}>
        <div>{ticket && <TicketStatus status={ticket._status} />}</div>
        <div className={"flex gap-2 text-xs "}>
          <div className={"text-violet-300 myLtr"}>
            {new Date(ticket.created_at).getHours()} : {new Date().getMinutes()}
          </div>
          <div className={"myLtr"}>
            {new Date(ticket.created_at).toLocaleDateString("fa-IR")}
          </div>
        </div>
      </div>
    </Blocks.Dark>
  );
};
export default Ticket;
