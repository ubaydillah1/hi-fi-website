import SignUpBranding from "./_components/SignUpBranding";
import SignUpForm from "./_components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F9FAFB] font-poppins">
      <SignUpBranding />
      <div className="grow h-full flex flex-col items-center px-6 md:px-12 py-[70px] overflow-y-auto">
        <SignUpForm />
      </div>
    </div>
  );
}
