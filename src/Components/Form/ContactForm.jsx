import { React, useState } from "react";
import {
  Container,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Button,
  Textarea,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
    // Reset form data
    setFormData({
      name: "",
      email: "",
      telephone: "",
      reason: "",
      message: "",
    });
  };
  return (
    <Container>
      <Heading color="lightgray"> Contact me </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" marginBottom="4">
          <FormLabel color="lightgray">Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="email" marginBottom="4">
          <FormLabel color="lightgray">Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="telephone" marginBottom="4">
          <FormLabel color="lightgray">Telephone</FormLabel>
          <Input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </FormControl>

        {/* <FormControl id="reason" marginBottom="4">
          <FormLabel>Reason for contacting</FormLabel>
          <RadioGroup
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            <Stack direction="row">
              <Radio value="recruitment">Recruitment</Radio>
              <Radio value="other">Other</Radio>
            </Stack>
          </RadioGroup>
        </FormControl> */}

        <FormControl id="message" marginBottom="4">
          <FormLabel color="lightgray">Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            resize="vertical"
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
