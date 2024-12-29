import React, { useState } from "react";
import { TextInput, Grid, Button, Notification } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

const Step7 = ({ data, onUpdate }) => {
  // State for form fields
  const [phone, setPhone] = useState(data.phone || "");
  const [email, setEmail] = useState(data.email || "");
  const [website, setWebsite] = useState(data.website || "");
  const [facebook, setFacebook] = useState(data.facebook || "");
  const [instagram, setInstagram] = useState(data.instagram || "");
  const [tiktok, setTikTok] = useState(data.tiktok || "");

  const [error, setError] = useState({ phone: "", email: "" });

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{10}$/; // Matches 10-digit phone numbers
    if (value && !phoneRegex.test(value)) {
      setError((prev) => ({ ...prev, phone: "Invalid phone number (10 digits required)." }));
    } else {
      setError((prev) => ({ ...prev, phone: "" }));
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Matches a valid email format
    if (value && !emailRegex.test(value)) {
      setError((prev) => ({ ...prev, email: "Invalid email format." }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
    validatePhone(value);
    onUpdate({ phone: value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    validateEmail(value);
    onUpdate({ email: value });
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
    onUpdate({ website: event.target.value });
  };

  const handleFacebookChange = (event) => {
    setFacebook(event.target.value);
    onUpdate({ facebook: event.target.value });
  };

  const handleInstagramChange = (event) => {
    setInstagram(event.target.value);
    onUpdate({ instagram: event.target.value });
  };

  const handleTikTokChange = (event) => {
    setTikTok(event.target.value);
    onUpdate({ tiktok: event.target.value });
  };

  const handleSubmit = () => {
    if (!error.phone && !error.email) {
      console.log("Form submitted", { phone, email, website, facebook, instagram, tiktok });
    } else {
      console.log("Validation errors:", error);
    }
  };

  return (
    <div className="p-5 space-y-9">
      {/* Contact Information */}
      <Grid gutter="md">
        <Grid.Col span={6}>
          <TextInput
            variant="filled"
            label="Phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
            error={error.phone} 
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            variant="filled"
            label="Email"
            placeholder="Enter email address"
            value={email}
            onChange={handleEmailChange}
            error={error.email} 
          />
        </Grid.Col>
      </Grid>

      {/* Website */}
      <Grid gutter="md">
        <Grid.Col span={12}>
          <TextInput
            variant="filled"
            label="Website"
            placeholder="Enter website URL"
            value={website}
            onChange={handleWebsiteChange}
          />
        </Grid.Col>
      </Grid>

      {/* Social Media Links */}
      <Grid gutter="md">
        <Grid.Col span={4}>
          <TextInput
            variant="filled"
            label="Facebook"
            placeholder="Enter Facebook URL"
            value={facebook}
            onChange={handleFacebookChange}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            variant="filled"
            label="Instagram"
            placeholder="Enter Instagram URL"
            value={instagram}
            onChange={handleInstagramChange}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput
            variant="filled"
            label="TikTok"
            placeholder="Enter TikTok URL"
            value={tiktok}
            onChange={handleTikTokChange}
          />
        </Grid.Col>
      </Grid>



      {/* Notifications for errors */}
      {(error.phone || error.email) && (
        <Notification
          icon={<IconX size={18} />}
          color="red"
          title="Validation Error"
          onClose={() => setError({ phone: "", email: "" })}
        >
          {error.phone || error.email}
        </Notification>
      )}
    </div>
  );
};

export default Step7;
