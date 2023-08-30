import Link from "next/link";
import Cta from "./components/Cta";
import { fbEvent } from "./components/custom/Conversion-API-wrapper";
import { useEffect } from "react";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;
  const handleFbConversion = () => {
    try {
      console.log(`fbEvent called from Pricing`);
      console.log(`process.env.NEXT_PUBLIC_FB_PIXEL_ID`,process.env.NEXT_PUBLIC_FB_PIXEL_ID);
      console.log(`FB_ACCESS_TOKEN`,process.env.FB_ACCESS_TOKEN);
    fbEvent({
      eventName: 'ViewContent',
      firstName: 'PriceName',
      emails:['shevin12@gmail.com'],
      enableStandardPixel: true,
    }); // default event
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFbConversion();
  }, []);
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col-recommended"
                }`}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4>{plan.title}</h4>
                  <div className="mt-5">
                    <span className="text-5xl text-dark">${plan.price}</span>
                    <span>/ {plan.type}</span>
                  </div>
                  <h5 className="mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn mt-5 ${
                      plan.recommended ? "btn-primary" : "btn-outline-primary"
                    }`}
                    href={plan.button.link}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
