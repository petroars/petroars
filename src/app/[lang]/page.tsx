import Card from "@/components/card";
import EllipseDescription from "@/components/ellipseDescription";
import EllipseTitle from "@/components/ellipseTitle";
import Line from "@/components/line";
import { textGradient } from "@/utils/cssUtils";
import { Locales, getDictionary } from "@/dictionaries/index";
import Link from "next/link";
import { LOCALES } from "@/middleware";
import MapPinIcon from "@/components/icons/mapPin";
import MailIcon from "@/components/icons/mail";

type Props = {
  params: {
    lang: Locales;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const d = await getDictionary(lang);
  return (
    <>
      <header className="fixed z-50 flex w-screen items-center justify-between px-8 py-4 font-semibold text-[#A6A6A6] text-xl bg-[#090A1D]">
        <div className="flex justify-between gap-12">
          <Link href="#about">{d.nav.about}</Link>
          <Link href="#contacts">{d.nav.contact}</Link>
        </div>
        <div className="flex justify-end">
          {LOCALES.map((locale, index) => (
            <div key={locale}>
              <Link
                className={lang === locale ? "text-[#EFCEFF] font-bold" : ""}
                href={`/${locale}`}
                locale={locale}
              >
                {locale.toUpperCase()}
              </Link>
              {index !== LOCALES.length - 1 && (
                <span className="mx-[3px]">/</span>
              )}
            </div>
          ))}
        </div>
      </header>
      <main
        className="absolute -z-30 flex min-h-screen flex-col items-center justify-between w-screen"
        style={{
          background: "linear-gradient(180deg, #090A1D 0%, #11131B 100%)",
        }}
      >
        <section className="w-screen min-h-screen flex flex-col items-center">
          <EllipseTitle />
          <EllipseDescription />
          <div className="mt-24 px-12">
            <h1
              id="title"
              style={{
                ...textGradient(
                  "linear-gradient(90deg, #EFCEFF 0.01%, #4668FF 87.09%)"
                ),
                lineHeight: "1.1",
                // fontSize: "128px",
                fontWeight: "800",
              }}
            >
              {d.title}
            </h1>
          </div>
          <div className="pt-6 pb-12 xl:pt-12 w-[75%] 2xl:w-[50%] text-xl text-center text-[#666B73] font-medium">
            {d.description.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
                <br />
              </div>
            ))}
          </div>
          <div id="about"></div>
        </section>
        <section
          // id="about"
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="w-[80%] 2xl:w-[65%] h-[85%] 2xl:h-[70%] flex flex-col gap-8">
            <div className="flex max-lg:flex-col gap-8">
              {d.cards.slice(0, 2).map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <div className="flex max-lg:flex-col gap-8">
              {d.cards.slice(2).map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          id="contacts"
          className="w-full mt-32 pb-6 flex flex-col items-center"
        >
          <h1
            id="title-contacts"
            style={{
              ...textGradient(
                "linear-gradient(90deg, #4668FF 0.01%, #8BB1EC 87.09%)"
              ),
              fontWeight: "bold",
            }}
          >
            {d.contacts}
          </h1>
          <div className="mt-8">
            <Line />
          </div>
          <div className="mt-12 whitespace-nowrap gap-4 flex flex-col justify-center text-[#C0C0C0] text-2xl md:text-3xl">
            <h2 className="font-bold">Petroars group</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPinIcon />
                <span className="">Kabelín 75, 250 01 Zápy</span>
              </div>
              <Link href="mailto:sale@petroars.cz">
                <div className="flex items-center gap-2">
                  <MailIcon />
                  <span>sale@petroars.cz</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
