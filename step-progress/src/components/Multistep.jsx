import { useState } from "react";
import { Stepper, Button } from "@mantine/core";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import Step7 from "./steps/step7";

const Multistep = () => {
  const [active, setActive] = useState(() => {
    const savedStep = localStorage.getItem("activeStep");
    const validStep = savedStep ? parseInt(savedStep, 10) : 0;
    return validStep >= 0 && validStep <= 7 ? validStep : 0;
  });

  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: "",
    step3Data: {},
    step4Data: {},
    step5Data: {},
    step6Data: {},
    step7Data: {},
  });

  const updateFormData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  };

  const validateStep = () => {
    if (active === 1 && !formData.step2Data) {
      alert("Please select an option to proceed.");
      return false;
    }
    if (active === 2 && (!formData.step3Data.name || !formData.step3Data.businessType)) {
      alert("Please fill out all required fields.");
      return false;
    }
    if (active === 3 && (!formData.step4Data.country || !formData.step4Data.city)) {
      alert("Please fill out all required localization fields.");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setActive((current) => {
      const next = current < 7 ? current + 1 : current;
      localStorage.setItem("activeStep", next);
      return next;
    });
  };

  const prevStep = () => {
    setActive((current) => {
      const prev = current > 0 ? current - 1 : current;
      localStorage.setItem("activeStep", prev);
      return prev;
    });
  };

  const resetSteps = () => {
    localStorage.removeItem("activeStep");
    setActive(0);
    setFormData({
      step1Data: {},
      step2Data: "",
      step3Data: {},
      step4Data: {},
      step5Data: {},
      step6Data: {},
      step7Data: {},
    });
  };

  const stepTitles = [
    "Welcome",
    "Choose an Option",
    "Basic Info",
    "Localization",
    "Restaurant Identity",
    "Restaurant Gallery",
    "Contact & Social Media",
    "Final Step",
  ];

  const stepDescriptions = [
    "Start your journey",
    "Select what suits you",
    "Basic Restaurant Info",
    "Localization",
    "Restaurant Identity",
    "Restaurant Gallery",
    "Contact & Social Media",
    "You're almost done",
  ];

  return (
    <div className="w-full p-5">
      <Stepper
        color="rgb(224 39 50)"
        active={active}
        breakpoint="sm"
        allowNextStepsSelect={false}
      >
        {stepTitles.map((title, index) => (
          <Stepper.Step
            key={index}
            label={title}
            description={stepDescriptions[index]}
          >
            {index === 0 && (
              <Step1
                data={formData.step1Data}
                onUpdate={(data) => updateFormData("step1Data", data)}
              />
            )}
            {index === 1 && (
              <Step2
                data={formData.step2Data}
                onSelect={(selection) => updateFormData("step2Data", selection)}
              />
            )}
            {index === 2 && (
              <Step3
                data={formData.step3Data}
                onUpdate={(data) => updateFormData("step3Data", data)}
              />
            )}
            {index === 3 && (
              <Step4
                data={formData.step4Data}
                onUpdate={(data) => updateFormData("step4Data", data)}
              />
            )}
            {index === 4 && (
              <Step5
                data={formData.step5Data}
                onUpdate={(data) => updateFormData("step5Data", data)}
              />
            )}
            {index === 5 && (
              <Step6
                data={formData.step6Data}
                onUpdate={(data) => updateFormData("step6Data", data)}
              />
            )}
            {index === 6 && (
              <Step7
                data={formData.step7Data}
                onUpdate={(data) => updateFormData("step7Data", data)}
              />
            )}
            {index === 7 && (
              <div className="text-center">
                <p className="text-gray-800 font-medium">
                  Congratulations! You've completed the steps.
                </p>
              </div>
            )}
          </Stepper.Step>
        ))}
        <Stepper.Completed>
          <div className="text-center">
            <p className="text-green-600 p-20 font-bold">
              You have successfully completed all steps! 🎉
            </p>
            
          </div>
        </Stepper.Completed>
      </Stepper>

      <div className="w-full rounded-2xl px-5 py-3">
        <div className="flex justify-between items-center mt-6">
          <Button
            className="text-gray-600 hover:text-gray-800"
            variant="default"
            onClick={prevStep}
            disabled={active === 0}
          >
            Back
          </Button>
          <Button
            className={`text-white w-auto ${
              active < 7 ? "bg-red-600 hover:bg-red-500" : "bg-green-600 hover:bg-green-500"
            }`}
            onClick={active < 7 ? nextStep : resetSteps}
          >
            {active < 7 ? "Next" : "Finish"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Multistep;
