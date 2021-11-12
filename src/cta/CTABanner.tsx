import React, { ReactNode } from "react";

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-right sm:flex-row sm:items-center sm:justify-between sm:p-12 rounded-md">
    <div className="gap-16 mb-16 text-center lg:grid-cols-3">
      <div className="flex items-center justify-center">
        <p className="text-6xl text-green-akhdark font-hawwa">
          އާއިލީ ބަދަހިކަން
        </p>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-6xl text-green-akhdark font-hawwa">
          އިޚުލާސްތެރިކަން
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-6xl text-green-akhdark font-hawwa">ތެދުވެރިކަން</h3>
      </div>
    </div>
    <div className="flex p-10 sm:center">
      <img src="/assets/images/fullnamelogodhiv.png" alt="no" />
    </div>
    <div className="mb-16 text-center lg:grid-cols-3">
      <div className="flex items-center justify-center">
        <h3 className="text-6xl text-green-akhdark font-hawwa">ކަށަވެތިކަން</h3>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-6xl text-green-akhdark font-hawwa">
          ނަޒާހަތްތެރިކަން
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-6xl text-green-akhdark font-hawwa">
          ދަރުމަވެރިކަން
        </h3>
      </div>
    </div>
  </div>
);

export { CTABanner };
