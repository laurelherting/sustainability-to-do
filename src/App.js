import React from "react";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        name="Bike"
        imgURL="https://unsplash.com/photos/kJZSIXoXrUE"
        credits="Pop & Zebra"
      />
      <ContactCard
        name="Reusable Bag"
        imgURL="https://unsplash.com/photos/ILR5ikYmXDE"
        credits="Sylvie Tittel"
      />
      <ContactCard
        name="Forest"
        imgURL="https://unsplash.com/photos/wCLGDSpaV6g"
        credits="Johan Anblick"
      />
      <ContactCard
        name="Solar Panels"
        imgURL="https://unsplash.com/photos/WvusC5M-TM8"
        credits="Chelsea"
      />
    </div>
  );
}

export default App;
