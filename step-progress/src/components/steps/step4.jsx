import React, { useState } from "react";
import { TextInput, Select, Grid } from "@mantine/core";


const Step4 = ({ data, onUpdate }) => {
  const [address, setAddress] = useState(data.address || "");
  const [country, setCountry] = useState(data.country || "");
  const [city, setCity] = useState(data.city || "");
  const [zipCode, setZipCode] = useState(data.zipCode || "");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    onUpdate({ address: event.target.value });
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    onUpdate({country: event.target.value});
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    onUpdate({ city: event.target.value });
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    onUpdate({ zipCode: event.target.value });
  };

  return (
    <div className="p-5 space-y-9">
      {/* Country and City Inputs */}
      <Grid gutter="md" mt="md">
        <Grid.Col span={6}>
          <TextInput
            variant="filled"
            label="Country"
            placeholder="Enter country"
            value={country}
            onChange={handleCountryChange}
            required
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            variant="filled"
            label="City"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
            required
          />
        </Grid.Col>
      </Grid>

      {/* Address and Zip Code */}
      <Grid gutter="md">
        <Grid.Col span={6}>
          <TextInput
            variant="filled"
            label="Address"
            placeholder="Enter restaurant address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            variant="filled"
            label="Zip Code"
            placeholder="Enter zip code"
            value={zipCode}
            onChange={handleZipCodeChange}
            required
          />
        </Grid.Col>
      </Grid>

      {/* Map Placeholder */}
      <div className="mb-4 mt-4">
        <div className="bg-gray-200 p-4 text-center text-sm text-gray-600">
          Map functionality will be added here. (Lat/Long mapping pending)
        </div>
      </div>
    </div>
  );
};

export default Step4;
