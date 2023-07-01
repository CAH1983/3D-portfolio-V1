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
  FormErrorMessage,
} from "@chakra-ui/react";

const initValues = {
  name: "",
  email: "",
  telephone: "",
  topic: "",
  message: "",
};

const initState = { values: initValues };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // Handle form submission logic here
  //   // Reset form data
  //   setFormData({
  //     name: "",
  //     email: "",
  //     telephone: "",
  //     reason: "",
  //     message: "",
  //   });
  // };
  return (
    <Container>
      <Heading color="#86daf6" mb={2}>
        Contact me{" "}
      </Heading>

      {/* ====== Form starts here ====== */}
      <form>
        {/* ------- Name -------- */}
        <FormControl
          id="name"
          marginBottom="4"
          isInvalid={!values.name}
          isRequired
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={values.name}
            errorBorderColor="red.300"
            onChange={handleChange}
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- E-mail -------- */}
        <FormControl
          id="email"
          marginBottom="4"
          isInvalid={!values.email}
          isRequired
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            errorBorderColor="red.300"
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- Tel -------- */}

        <FormControl
          id="telephone"
          marginBottom="4"
          isInvalid={!values.telephone}
          isRequired
        >
          <FormLabel>Telephone</FormLabel>
          <Input
            type="tel"
            name="telephone"
            value={values.telephone}
            onChange={handleChange}
            errorBorderColor="red.300"
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- Topic -------- */}
        <FormControl
          id="topic"
          marginBottom="4"
          isInvalid={!values.topic}
          isRequired
        >
          <FormLabel>Topic</FormLabel>
          <RadioGroup name="topic" errorBorderColor="red.300">
            <Stack color="#e6e3e3" direction="row">
              <Radio
                value="recruitment"
                checked="recruitment"
                size="sm"
                onChange={handleChange}
              >
                Recruitment
              </Radio>
              <Radio
                value="other"
                checked="other"
                size="sm"
                onChange={handleChange}
              >
                Other
              </Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- Message -------- */}
        <FormControl id="message" marginBottom="4" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            resize="vertical"
            errorBorderColor="red.300"
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
