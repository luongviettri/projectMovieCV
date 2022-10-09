/* eslint-disable */
import React from "react";
import Buttons from "../../../Components/Buttons";
import Section from "../../../Components/Section/Section.styled";
import { Title } from "../../../Components/Section/Title";
import Ticket from "../../../Components/Ticket/Ticket";

function DetailTicket() {
  return (
    <Section hasBG={{ big: "center", small: "right bottom" }}>
      <div className="mx-auto w-11/12">
        <div className="mt-5 grid grid-cols-7">
          <div className="col-span-2 p-5">
            <Ticket />
          </div>
          <div className="col-span-5">
            <div className="h-4/5 text-xl">
              <h1 className="text-4xl font-medium text-green-400">Congratulation, you have completed your booking!</h1>
              <div className="my-12 pl-10">
                <li>Your ticket and invoice are sent to your provided number</li>
                <li>You can also download your e-ticket with button below</li>
                <li>Please scan it and enjoy the movie</li>
              </div>
              <Buttons.Bg className="rounded-lg " content="Download Ticket" />
              <Buttons.Trans className="ml-3 rounded-lg" content="Share" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default DetailTicket;
