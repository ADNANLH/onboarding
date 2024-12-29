import React, { useState } from "react";
import { TextInput, Select, Grid, Textarea, TagsInput } from "@mantine/core";

const Step5 = ({ data, onUpdate }) => {

  const [cuisines, setCuisines] = useState(data.cuisines || []); // For Tag Inputs
  const [features, setFeatures] = useState(data.features || []); // For Tag Inputs
  const [about, setAbout] = useState(data.about || ""); // For Textarea

  // Handle changes
  
  const handleCuisinesChange = (values) => {
    setCuisines(values);
    onUpdate({ cuisines: values });
  };

  const handleFeaturesChange = (values) => {
    setFeatures(values);
    onUpdate({ features: values });
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
    onUpdate({ about: event.target.value });
  };

  return (
    <div className="p-5 space-y-9">
      {/* Cuisine and Features */}
      <Grid gutter="md">
        <Grid.Col span={6}>
          <TagsInput
            variant="filled"
            label="Cuisine"
            value={cuisines && cuisines.length > 0 ? cuisines : ['Italian']}
            onChange={handleCuisinesChange}
            clearable
            placeholder="Add a cuisine"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TagsInput
            variant="filled"
            label="Feature"
            value={features && features.length > 0 ? features : ['WIFI']}
            onChange={handleFeaturesChange}
            clearable
            placeholder="Add a feature"
          />
        </Grid.Col>
      </Grid>

      {/* About Textarea */}
      <Grid gutter="md" mt="md">
        <Grid.Col span={12}>
          <Textarea
            variant="filled"
            placeholder="Tell us about your restaurant"
            label="About"
            value={about}
            onChange={handleAboutChange}
            autosize
            minRows={2}
          />
        </Grid.Col>
      </Grid>

 
    </div>
  );
};

export default Step5;
