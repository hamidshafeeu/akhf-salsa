import React from "react";

import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Team } from "./Team";
import { Values } from "./Values";

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div className="text-center flex flex-col sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-6 bg-hero-pattern opacity-10 rounded-md"></div>
    <Banner />
    <div className="text-center flex flex-col p-6 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-6 bg-hero-pattern opacity-10 rounded-md"></div>
    {/* <VerticalFeatures /> */}
    <Values />
    <Team />
    <div className="text-center flex flex-col p-6 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-6 bg-hero-pattern opacity-10 rounded-md"></div>
    <Footer />
  </div>
);

export { Base };
