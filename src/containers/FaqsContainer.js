import React from "react";

import Accordion from "../components/accordion";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

const Faqs = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>

      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Text>
          Ready to watch Netflix? Enter you email to create or restart your
          membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>GET STARTED</OptForm.Button>
      </OptForm>
    </Accordion>
  );
};

export default Faqs;
