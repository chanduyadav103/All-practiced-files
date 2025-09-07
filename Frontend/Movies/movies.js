let moviesFetched = [];

const movies = [
    {
        "name": "RRR",
        "genre": "Action, Period, Drama",
        "release_year": 2022,
        "cast": [
            {
                "name": "N. T. Rama Rao Jr.",
                "role": "Komaram Bheem"
            },
            {
                "name": "Ram Charan",
                "role": "Alluri Sitarama Raju"
            },
            {
                "name": "Alia Bhatt",
                "role": "Sita"
            },
            {
                "name": "Ajay Devgn",
                "role": "Venkata Rama Raju (cameo)"
            },
            {
                "name": "Olivia Morris",
                "role": "Jennifer"
            },
            {
                "name": "Ray Stevenson",
                "role": "Governor Scott"
            },
            {
                "name": "Alison Doody",
                "role": "Catherine"
            },
            {
                "name": "Shriya Saran",
                "role": "Sarojini"
            },
            {
                "name": "Samuthirakani",
                "role": "Venkateswarulu"
            },
            {
                "name": "Makrand Deshpande",
                "role": "Peddanna"
            }
        ],
        "budget": "₹550–600 Cr (est.)",
        "box_office": "₹1,200+ Cr worldwide (est.)",
        "imdb_rating": 8.0,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Electrifying set pieces with heartfelt bromance; Rajamouli fires on all cylinders.",
                "rating": 9
            },
            {
                "reviewer": "IMDb user",
                "comment": "A lavish epic that blends myth, revolution, and mass cinema style.",
                "rating": 8
            }
        ],
        "release_date": "2022-03-25",
        "runtime": "3h 7m",
        "language": "Telugu (dubbed: Hindi, Tamil, Malayalam, Kannada, English)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
        "description": "SS Rajamouli’s ‘RRR’ reimagines two revolutionaries as larger-than-life heroes whose intersecting paths ignite a friendship and a rebellion. Set in the 1920s under British rule, the film stages thunderous action, musical bravura and emotional spectacle as Bheem and Ram navigate loyalty, duty and freedom. With monumental craft—detailed period design, audacious stunts, and a soaring score—RRR delivers a maximalist celebration of Telugu mass cinema that resonates globally while remaining deeply rooted in regional storytelling."
    },
    {
        "name": "Baahubali 2: The Conclusion",
        "genre": "Epic, Action, Fantasy",
        "release_year": 2017,
        "cast": [
            {
                "name": "Prabhas",
                "role": "Amarendra Baahubali / Mahendra Baahubali"
            },
            {
                "name": "Rana Daggubati",
                "role": "Bhallaladeva"
            },
            {
                "name": "Anushka Shetty",
                "role": "Devasena"
            },
            {
                "name": "Tamannaah",
                "role": "Avanthika"
            },
            {
                "name": "Ramya Krishnan",
                "role": "Sivagami"
            },
            {
                "name": "Sathyaraj",
                "role": "Kattappa"
            },
            {
                "name": "Nassar",
                "role": "Bijjaladeva"
            },
            {
                "name": "Subbaraju",
                "role": "Kumara Varma"
            },
            {
                "name": "Rohini",
                "role": "Shivamani (voice)"
            },
            {
                "name": "Prabhakar",
                "role": "Kalakeya (cameo/flashback)"
            }
        ],
        "budget": "₹250 Cr (est.)",
        "box_office": "₹1,810+ Cr worldwide (est.)",
        "imdb_rating": 8.2,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Answers the ‘Why Kattappa…’ question with grand emotions and scale.",
                "rating": 9
            },
            {
                "reviewer": "IMDb user",
                "comment": "Mythic storytelling, thunderous score, peerless production design.",
                "rating": 8
            }
        ],
        "release_date": "2017-04-28",
        "runtime": "2h 51m",
        "language": "Telugu (dubbed: Tamil, Hindi, Malayalam)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/Baahubali_the_Conclusion.jpg",
        "description": "Rajamouli’s culminating chapter resolves the palace intrigue of Mahishmati with an operatic clash between Baahubali and Bhallaladeva. Woven through sweeping romance, betrayal, and duty, the film marshals gigantic sets, meticulous VFX, and rousing battles to deliver catharsis on a mythic scale. ‘The Conclusion’ cements the franchise as a watershed in Indian pop culture, pairing primal storytelling with immaculate craft to create a universally accessible Telugu epic that pulverized records and captivated audiences across languages."
    },
    {
        "name": "Baahubali: The Beginning",
        "genre": "Epic, Action, Fantasy",
        "release_year": 2015,
        "cast": [
            {
                "name": "Prabhas",
                "role": "Shivudu / Mahendra Baahubali"
            },
            {
                "name": "Rana Daggubati",
                "role": "Bhallaladeva"
            },
            {
                "name": "Anushka Shetty",
                "role": "Devasena (cameo/flashback)"
            },
            {
                "name": "Tamannaah",
                "role": "Avanthika"
            },
            {
                "name": "Ramya Krishnan",
                "role": "Sivagami"
            },
            {
                "name": "Sathyaraj",
                "role": "Kattappa"
            },
            {
                "name": "Nassar",
                "role": "Bijjaladeva"
            },
            {
                "name": "Adivi Sesh",
                "role": "Bhadra"
            },
            {
                "name": "Sudeep",
                "role": "Aslam Khan (cameo)"
            },
            {
                "name": "Prabhakar",
                "role": "Kalakeya"
            }
        ],
        "budget": "₹180 Cr (est.)",
        "box_office": "₹650+ Cr worldwide (est.)",
        "imdb_rating": 8.0,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "A thunderclap announcement of Telugu cinema’s global ambitions.",
                "rating": 8
            },
            {
                "reviewer": "IMDb user",
                "comment": "World-building, score and the waterfall sequence are unforgettable.",
                "rating": 9
            }
        ],
        "release_date": "2015-07-10",
        "runtime": "2h 39m",
        "language": "Telugu (dubbed: Tamil, Hindi, Malayalam)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/7/7e/Baahubali_poster.jpg",
        "description": "‘The Beginning’ charts Shivudu’s ascent from a mountain village to the walled kingdom of Mahishmati, unlocking a legacy of betrayal and valor. With audacious action, sweeping romance and iconic imagery—the waterfall climb, the bull fight, the Kalakeya battle—the film announced a new scale for Indian spectacle. Anchored by Prabhas’s charisma and Ramya Krishnan’s commanding turn, it seeded a saga whose emotional beats and production standards redefined what a Telugu blockbuster could be."
    },
    {
        "name": "Kalki 2898 AD",
        "genre": "Science Fiction, Action, Mythology",
        "release_year": 2024,
        "cast": [
            {
                "name": "Prabhas",
                "role": "Bhairava"
            },
            {
                "name": "Amitabh Bachchan",
                "role": "Ashwatthama"
            },
            {
                "name": "Kamal Haasan",
                "role": "Supreme Yaskin"
            },
            {
                "name": "Deepika Padukone",
                "role": "SUM-80 / Sumathi"
            },
            {
                "name": "Disha Patani",
                "role": "Roxie"
            },
            {
                "name": "Saswata Chatterjee",
                "role": "Commander Manas"
            },
            {
                "name": "Brahmanandam",
                "role": "Rajasaab"
            },
            {
                "name": "Shobana",
                "role": "Matriach (cameo)"
            },
            {
                "name": "Pasupathy",
                "role": "Veeran"
            },
            {
                "name": "Anna Ben",
                "role": "Kyra"
            }
        ],
        "budget": "₹600+ Cr (reported)",
        "box_office": "₹1,000+ Cr worldwide (reported)",
        "imdb_rating": 8.1,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "A bold sci-fi mythology mashup with jaw-dropping world-building.",
                "rating": 8
            },
            {
                "reviewer": "IMDb user",
                "comment": "Prabhas is fun, Bachchan is towering; Haasan is chilling.",
                "rating": 9
            }
        ],
        "release_date": "2024-06-27",
        "runtime": "3h 1m",
        "language": "Telugu (dubbed: Hindi, Tamil, Malayalam, Kannada, English)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/Kalki_2898_AD_poster.jpg",
        "description": "Nag Ashwin fuses epic Hindu lore with post-apocalyptic sci-fi, charting a future ruled by a tyrant city where destiny converges on a mysterious child. Prabhas’s roguish Bhairava collides with Amitabh Bachchan’s immortal Ashwatthama and Kamal Haasan’s sinister overlord. The film’s tactile production design, towering miniatures and expansive VFX craft a striking world, while a propulsive score carries large-scale action. ‘Kalki 2898 AD’ is an audacious Telugu tentpole that swings for the fences—and connects."
    },
    {
        "name": "Pushpa: The Rise – Part 1",
        "genre": "Action, Crime, Drama",
        "release_year": 2021,
        "cast": [
            {
                "name": "Allu Arjun",
                "role": "Pushpa Raj"
            },
            {
                "name": "Rashmika Mandanna",
                "role": "Srivalli"
            },
            {
                "name": "Fahadh Faasil",
                "role": "Bhanwar Singh Shekhawat"
            },
            {
                "name": "Sunil",
                "role": "Mangalam Srinu"
            },
            {
                "name": "Anasuya Bharadwaj",
                "role": "Dakshayani"
            },
            {
                "name": "Ajay Ghosh",
                "role": "Konda Reddy"
            },
            {
                "name": "Rao Ramesh",
                "role": "MLA Bhumireddy Siddappa Naidu"
            },
            {
                "name": "Dhananjaya",
                "role": "Jolly Reddy"
            },
            {
                "name": "Shatru",
                "role": "DSP Govindappa"
            },
            {
                "name": "Jagadeesh Prathap Bandari",
                "role": "Kesava"
            }
        ],
        "budget": "₹200–250 Cr (reported, combined)",
        "box_office": "₹360–393 Cr worldwide (est.)",
        "imdb_rating": 7.6,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Allu Arjun’s swagger, DSP’s bangers, and raw forest action—mass feast.",
                "rating": 8
            },
            {
                "reviewer": "IMDb user",
                "comment": "Gritty smuggling saga with an iconic hero entry and hook step.",
                "rating": 8
            }
        ],
        "release_date": "2021-12-17",
        "runtime": "2h 59m",
        "language": "Telugu (dubbed: Hindi, Tamil, Malayalam, Kannada)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
        "description": "Set in the red-sand hills of Chittoor’s illicit timber trade, ‘Pushpa’ tracks a cool-headed labourer’s bruising rise through a violent smuggling syndicate. Sukumar’s earthy textures, Devi Sri Prasad’s pulsating soundtrack and Allu Arjun’s kinetic star turn combine in a swaggering folk-noir. The film’s vivid dialect, larger-than-life staging and simmering rivalry with a ruthless cop carve a rough-hewn, muscular entertainer that became a pan-India phenomenon and cemented a new mass-cinema icon."
    },
    {
        "name": "Salaar: Part 1 – Ceasefire",
        "genre": "Action, Thriller",
        "release_year": 2023,
        "cast": [
            {
                "name": "Prabhas",
                "role": "Deva / Salaar"
            },
            {
                "name": "Prithviraj Sukumaran",
                "role": "Varadha Raja Mannar"
            },
            {
                "name": "Shruti Haasan",
                "role": "Aadhya Krishnakanth"
            },
            {
                "name": "Jagapathi Babu",
                "role": "Rajamanaar"
            },
            {
                "name": "Sriya Reddy",
                "role": "Radha Rama Mannar"
            },
            {
                "name": "Tinnu Anand",
                "role": "Baba"
            },
            {
                "name": "Easwari Rao",
                "role": "Deva’s mother"
            },
            {
                "name": "Brahmaji",
                "role": "Gaikwad"
            },
            {
                "name": "Ramachandra Raju",
                "role": "Vardha aide"
            },
            {
                "name": "Mime Gopi",
                "role": "Bilal’s aide"
            }
        ],
        "budget": "₹270 Cr (reported)",
        "box_office": "₹700 Cr worldwide (reported)",
        "imdb_rating": 6.6,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Neel’s gritty world-building meets Prabhas’s brooding presence.",
                "rating": 7
            },
            {
                "reviewer": "IMDb user",
                "comment": "Violent, operatic and stylish; Part 2 set-up intrigues.",
                "rating": 7
            }
        ],
        "release_date": "2023-12-22",
        "runtime": "2h 55m",
        "language": "Telugu (dubbed: Hindi, Tamil, Malayalam, Kannada)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
        "description": "Prashanth Neel conjures a brutal, baroque dystopia where loyalties are carved in blood. When a banished warrior returns to aid a childhood friend in a succession war, friendship collides with fate. The film leans into shadow-drenched frames, pounding soundscapes and bone-crunching set-pieces to paint a primal saga of power. ‘Ceasefire’ stands as a thunderous Telugu action opera that sets the chessboard for a larger conflict while delivering a self-contained barrage of spectacle."
    },
    {
        "name": "Saaho",
        "genre": "Action, Thriller",
        "release_year": 2019,
        "cast": [
            {
                "name": "Prabhas",
                "role": "Ashok Chakravarthy / Saaho"
            },
            {
                "name": "Shraddha Kapoor",
                "role": "Amritha Nair"
            },
            {
                "name": "Jackie Shroff",
                "role": "Roy"
            },
            {
                "name": "Neil Nitin Mukesh",
                "role": "Ashok (impostor) / Jai"
            },
            {
                "name": "Arun Vijay",
                "role": "Vishwank"
            },
            {
                "name": "Chunky Pandey",
                "role": "Devraj"
            },
            {
                "name": "Mahesh Manjrekar",
                "role": "Prince"
            },
            {
                "name": "Murali Sharma",
                "role": "David"
            },
            {
                "name": "Prakash Belawadi",
                "role": "Shinde"
            },
            {
                "name": "Tinnu Anand",
                "role": "Prithviraj"
            }
        ],
        "budget": "₹350 Cr (reported, multilingual)",
        "box_office": "₹433–451 Cr worldwide (est.)",
        "imdb_rating": 5.1,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Slick scale and action; messy plotting but big-screen thrills.",
                "rating": 6
            },
            {
                "reviewer": "IMDb user",
                "comment": "Prabhas carries a convoluted heist yarn with swagger.",
                "rating": 6
            }
        ],
        "release_date": "2019-08-30",
        "runtime": "2h 50m",
        "language": "Telugu & Hindi (dubbed: Tamil, Malayalam)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/4/4d/Saaho_poster.jpg",
        "description": "Mounted as a sprawling pan-India actioner, ‘Saaho’ unfurls a labyrinth of betrayals, double identities and corporatized crime across futuristic vistas. Prabhas headlines as a mysterious operative entangled with a cop and warring syndicates, while slick chases and heavy VFX fill the canvas. Though its narrative excess divides opinion, the film’s technical gloss, scale and relentless momentum underscore Telugu cinema’s appetite for audacious, big-ticket world-building aimed squarely at theatrical impact."
    },
    {
        "name": "Sye Raa Narasimha Reddy",
        "genre": "Historical, Action, Drama",
        "release_year": 2019,
        "cast": [
            {
                "name": "Chiranjeevi",
                "role": "Uyyalawada Narasimha Reddy"
            },
            {
                "name": "Amitabh Bachchan",
                "role": "Gosayi Venkanna (cameo)"
            },
            {
                "name": "Sudeep",
                "role": "Avuku Raju"
            },
            {
                "name": "Vijay Sethupathi",
                "role": "Raja Pandi"
            },
            {
                "name": "Nayanthara",
                "role": "Siddhamma"
            },
            {
                "name": "Tamannaah",
                "role": "Lakshmi"
            },
            {
                "name": "Jagapathi Babu",
                "role": "Veera Reddy"
            },
            {
                "name": "Ravi Kishan",
                "role": "Basi Reddy"
            },
            {
                "name": "Kichcha Sudeep",
                "role": "Avuku Raju"
            },
            {
                "name": "Nassar",
                "role": "Papa Khan"
            }
        ],
        "budget": "₹200–250 Cr (reported)",
        "box_office": "₹240–300 Cr worldwide (est.)",
        "imdb_rating": 7.4,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Chiranjeevi leads a stirring, old-school patriotic epic.",
                "rating": 8
            },
            {
                "reviewer": "IMDb user",
                "comment": "Lavish production with rousing battles and strong ensemble.",
                "rating": 7
            }
        ],
        "release_date": "2019-10-02",
        "runtime": "2h 51m",
        "language": "Telugu (dubbed: Hindi, Tamil, Malayalam, Kannada)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/0/0d/Sye_Raa_Narasimha_Reddy_film_poster.jpg",
        "description": "Set a decade before the 1857 uprising, the film dramatizes the rebellion of Uyyalawada Narasimha Reddy against the East India Company. Surender Reddy mounts sweeping battles, torchlit raids and grand assemblies while foregrounding sacrifice and community. With a star-studded ensemble and robust craft, ‘Sye Raa’ delivers a heartfelt, classically structured Telugu period epic that balances patriotic fervor with intimate emotional beats, honoring a largely unsung freedom fighter from Rayalaseema."
    },
    {
        "name": "Rangasthalam",
        "genre": "Period, Action, Drama",
        "release_year": 2018,
        "cast": [
            {
                "name": "Ram Charan",
                "role": "Chittibabu"
            },
            {
                "name": "Samantha Ruth Prabhu",
                "role": "Ramalakshmi"
            },
            {
                "name": "Aadhi Pinisetty",
                "role": "Kumar Babu"
            },
            {
                "name": "Jagapathi Babu",
                "role": "President Phanindra Bhupathi"
            },
            {
                "name": "Prakash Raj",
                "role": "Dakshina Murthy"
            },
            {
                "name": "Naresh",
                "role": "Chittibabu’s father"
            },
            {
                "name": "Anasuya Bharadwaj",
                "role": "Rangasthalam Rangamma"
            },
            {
                "name": "Sunil",
                "role": "Aripirala Narayana / Narrator"
            },
            {
                "name": "Pooja Hegde",
                "role": "Jigelu Rani (special appearance)"
            },
            {
                "name": "Mahesh Achanta",
                "role": "Mahesh"
            }
        ],
        "budget": "₹50 Cr (reported)",
        "box_office": "₹216 Cr worldwide (est.)",
        "imdb_rating": 8.1,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Rustic textures, memorable characters and a knockout Ram Charan.",
                "rating": 9
            },
            {
                "reviewer": "IMDb user",
                "comment": "A gripping village political saga with euphoric high points.",
                "rating": 8
            }
        ],
        "release_date": "2018-03-30",
        "runtime": "2h 54m",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/1/15/Rangasthalam.jpg",
        "description": "Sukumar’s 1980s-set drama pits a partially deaf lineman against a tyrannical village president, exploring power, pride and family through earthy humor and eruptions of violence. The film’s sun-baked palette, lilting folk tunes and lived-in production design evoke a tactile world, while Ram Charan crafts a career-defining turn as the big-hearted Chittibabu. ‘Rangasthalam’ blends commercial high points with authorial nuance to deliver a crowd-pleasing yet textured Telugu landmark."
    },
    {
        "name": "Ala Vaikunthapurramuloo",
        "genre": "Family, Comedy, Drama",
        "release_year": 2020,
        "cast": [
            {
                "name": "Allu Arjun",
                "role": "Bantu"
            },
            {
                "name": "Pooja Hegde",
                "role": "Amulya"
            },
            {
                "name": "Tabu",
                "role": "Yasu"
            },
            {
                "name": "Jayaram",
                "role": "Ramachandra"
            },
            {
                "name": "Sushanth",
                "role": "Raj Manohar"
            },
            {
                "name": "Nivetha Pethuraj",
                "role": "Nandini"
            },
            {
                "name": "Murali Sharma",
                "role": "Valmiki"
            },
            {
                "name": "Sachin Khedekar",
                "role": "Aditya"
            },
            {
                "name": "Samuthirakani",
                "role": "Appala Naidu"
            },
            {
                "name": "Sunil",
                "role": "SI Sitaram"
            }
        ],
        "budget": "₹85–100 Cr (reported)",
        "box_office": "₹260–280 Cr worldwide (est.)",
        "imdb_rating": 7.3,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Feel-good entertainer powered by Allu Arjun’s charm and Thaman’s music.",
                "rating": 8
            },
            {
                "reviewer": "IMDb user",
                "comment": "Glossy, witty and eminently rewatchable family drama.",
                "rating": 7
            }
        ],
        "release_date": "2020-01-12",
        "runtime": "2h 45m",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/5/5e/Ala_Vaikunthapurramuloo.jpeg",
        "description": "Trivikram’s crowd-pleaser spins a classic baby-swap premise into a buoyant tale of class, identity and self-worth. Allu Arjun’s buoyant star turn meets sparkling dialogue, candy-colored frames and irresistibly catchy songs to create a glossy festival-day smash. The film deftly toggles between comedy and emotion, punctuated by stylish action and warm family payoffs, cementing itself as a modern Telugu comfort watch that dominated the 2020 box office and streaming charts."
    },
    {
        "name": "Radhe Shyam",
        "genre": "Romance, Drama, Fantasy",
        "release_year": 2022,
        "cast": [
            {
                "name": "Prabhas",
                "role": "Vikramaditya"
            },
            {
                "name": "Pooja Hegde",
                "role": "Prerana"
            },
            {
                "name": "Bhagyashree",
                "role": "Vikramaditya’s mother"
            },
            {
                "name": "Jagapathi Babu",
                "role": "Arun"
            },
            {
                "name": "Sathyaraj",
                "role": "Paramahamsa"
            },
            {
                "name": "Krishnam Raju",
                "role": "Govindaraj (cameo)"
            },
            {
                "name": "Kunal Roy Kapur",
                "role": "Vedant"
            },
            {
                "name": "Murali Sharma",
                "role": "Vasu"
            },
            {
                "name": "Sasha Chettri",
                "role": "Nurse"
            },
            {
                "name": "Priyadarshi",
                "role": "Subbu"
            }
        ],
        "budget": "₹300+ Cr (reported, multilingual)",
        "box_office": "₹200–220 Cr worldwide (est.)",
        "imdb_rating": 5.3,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Lavish European visuals and a sweeping score; uneven writing.",
                "rating": 6
            },
            {
                "reviewer": "IMDb user",
                "comment": "A grand, melancholic romance with flashes of magic.",
                "rating": 6
            }
        ],
        "release_date": "2022-03-11",
        "runtime": "2h 18m (approx.)",
        "language": "Telugu & Hindi (dubbed: Tamil, Malayalam, Kannada)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/2/2c/Radhe_Shyam_poster.jpg",
        "description": "A famed palmist who believes in destiny falls for a doctor who believes in choice, setting off a star-crossed romance across postcard-perfect Italy. Sumptuous production design, rich costumes and a rhapsodic score give ‘Radhe Shyam’ old-world scale, while disaster-movie beats test faith and fate. Though narratively uneven, the film’s visual allure and earnest sweep offer a distinctive Telugu romantic epic mounted with pan-Indian ambition."
    },
    {
        "name": "Guntur Kaaram",
        "genre": "Action, Family, Drama",
        "release_year": 2024,
        "cast": [
            {
                "name": "Mahesh Babu",
                "role": "Ramana"
            },
            {
                "name": "Sreeleela",
                "role": "Amukta Malyada"
            },
            {
                "name": "Meenakshi Chaudhary",
                "role": "Rupa"
            },
            {
                "name": "Ramya Krishnan",
                "role": "Vyra Vasundhara"
            },
            {
                "name": "Prakash Raj",
                "role": "Venkata Swamy"
            },
            {
                "name": "Jagapathi Babu",
                "role": "Satyam"
            },
            {
                "name": "Rao Ramesh",
                "role": "Brahmam"
            },
            {
                "name": "Jayaram",
                "role": "Satyam’s brother"
            },
            {
                "name": "Easwari Rao",
                "role": "Ramana’s aunt"
            },
            {
                "name": "Ajay",
                "role": "Ajju"
            }
        ],
        "budget": "₹200+ Cr (reported)",
        "box_office": "₹170–190 Cr worldwide (est.)",
        "imdb_rating": 5.3,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Mahesh Babu’s star power lights up an otherwise routine mass drama.",
                "rating": 6
            },
            {
                "reviewer": "IMDb user",
                "comment": "Good songs and swagger; screenplay doesn’t always land.",
                "rating": 5
            }
        ],
        "release_date": "2024-01-12",
        "runtime": "2h 39m",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/Guntur_Kaaram.jpg",
        "description": "Trivikram returns with a mother-son reconciliation drama wrapped in spicy mass action. Set against Guntur’s mirchi trade and political maneuvering, the film leans on Mahesh Babu’s charisma, quippy dialogues and glossy action interludes. While its family conflicts and emotional resolutions echo familiar beats, the packaging—poppy songs, flashy frames, and star wattage—delivers a festive, theater-first entertainer tuned to Sankranti crowds."
    },
    {
        "name": "Srimanthudu",
        "genre": "Action, Drama",
        "release_year": 2015,
        "cast": [
            {
                "name": "Mahesh Babu",
                "role": "Harsha Vardhan"
            },
            {
                "name": "Shruti Haasan",
                "role": "Charuseela"
            },
            {
                "name": "Jagapathi Babu",
                "role": "Ravikanth"
            },
            {
                "name": "Rajendra Prasad",
                "role": "Supporting"
            },
            {
                "name": "Sampath Raj",
                "role": "Sashi"
            },
            {
                "name": "Mukesh Rishi",
                "role": "Venkata Ratnam"
            },
            {
                "name": "Sukanya",
                "role": "Supporting"
            },
            {
                "name": "Harish Uthaman",
                "role": "Supporting"
            },
            {
                "name": "Brahmanandam",
                "role": "Comic Cameo"
            },
            {
                "name": "Nassar",
                "role": "Supporting"
            }
        ],
        "budget": "₹60–70 Cr",
        "box_office": "₹200 Cr worldwide",
        "imdb_rating": 7.5,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "A well-crafted masala with a meaningful heart; Mahesh shines in simplicity.",
                "rating": 8
            },
            {
                "reviewer": "IMDb user",
                "comment": "Village adoption plot feels genuine and well-executed, not preachy.",
                "rating": 8
            }
        ],
        "release_date": "2015-08-07",
        "runtime": "2h 38m",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/f/f3/Srimanthudu_poster.jpg",
        "description": "Mahesh Babu plays a privileged heir who finds purpose in rural development. When he adopts a backward village, his efforts to rebuild schools, roads, water systems—and tackle local corruption—spark resistance from entrenched powerholders. The film blends commercial masala with a social message, and sparked a real-life trend of village adoption in Andhra Pradesh and Telangana, becoming a defining hit in the actor’s career while championing grassroots change."
    },
    {
        "name": "Sarileru Neekevvaru",
        "genre": "Action, Comedy, Masala",
        "release_year": 2020,
        "cast": [
            {
                "name": "Mahesh Babu",
                "role": "Ajay Krishna"
            },
            {
                "name": "Rashmika Mandanna",
                "role": "Satyabhama"
            },
            {
                "name": "Vijayashanti",
                "role": "Major Durga"
            },
            {
                "name": "Prakash Raj",
                "role": "Anjaneya Das"
            },
            {
                "name": "Rajendra Prasad",
                "role": "Satyabhama’s father"
            },
            {
                "name": "Naresh",
                "role": "Comic role"
            },
            {
                "name": "Vennela Kishore",
                "role": "Comic relief"
            },
            {
                "name": "Sunil",
                "role": "Supporting"
            },
            {
                "name": "Rambha",
                "role": "Cameo"
            },
            {
                "name": "Ravi Kishan",
                "role": "Villain cameo"
            }
        ],
        "budget": "₹75 Cr",
        "box_office": "₹260 Cr worldwide",
        "imdb_rating": 6.2,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Decent masala entertainer with Mahesh's swagger and Rashmika's charm.",
                "rating": 6
            },
            {
                "reviewer": "IMDb user",
                "comment": "Action and one-liners work; predictable but watchable.",
                "rating": 6
            }
        ],
        "release_date": "2020-01-11",
        "runtime": "2h 49m (169 min)",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Sarileru_Neekevvaru_poster.jpg",
        "description": "A no-nonsense army major arrives in rural Telangana to attend his sister’s wedding, only to uncover political corruption and a hostage situation. Mahesh delivers punchy lines, effortless action, and mass appeal wrapped in a festive spectacle. With Rashmika’s playful presence and veteran performances, the film became the second highest grossing Telugu film of 2020, known for high energy and big-screen draw."
    },
    {
        "name": "Aravinda Sametha Veera Raghava",
        "genre": "Action, Drama, Family",
        "release_year": 2018,
        "cast": [
            {
                "name": "N. T. Rama Rao Jr.",
                "role": "Veera Raghava Reddy"
            },
            {
                "name": "Pooja Hegde",
                "role": "Aravinda"
            },
            {
                "name": "Jagapathi Babu",
                "role": "Supporting"
            },
            {
                "name": "Naveen Chandra",
                "role": "Supporting"
            },
            {
                "name": "Eesha Rebba",
                "role": "Supporting"
            },
            {
                "name": "Sunil",
                "role": "Comic relief"
            },
            {
                "name": "Supriya Pathak",
                "role": "Supporting"
            },
            {
                "name": "Naga Babu",
                "role": "Supporting"
            },
            {
                "name": "Rao Ramesh",
                "role": "Supporting"
            },
            {
                "name": "Brahmaji",
                "role": "Supporting"
            }
        ],
        "budget": "₹60–65 Cr",
        "box_office": "₹160–190 Cr worldwide",
        "imdb_rating": 7.6,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Emotional core and stylized action with Trivikram’s punchy dialogue.",
                "rating": 8
            },
            {
                "reviewer": "IMDb user",
                "comment": "Jr NTR anchors a heartfelt narrative with real stakes.",
                "rating": 8
            }
        ],
        "release_date": "2018-10-11",
        "runtime": "2h 42m (162 min)",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/0/09/Aravinda_Sametha_poster.jpg",
        "description": "Jr NTR plays a reluctant heir drawn back into his violent hometown after his father is killed. Instead of revenge, he seeks lasting peace, navigating love and legacy. Trivikram's script balances textured emotion, crisp one-liners, and kinetic fight scenes. A story rooted in blood feuds transforms into a plea for unity. The film was a major hit, cementing it as one of 2018’s biggest Telugu successes with a potent blend of mass drama and heart."
    },
    {
        "name": "Adipurush",
        "genre": "Mythological, Fantasy, Action",
        "release_year": 2023,
        "cast": [
            {
                "name": "Prabhas",
                "role": "Rama"
            },
            {
                "name": "Kriti Sanon",
                "role": "Sita"
            },
            {
                "name": "Saif Ali Khan",
                "role": "Lankesh / Ravana"
            },
            {
                "name": "Sunny Singh",
                "role": "Lakshmana"
            },
            {
                "name": "Devdatta Nage",
                "role": "Vibhishana"
            },
            {
                "name": "Sonal Chauhan",
                "role": "Shurpanakha"
            },
            {
                "name": "Chetan Hansraj",
                "role": "Vali"
            },
            {
                "name": "Manoj Muntashir",
                "role": "Bhakti"
            },
            {
                "name": "Sudeep",
                "role": "Hanuman (voice cameo)"
            },
            {
                "name": "Anil George",
                "role": "Indrajit (guest)"
            }
        ],
        "budget": "₹500–700 Cr",
        "box_office": "≈₹300 Cr (Telugu + Hindi combined) (est.)",
        "imdb_rating": 5.4,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Ambitious visuals and scale, but narrative execution uneven.",
                "rating": 5
            },
            {
                "reviewer": "IMDb user",
                "comment": "Grand in scope but lacks emotional resonance; still, a visual spectacle.",
                "rating": 6
            }
        ],
        "release_date": "2023-06-16",
        "runtime": "2h 59m (179 min)",
        "language": "Telugu & Hindi (simultaneously filmed)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/1/1e/Adipurush_poster.jpg",
        "description": "Om Raut’s ‘Adipurush’ adapts the Ramayana with Prabhas as an iconic warrior (Rama) battling the demonic Ravana in a high-concept visual narrative. Shot simultaneously in Telugu and Hindi with modern VFX frames, the film emphasizes grandeur—towering sets, CGI-laden forests, and mythic vistas. While criticised for its dialogues and screenplay, its visual ambition and reverence for the epic’s scale are undeniable, marking it as one of the costliest Telugu-facilitated mythological dramas."
    },
    {
        "name": "Janatha Garage",
        "genre": "Action, Family, Drama",
        "release_year": 2016,
        "cast": [
            {
                "name": "Jr. NTR",
                "role": "Arjun"
            },
            {
                "name": "Mohanlal",
                "role": "Michael 'Janu' 'Janatha' Garu"
            },
            {
                "name": "Samantha Ruth Prabhu",
                "role": "Chaitra"
            },
            {
                "name": "Nithya Menen",
                "role": "Janu’s daughter"
            },
            {
                "name": "Prakash Raj",
                "role": "Chief Minister"
            },
            {
                "name": "Nassar",
                "role": "Supporting"
            },
            {
                "name": "Raj Deepak Shetty",
                "role": "Villain"
            },
            {
                "name": "Naresh",
                "role": "Supporting"
            },
            {
                "name": "Brahmaji",
                "role": "Supporting"
            },
            {
                "name": "Babu Mohan",
                "role": "Comic relief"
            }
        ],
        "budget": "₹80–90 Cr (est.)",
        "box_office": "₹126–130 Cr worldwide (est.)",
        "imdb_rating": 6.2,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Solid emotional core with Jr NTR and Mohanlal’s chemistry steering the drama.",
                "rating": 7
            },
            {
                "reviewer": "IMDb user",
                "comment": "Familiar tropes elevated by performances and heartfelt family themes.",
                "rating": 6
            }
        ],
        "release_date": "2016-09-01",
        "runtime": "2h 34m (154 min)",
        "language": "Telugu (dubbed: Hindi)",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/e/ea/Janatha_Garage_poster.jpg",
        "description": "‘Janatha Garage’ merges action and sentiment—Jr NTR’s rebellious young man adopts his father’s eco-friendly legacy while clashing with a vigilante don (Mohanlal). The film balances mass-appeal fight scenes with heartfelt family drama and environmental ethos, supported by strong chemistry between the leads. It became one of 2016’s biggest Telugu hits, with audiences drawn to its combination of spectacle, moral messaging, and emotional weight."
    },
    {
        "name": "Bharat Ane Nenu",
        "genre": "Political Drama",
        "release_year": 2018,
        "cast": [
            {
                "name": "Mahesh Babu",
                "role": "Bharat Ram"
            },
            {
                "name": "Kiara Advani",
                "role": "Miranda"
            },
            {
                "name": "Prakash Raj",
                "role": "Chief Minister"
            },
            {
                "name": "Sarath Kumar",
                "role": "Supporting"
            },
            {
                "name": "Mukesh Rishi",
                "role": "Supporting"
            },
            {
                "name": "Nassar",
                "role": "Supporting"
            },
            {
                "name": "Rao Ramesh",
                "role": "Supporting"
            },
            {
                "name": "Vennela Kishore",
                "role": "Comic support"
            },
            {
                "name": "Anu Hasan",
                "role": "Supporting"
            },
            {
                "name": "Rashmi Gautam",
                "role": "Cameo"
            }
        ],
        "budget": "₹100 Cr (est.)",
        "box_office": "₹175–180 Cr worldwide (est.)",
        "imdb_rating": 7.0,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Cogent political drama with a charismatic turn by Mahesh Babu.",
                "rating": 7
            },
            {
                "reviewer": "IMDb user",
                "comment": "Smart premise put on rails with sharp dialogue and mass sensibility.",
                "rating": 7
            }
        ],
        "release_date": "2018-05-20",
        "runtime": "3h (180 min) approx.",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/9/92/Bharat_Ane_Nenu.jpg",
        "description": "Mahesh Babu plays a young man who unexpectedly becomes the Chief Minister after his father’s death. Faced with institutional decay and political inertia, he vows to clean up the system with integrity and reform. The film’s sharp script, punchy dialogues, and a standout mass-friendly performance tapped into civic audiences, turning it into a high-grossing political drama that resonated beyond commercial entertainment."
    },
    {
        "name": "Sarkaru Vaari Paata",
        "genre": "Action, Drama, Romance",
        "release_year": 2022,
        "cast": [
            {
                "name": "Mahesh Babu",
                "role": "Moin"
            },
            {
                "name": "Keerthy Suresh",
                "role": "Keerthy"
            },
            {
                "name": "Jagapathi Babu",
                "role": "Supporting"
            },
            {
                "name": "Samudrala Ravi",
                "role": "Supporting"
            },
            {
                "name": "Vennela Kishore",
                "role": "Comic relief"
            },
            {
                "name": "Andhra Prabha",
                "role": "Supporting"
            },
            {
                "name": "Prashanth",
                "role": "Supporting"
            },
            {
                "name": "Satyadeep Mishra",
                "role": "Antagonist (Hindi cameo)"
            },
            {
                "name": "Subbaraju",
                "role": "Supporting"
            },
            {
                "name": "Prudhvi Raj",
                "role": "Comic support"
            }
        ],
        "budget": "₹100 Cr (est.)",
        "box_office": "₹230 Cr worldwide (est.)",
        "imdb_rating": 6.5,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Mahesh in full mass avatar delivering high-voltage energy.",
                "rating": 7
            },
            {
                "reviewer": "IMDb user",
                "comment": "Solid commercial fare with flaws but strong crowd pull.",
                "rating": 6
            }
        ],
        "release_date": "2022-05-12",
        "runtime": "2h 50m (170 min)",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/e/ef/Sarkaru_Vaari_Paata.jpg",
        "description": "Set against a backdrop of banking scams and father-son conflict, ‘Sarkaru Vaari Paata’ blends action-packed vengeance with comedy and romance. Mahesh Babu plays a debt-recovery agent crossing paths with a banking heiress, forcing them into conflict and eventual unity. High-octane set-pieces, witty repartee, and a mass-friendly soundtrack helped it become one of 2022’s biggest Telugu box-office hits."
    },
    {
        "name": "Hanu-Man",
        "genre": "Superhero, Fantasy, Action",
        "release_year": 2024,
        "cast": [
            {
                "name": "Teja Sajja",
                "role": "Hanuman"
            },
            {
                "name": "Amritha Aiyer",
                "role": "Sita"
            },
            {
                "name": "Murali Sharma",
                "role": "Supporting"
            },
            {
                "name": "Sunil",
                "role": "Supporting"
            },
            {
                "name": "Vinay Rai",
                "role": "Antagonist"
            },
            {
                "name": "Anchor Ravi",
                "role": "Supporting"
            },
            {
                "name": "Shatru",
                "role": "Supporting"
            },
            {
                "name": "Anasuya Bharadwaj",
                "role": "Supporting"
            },
            {
                "name": "Tagubothu Ramesh",
                "role": "Comic relief"
            },
            {
                "name": "Dhanam Vijay",
                "role": "Supporting"
            }
        ],
        "budget": "₹30–40 Cr",
        "box_office": "₹300+ Cr worldwide (est.)",
        "imdb_rating": 7.0,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Surprisingly epic superhero origin with folklore flair.",
                "rating": 7
            },
            {
                "reviewer": "IMDb user",
                "comment": "Fresh tone, earnest performances, myth meets mass punch.",
                "rating": 7
            }
        ],
        "release_date": "2024-01-12",
        "runtime": "2h 45m (165 min)",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/f/fd/Hanuman_2024_poster.jpg",
        "description": "Children’s superhero meets mythology in ‘Hanu-Man’, where a temple security guard gains powers of Lord Hanuman. The film blends devotion, fantasy, and punchy commercial action, backed by local mythology and upbeat visuals. With a small budget yet a wide heart, it struck chord with families and mass audiences, becoming a surprise hit and redefining superhero origin tales through Andhra’s cultural lens."
    },
    {
        "name": "Waltair Veerayya",
        "genre": "Action, Masala",
        "release_year": 2023,
        "cast": [
            {
                "name": "Chiranjeevi",
                "role": "Waltair Veerayya"
            },
            {
                "name": "Ravi Teja",
                "role": "Jai"
            },
            {
                "name": "Shruti Haasan",
                "role": "Kanaka Mahalakshmi"
            },
            {
                "name": "Sonal Chauhan",
                "role": "Supporting"
            },
            {
                "name": "Prakash Raj",
                "role": "Supporting"
            },
            {
                "name": "Murali Sharma",
                "role": "Supporting"
            },
            {
                "name": "Sunil",
                "role": "Comic relief"
            },
            {
                "name": "Ajay",
                "role": "Supporting"
            },
            {
                "name": "Polnati Surya Pratap",
                "role": "Supporting"
            },
            {
                "name": "Brahmaji",
                "role": "Supporting"
            }
        ],
        "budget": "₹100–120 Cr (est.)",
        "box_office": "₹350 Cr worldwide (est.)",
        "imdb_rating": 5.8,
        "reviews": [
            {
                "reviewer": "IMDb user",
                "comment": "Two stars power a massy roller-coaster with kitsch and bravado.",
                "rating": 6
            },
            {
                "reviewer": "IMDb user",
                "comment": "Pure masala: over the top and unapologetically loud, and that's the charm.",
                "rating": 6
            }
        ],
        "release_date": "2023-01-13",
        "runtime": "2h 40m (160 min)",
        "language": "Telugu",
        "country": "India",
        "poster": "https://upload.wikimedia.org/wikipedia/en/8/8a/Waltair_Veerayya_poster.jpg",
        "description": "Chiranjeevi and Ravi Teja unite in a festive mass entertainer where fiery brotherhood and courtroom drama collide. Veerayya, a rowdy with a soft heart, teams up with Jai to protect a shipping magnate’s family from deceit and danger. Salted with punch dialogues, flashy visuals, and pumpy songs, the film became a Sankranti blockbuster, driven by its do-it-all stars and unabashed commercial style."
    }
]

