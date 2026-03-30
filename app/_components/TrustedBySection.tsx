export default function TrustedBySection() {
  return (
    <section
      className="h-[163px] w-full border-y-[0.8px] bg-[#FAFBFC] flex flex-col items-center justify-center gap-6"
      style={{ borderColor: "#E8ECF099" }}
    >
      <p className="font-poppins text-[13px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
        Trusted by graduates from top universities
      </p>
      <div className="container mx-auto max-w-[1200px] flex items-center justify-center gap-12 md:gap-20">
        <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
          Universitas Indonesia
        </span>
        <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
          ITB
        </span>
        <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
          Binus University
        </span>
        <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
          UGM
        </span>
        <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
          ITS Surabaya
        </span>
      </div>
    </section>
  );
}
