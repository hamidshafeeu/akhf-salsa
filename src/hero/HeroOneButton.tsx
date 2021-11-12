// import router from 'next/router';
import { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  // button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header>
    <div className="flex flex-wrap items-center sm:items-center sm:justify-between ">
      <div className="w-full sm:w-1/3 text-left sm:px-6">
        <h3 className="text-2xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="text-xl text-gray-200 leading-9">
          {props.description}
        </div>
      </div>

      <div className="w-1/6 sm:w-1/6 sm:center">
        <img src={`${props.image}`} alt={props.imageAlt} />
      </div>
      <div className="w-full sm:w-1/3 text-right sm:px-6">
        <h3 className="text-xl text-gray-100 font-theras">
          އާއިލީ ގުޅުމުގެ ތެރެއިން އިލްމީ އަދި ފަންނީ ޤާބިލުކަމާއި އިޖުތިމާއީ
          ދުޅަހެޔޮކަމާއި ހޭލުންތެރިކަން އިތުރުކުރުމަށް ދަރުމަވެރިކަމާއިއެކު
          މަސައްކަތްކޮއްގެން ހަރުދަނާ، ޤާބިލު، ހޭލުންތެރި، ފުދުންތެރި
          މުޖުތަމައެއް ބިނާކުރުމަށް އެހީތެރިވުން
        </h3>
        {/* <div className="mt-6 text-xl text-gray-200 leading-9">
          {props.description}
        </div> */}
      </div>
    </div>
    <div className="text-center flex flex-col sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-6 bg-hero-pattern opacity-10 rounded-md"></div>

    {/* <div className="w-full sm:w-1/2 p-6">
        <img src={`${props.image}`} alt={props.imageAlt} />
      </div> */}
    {/* <img src="/assets/Logos-09.svg" className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"/> */}
    {/* </div> */}

    {/* <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div> */}
    {/* <h1 className="text-5xl text-gray-900 font- bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    {props.button} */}
  </header>
);

export { HeroOneButton };
