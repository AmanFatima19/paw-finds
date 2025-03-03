import React from "react"; 
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css"; 


function FaqSection() {
  return (
    <div> 
      <h2 className="text-2xl text-center text-black" style={{ fontWeight: "700",marginTop:"90px"}}>
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center py-10">
        <div className="w-full max-w-3xl">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is PawFinds completely free to use?</Accordion.Header>
              <Accordion.Body>
              Yes! PawFind is currently free to use. You can explore available pets, connect with verified owners, and access resources without any cost.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How does the PawFind process work?</Accordion.Header>
              <Accordion.Body>
              Simply browse the pets available for adoption, fill out a short form, and wait for the pet owner to review your application. If approved, you'll get connected to finalize the adoption.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Are the pets vaccinated and healthy?</Accordion.Header>
              <Accordion.Body>
              Yes, we ensure that all listed pets are vaccinated and checked for health conditions by their owners before making them available for adoption.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Do you offer grooming and fun activities for adopted pets?</Accordion.Header>
              <Accordion.Body>
              Absolutely! We offer grooming tips and recommend fun activities to help your new pet feel at home. Stay tuned for our upcoming grooming service.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Can I adopt more than one pet at a time?</Accordion.Header>
              <Accordion.Body>
              Yes, you can apply for multiple adoptions. However, approvals depend on the pet owners' review of your application for each pet.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header> Is there any support if I face issues during adoption?</Accordion.Header>
              <Accordion.Body>
              Yes, we provide 24/7 support to assist you throughout the adoption process. You can reach out anytime for help.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>How do I know if the pet suits my lifestyle?</Accordion.Header>
              <Accordion.Body>
              Our platform provides detailed information about each pet's personality, energy level, and care requirements to help you find the perfect match.
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
