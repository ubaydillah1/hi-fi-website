import SignInBranding from "./_components/SignInBranding";
import SignInForm from "./_components/SignInForm";

export default function SignPage() {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-poppins">
      <SignInBranding />
      <div className="grow flex flex-col items-center justify-center p-6 md:p-12">
        <SignInForm />
      </div>
    </div>
  );
}
