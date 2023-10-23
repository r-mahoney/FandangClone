export default function getImages() {
  const imagesObj = [
    {
      movieName: "TAYLOR SWIFT | THE ERAS TOUR",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232921/Fandango_Poster_900x1333.jpg",
    },
    {
      movieName: "Killers of the Flower Moon (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232014/KFM_Hero_Scene_DOM_Social_4x5_1080x1350_Rated.jpg",
    },
    {
      movieName: "The Exorcist: Believer (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231976/EXT_Tsr1Sheet8_RGB_1SM.jpg",
    },
    {
      movieName: "PAW Patrol: The Mighty Movie (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232218/pptmmdom2025x3000onlineratedteaser1sht02fin3.jpg",
    },
    {
      movieName: "Saw X (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232577/Saw-X_2023.jpg",
    },
    {
      movieName: "The Nightmare Before Christmas 30th Anniversary (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233197/SNO-NBC-Poster-23.jpg",
    },
    {
      movieName: "The Creator (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231997/CREATOR_1SHT_DIGITAL_376_sRGB_V6.jpg",
    },
    {
      movieName: "A Haunting in Venice (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231120/CAN969_CandlePoster_Static_9x16_Dated.jpg",
    },
    {
      movieName: "The Blind (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232024/The%20Blind_1000X1480_FE%20Website%20Thumbnail.jpg",
    },
    {
      movieName: "LEO: Bloody Sweet (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233473/leobloodysweet-posterart.jpg",
    },
    {
      movieName: "The Nun II (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232432/THNUN2_INSTA_VERT_MAIN_1638x2048_DOM.jpg",
    },
    {
      movieName: "Hocus Pocus 30th Anniversary (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233347/SNO-Hocus_Pocus-Poster-23.jpg",
    },
    {
      movieName: "The Equalizer 3 (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/227748/TheEqualizer3_2023.jpg",
    },
    {
      movieName: "Dumb Money (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232282/DumbMoney_NowPlaying.jpg",
    },
    {
      movieName: "Dicks: The Musical (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232701/DICKS_Poster.jpg",
    },
    {
      movieName: "Butcher's Crossing (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233414/butcherscrossing-posterart.jpg",
    },
    {
      movieName: "Bhagavanth Kesari (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232898/bhagavanthkesari-posterart.jpg",
    },
    {
      movieName: "Barbie (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/185727/BARBIE_VERT_TSR.jpg",
    },
    {
      movieName: "The Canterville Ghost (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233530/CantervilleGhost_27x40_Poster_Final_Large.jpg",
    },
    {
      movieName: "Teenage Mutant Ninja Turtles: Mutant Mayhem (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231059/TMNTMM_ONLINE_PAYOFF_DIGITALKEYART_SKATEBOARDJUMP_v8.jpg",
    },
    {
      movieName: "Expend4bles (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232154/expend4bles-EXP4_ONLINE_POSTER_DIGITAL_HERO_7A_RGB_R1_rgb.jpg",
    },
    {
      movieName: "Blue Beetle (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231534/BLBTL_VERT_MONTAGE_2764x4096_DOM_EM.jpg",
    },
    {
      movieName: "My Big Fat Greek Wedding 3 (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231938/MBFGW3_1-SHT_27x40_w29_FIN12.jpg",
    },
    {
      movieName: "Sound of Freedom (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231882/SOF_Vertical-Key-Art_1080x1600_20230510_BP.jpg",
    },
    {
      movieName: "Soul Mates (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233807/soul_mates.jpg",
    },
    {
      movieName: "Tiger Nageswara Rao (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233759/TNR-Poster-30-X-40.jpg",
    },
    {
      movieName: "The Other Zoey (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233547/theotherzoey-posterart.jpg",
    },
    {
      movieName: "The Persian Version (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232089/SONY-PVMI-22_DigitalOS_1934x2866.jpg",
    },
    {
      movieName: "Anatomy of a Fall",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232846/AnatomyOfAFall-2023.jpg",
    },
    {
      movieName: "Oppenheimer (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/230575/OPR_Tsr1Sheet3_Look2_RGB_3SM.jpg",
    },
    {
      movieName: "Malibu Horror Story",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/227532/MalibuHorrorStory1080x1920__B1copy.jpg",
    },
    {
      movieName: "Foe (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233161/FOE1_2023_DigitalOneSheet_BookCover_27x40_THEATRICAL_FINAL_en-US_PRICO.jpg",
    },
    {
      movieName: "Ganapath (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233633/Ganapath.JPG",
    },
    {
      movieName: "Under the Light (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233881/underthelight-posterart.jpg",
    },
    {
      movieName: "Moana (2016) � Disney100 Special Engagement",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232297/Disney100_DigitalPosters_Moana.jpg",
    },
    {
      movieName: "Nyad (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233549/nyad-posterart.jpg",
    },
    {
      movieName: "Talk to Me (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231640/TKTME_KeyArtDigitalVRT_RGB-FIN_R12_Updated_7723.jpg",
    },
    {
      movieName: "It Lives Inside (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232724/itliveswithin-posterart.jpg",
    },
    {
      movieName: "Indiana Jones and the Dial of Destiny (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/230475/PLT_Payoff_1-Sht_v5_Lg.jpg",
    },
    {
      movieName: "Joan Baez I Am A Noise (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232991/joan_baez.jpg",
    },
    {
      movieName: "Gran Turismo: Based on a True Story (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231714/GT_OnLine_6072x9000_TSR_Swirl_03.jpg",
    },
    {
      movieName: "Divinity",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233183/divinity.jpg",
    },
    {
      movieName: "Haunted Mansion (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/228958/JoyRide_Payoff_1-Sht_Printed_v5_sm.jpg",
    },
    {
      movieName: "She Came to Me (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232097/SheCametoMe_Poster.jpg",
    },
    {
      movieName: "Stop Making Sense (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232767/StopMakingSense-2023.jpg",
    },
    {
      movieName: "The Royal Hotel (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233164/GS_NEON_TheRoyalHotel_CMYK_Digital_Fin01.jpg",
    },
    {
      movieName: "Maujaan Hi Maujaan (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/",
    },
    {
      movieName: "When Evil Lurks (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233462/WEVLK_KeyArtVRT-MainArt-27x40_RGB-FIN.jpg",
    },
    {
      movieName: "Sam and Colby: A Week At The Conjuring House (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/",
    },
    {
      movieName: "Yaariyan 2 (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233634/Yaariyan2.JPG",
    },
    {
      movieName: "MAD (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/",
    },
    {
      movieName: "Onyx the Fortuitous and the Talisman of Souls",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232633/Onyx-250x375.jpg",
    },
    {
      movieName: "Pain Hustlers (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233861/pain_hustlers.jpg",
    },
    {
      movieName: "Strange Way of Life (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233120/SONY-SWMI-08_USPoster_1934x2866.jpg",
    },
    {
      movieName: "The Meg 2: The Trench (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231713/TheMeg2_Poster_2023.jpg",
    },
    {
      movieName: "Mission: Impossible - Dead Reckoning - Part One (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/223028/midrp1dom2037x3000payoffdigital1sht01fin18.jpg",
    },
    {
      movieName: "A Very Good Girl (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233553/averygoodgirl-posterart.jpg",
    },
    {
      movieName: "Jawan (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231675/JawanPoster2.jpg",
    },
    {
      movieName: "Video City: Be Kind, Please Rewind (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233911/videocity-posterart.jpg",
    },
    {
      movieName: "Golda (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232617/Golda_International_1sht_AW3.jpg",
    },
    {
      movieName: "Bottoms (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232004/Bottoms-Official-Poster.jpg",
    },
    {
      movieName: "The Exorcist 50th Anniversary",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232436/theexorcist50th-1000x1480TicketingThumbnail.jpg",
    },
    {
      movieName: "Hayride to Hell (2022)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233859/Hayride_to_hell.jpg",
    },
    {
      movieName: "The Hill (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232141/The_Hill_Key_Art.jpg",
    },
    {
      movieName: "Strays (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/231033/STR_Look2_Adv1Sheet8_1080x1920pxH_RGB_1.jpg",
    },
    {
      movieName: "Tripped Up (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233562/TRIPPEDUP_KeyArt.jpg",
    },
    {
      movieName: "The Pigeon Tunnel (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233325/the_pigeon_tunnel.jpg",
    },
    {
      movieName: "Shelter in Solitude (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232727/shelter_in_solitude.jpg",
    },
    {
      movieName: "Story Ave (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233223/StoryAvePoster.jpg",
    },
    {
      movieName: "Cat Person (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233113/Cat_Person.jpg",
    },
    {
      movieName: "Amerikatsi (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/232794/amerikatsi_web.jpg",
    },
    {
      movieName: "Once Within a Time (2023)",
      image:
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/233608/OWAT_poster_web.jpg",
    },
  ];

  return imagesObj;
}
