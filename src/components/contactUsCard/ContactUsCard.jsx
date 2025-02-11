import { contactUsData } from "../../data/ContactUsCard";

const ContactUsCard = () => {
  return (
    <>
      <section className="my-10 flex items-center justify-center">
        <div className="w-11/12 flex flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center gap-5 lg:gap-3 xl:gap-7 md:gap-10">
          {contactUsData.map((data, i) => {
            return (
              <div
                key={i}
                className="w-full sm:w-2/5 lg:w-1/3  p-5 xl:p-7 shadow-2xl flex flex-col xl:flex-row items-center justify-start gap-5 rounded-xs group/background"
              >
                <span className="w-fit flex items-center justify-center p-5 text-primary group-hover/background:bg-primary group-hover/background:text-white transform transition-all duration-300  rounded-full bg-gray-100">
                  <data.icon className="w-6 h-6 lg:h-6 lg:w-6" />
                </span>
                <div className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-xl lg:text-2xl font-semibold">
                    {data.name}
                  </h3>
                  <span className="text-sm lg:text-lg">{data.address}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ContactUsCard;
