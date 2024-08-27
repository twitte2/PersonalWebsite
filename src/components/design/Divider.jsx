import PlusSvg from "../../assets/svg/PlusSvg";

export const SectionLine = () => {
  return (
    <>
      <div className="hidden absolute top-[1.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[0.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[0.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};
