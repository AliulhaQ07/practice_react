import React from "react";
import image from "/src/assets/Islamic.png";
import image2 from "/src/assets/pex.jpg";

// CARD FEILDS COMPONENT
function CardFeilds({ CardTitle, CardSubtitle }) {
  return (
    <>
      <div>
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">
            {CardTitle}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {CardSubtitle}
          </h2>
        </div>
      </div>
    </>
  );
}

// CARD DESC COMPONENT
// TRYING TO ACHEIVE CUSTOM SYLING USING PROPS & TAILWINDCSS
function CardDescription({ cardDesc = "DEFAULT CARD DESCRIPTION" }) {
  return (
    <>
      <div>
        <p className="text-gray-100 dark:text-gray-800 ">{cardDesc}</p>
      </div>
    </>
  );
}

// CARD WALLPAPER COMPONENT
function CardWallpaper(props) {
  let imageSource = props.ImageSource;
  let alt = props.alt;

  return (
    <div>
      <img
        src={imageSource}
        alt={alt}
        className="object-cover object-center w-full rounded-md h-52 bg-gray-500 dark:bg-gray-500"
      />
    </div>
  );
}

// INVOKING UPPER 3 COMPONENTS IN CARD BODY AND THEN MAKING THESE 3 PARENT COMP CHILD TO CARD BODY COMP
// IN CARDS COMPONENT AND PASSING THE DATA BETWEEN PARENT TO CHILD
// HIERARCHY IS FROM DOWN(PARENT) TO UP(CHILD).
function CardBody({
  ImageSource,
  alt = "img...",
  CardTitle = "React Props",
  CardSubtitle = "React Props",
  cardDesc = "React Props",
}) {
  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
        <CardWallpaper ImageSource={ImageSource} alt={alt} />

        <CardFeilds CardTitle={CardTitle} CardSubtitle={CardSubtitle} />

        <CardDescription cardDesc={cardDesc} />
      </div>
    </>
  );
}

const Cards = () => {
  return (
    <>
      {/*SENDING PROPS FROM PARENT TO CHILD */}
      <CardBody
        ImageSource={image}
        // alt={"checking"}
        CardTitle="BISMILLAH"
        CardSubtitle={"INSHALLAH"}
        cardDesc={"ALLAH IS ONE"}
      />

      <CardBody
        ImageSource={image2}
        alt={"checking"}
        CardTitle="QURAN-E-HAKEEM"
        CardSubtitle={"THE LAST BOOK"}
        cardDesc={
          "The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation directly from God (Allāh)."
        }
      />

      <CardBody
        ImageSource={
          "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={"nature img..."}
        CardTitle={"Flowers"}
        CardSubtitle={"PINK FLOWERS HANGING"}
        cardDesc={
          "Pink roses typically symbolise admiration, happiness, and love."
        }
      />
    </>
  );
};
export default Cards;
