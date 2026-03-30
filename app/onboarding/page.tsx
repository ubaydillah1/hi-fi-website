"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingSidebar from "./_components/Sidebar";
import Step1 from "./_components/Step1";
import Step2 from "./_components/Step2";
import Step3 from "./_components/Step3";
import Step4 from "./_components/Step4";
import Step5 from "./_components/Step5";
import Step6 from "./_components/Step6";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const progressPercent = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const finishOnboarding = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white font-poppins relative">
      <div
        className="absolute top-0 left-0 h-1 bg-[#066EFF] transition-all duration-500 ease-in-out z-50"
        style={{ width: `${progressPercent}%` }}
      />

      <OnboardingSidebar currentStep={currentStep} />

      <div className="grow h-full overflow-y-auto flex flex-col items-center justify-center bg-white px-8">
        <div className="w-full flex flex-col items-center">
          {currentStep === 1 && <Step1 onNext={nextStep} />}
          {currentStep === 2 && <Step2 onNext={nextStep} onBack={prevStep} />}
          {currentStep === 3 && <Step3 onNext={nextStep} onBack={prevStep} />}
          {currentStep === 4 && <Step4 onNext={nextStep} onBack={prevStep} />}
          {currentStep === 5 && <Step5 onNext={nextStep} onBack={prevStep} />}
          {currentStep === 6 && (
            <Step6 onFinish={finishOnboarding} onBack={prevStep} />
          )}
        </div>
      </div>
    </div>
  );
}