const movie = {
    "name": "RRR",
    "genre": "Action, Period, Drama",
    "release_year": 2022,
    "cast": [
        {
            "name": "N. T. Rama Rao Jr.",
            "role": "Komaram Bheem"
        },
        {
            "name": "Ram Charan",
            "role": "Alluri Sitarama Raju"
        },
        {
            "name": "Alia Bhatt",
            "role": "Sita"
        },
        {
            "name": "Ajay Devgn",
            "role": "Venkata Rama Raju (cameo)"
        },
        {
            "name": "Olivia Morris",
            "role": "Jennifer"
        },
        {
            "name": "Ray Stevenson",
            "role": "Governor Scott"
        },
        {
            "name": "Alison Doody",
            "role": "Catherine"
        },
        {
            "name": "Shriya Saran",
            "role": "Sarojini"
        },
        {
            "name": "Samuthirakani",
            "role": "Venkateswarulu"
        },
        {
            "name": "Makrand Deshpande",
            "role": "Peddanna"
        }
    ],
    "budget": "₹550–600 Cr (est.)",
    "box_office": "₹1,200+ Cr worldwide (est.)",
    "imdb_rating": 8.0,
    "reviews": [
        {
            "reviewer": "IMDb user",
            "comment": "Electrifying set pieces with heartfelt bromance; Rajamouli fires on all cylinders.",
            "rating": 9
        },
        {
            "reviewer": "IMDb user",
            "comment": "A lavish epic that blends myth, revolution, and mass cinema style.",
            "rating": 8
        }
    ],
    "release_date": "2022-03-25",
    "runtime": "3h 7m",
    "language": "Telugu (dubbed: Hindi, Tamil, Malayalam, Kannada, English)",
    "country": "India",
    "poster": "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
    "description": "SS Rajamouli’s ‘RRR’ reimagines two revolutionaries as larger-than-life heroes whose intersecting paths ignite a friendship and a rebellion. Set in the 1920s under British rule, the film stages thunderous action, musical bravura and emotional spectacle as Bheem and Ram navigate loyalty, duty and freedom. With monumental craft—detailed period design, audacious stunts, and a soaring score—RRR delivers a maximalist celebration of Telugu mass cinema that resonates globally while remaining deeply rooted in regional storytelling."
};

