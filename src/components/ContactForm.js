import React, { useState } from "react";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
  Box,
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
const ContactForm = ({ addContact }) => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    photo: "",
  };

  const [newContact, setNewContact] = useState(initialState);
  const handleChange = (name, value) => {
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact(initialState);
  };
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <Box>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="name"
              label="name"
              value={newContact.name}
              onChange={(e) => handleChange("name", e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              sx={{ marginTop: "0.5em" }}
              id="name"
              label="phone"
              value={newContact.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              sx={{ marginTop: "0.5em" }}
              id="name"
              label="email"
              value={newContact.email}
              onChange={(e) => handleChange("email", e.target.value)}
            ></TextField>
            <TextField
              fullWidth
              sx={{ marginTop: "0.5em" }}
              id="name"
              label="photo"
              value={newContact.photo}
              onChange={(e) => handleChange("photo", e.target.value)}
            ></TextField>
          </form>
        </CardContent>
        <CardActions>
          <Button type="submit" sx={{ marginTop: "0.5em" }} variant="outlined">
            Add Contact
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ContactForm;
