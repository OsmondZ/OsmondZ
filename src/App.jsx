import React, { useState } from "react";

export default function App() {
  let [obj, setObj] = useState("");
  obj = {
    type: "mailbox_message",
    category: "personal_message",
    notification_title: false,
    title: "sxdfgchvjbknmk",
    publish_date: "2022-02-23",
    publish_time: "00:00",
    tier: false,
    userSegment: ["osmond951024@163.com"],
    poster_image:
      "https://wepdev.blob.core.windows.net/$web/asset/ad3e11b4-36da-40d1-86b1-56bdd1fb483a/3229342097a211ec81a267f8357cd4d4jpeg",
    content: false,
    redirect_url: false,
    cta_button: "",
    in_app_page_type: false,
    in_app_type: false,
    cover_image: false,
    thumbnail_image:
      "https://wepdev.blob.core.windows.net/$web/asset/a0f34ac3-adf9-454f-8c93-73c0c7ebe1bd/6b51778097a211ec81a267f8357cd4d4png",
  };
  for (const key in obj) {
    if (!obj[key]) {
   ç }
  }

  return <div>nation is on the wall</div>;
}