const id = 10;

const searchMovie = {
    "genre": "Action",
    "cast": "charan"
};

const movieToUpdate = {
    "runtime": "3h 45m"
};

const BASE_URL = "http://localhost:3000/v1/api/";
const GET_MOVIES = BASE_URL + "get-movies";
const GET_MOVIE_BY_ID = BASE_URL + "get-movie/" + id;
const SEARCH_MOVIES = BASE_URL + "search-movies";
const ADD_MOVIE = BASE_URL + "add-movie";
const ADD_MOVIES = BASE_URL + "add-movies";
const UPDATE_MOVIE = BASE_URL + "update-movie/" + id;
const DELETE_MOVIE = BASE_URL + "delete-movie/" + id;
const RESET_MOVIES = BASE_URL + "reset-movies";

function getMovies() {
    fetch(GET_MOVIES, {
        method: 'get'
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}

function getMovieByID() {
    fetch(GET_MOVIE_BY_ID, {
        method: 'get'
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}

function searchMovies() {
    fetch(SEARCH_MOVIES, {
        method: 'post',
        body: JSON.stringify(searchMovie),
        headers: { "Content-Type": "application/json" },
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}

function addMovie() {
    fetch(ADD_MOVIE, {
        method: 'post',
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}

function addMovies() {
    fetch(ADD_MOVIES, {
        method: 'post',
        body: JSON.stringify(movies),
        headers: { "Content-Type": "application/json" },
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}

function updateMovie() {
    fetch(UPDATE_MOVIE, {
        method: 'put',
        body: JSON.stringify(movieToUpdate),
        headers: { "Content-Type": "application/json" },
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}

function deleteMovie() {
    fetch(DELETE_MOVIE, {
        method: 'delete'
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}

function resetMovies() {
    fetch(RESET_MOVIES, {
        method: 'post',
        body: JSON.stringify(movies),
        headers: { "Content-Type": "application/json" },
    }).then(resp => {
        return resp.json()
    }).then(resp => {
        console.log("Response:::::::::\n", resp)
    })
}


// Create a HTML, JS, and CSS files
// Use Bootstrap for styling
// Add buttons in the HTML to call respective APIs
// Create Forms to enter data and pass them to add or bulk add API
// Update the form and get the values to pass it to update API
// On page loads call get API to get data and show them in the UI
// Implement a search field to search the data using search API
// Implement delete option to delete an data from an API