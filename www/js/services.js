angular.module('starter.services', [])

        /**
         * A simple example service that returns some data.
         */
        .factory('Friends', function() {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            var friends = [
                {id: 0, name: 'Morning Dua'},
                {id: 1, name: 'Afternoon Dua'},
                {id: 2, name: 'Evening Dua'},
                {id: 3, name: 'Before Going to Bed'}
            ];

            return {
                all: function() {
                    return friends;
                },
                get: function(friendId) {
                    // Simple index lookup
                    return friends[friendId];
                }
            }
        })
        .factory('NamesOfAllah', function()
        {
var namesofAllah = [{'id':'1','name':'الرَّحْمَنُ','transliteration':'Ar-Rahmaan','meaning':'The Beneficent','explanation':'He who wills goodness and mercy for all His creatures'},
{'id':'2','name':'الرَّحِيمُ','transliteration':'Ar-Raheem','meaning':'The Merciful','explanation':'He who acts with extreme kindness'},
{'id':'3','name':'الْمَلِكُ','transliteration':'Al-Malik','meaning':'The Eternal Lord','explanation':'The Sovereign Lord, The One with the complete Dominion, the One Whose Dominion is clear from imperfection'},
{'id':'4','name':'الْقُدُّوسُ','transliteration':'Al-Quddus','meaning':'The Most Sacred','explanation':'The One who is pure from any imperfection and clear from children and adversaries'},
{'id':'5','name':'السَّلاَمُ','transliteration':'As-Salam','meaning':'The Embodiment of Peace','explanation':'The One who is free from every imperfection.'},
{'id':'6','name':'الْمُؤْمِنُ','transliteration':'Al-Mu’min','meaning':'The Infuser of Faith','explanation':'The One who witnessed for Himself that no one is God but Him. And He witnessed for His believers that they are truthful in their belief that no one is God but Him'},
{'id':'7','name':'الْمُهَيْمِنُ','transliteration':'Al-Muhaymin','meaning':'The Preserver of Safety','explanation':'The One who witnesses the saying and deeds of His creatures'},
{'id':'8','name':'الْعَزِيزُ','transliteration':'Al-Aziz','meaning':'The Mighty One','explanation':'The Strong, The Defeater who is not defeated'},
{'id':'9','name':'الْجَبَّارُ','transliteration':'Al-Jabbar','meaning':'The Omnipotent One','explanation':'The One that nothing happens in His Dominion except that which He willed'},
{'id':'10','name':'الْمُتَكَبِّرُ','transliteration':'Al-Mutakabbir','meaning':'The Dominant One','explanation':'The One who is clear from the attributes of the creatures and from resembling them.'},
{'id':'11','name':'الْخَالِقُ','transliteration':'Al-Khaaliq','meaning':'The Creator','explanation':'The One who brings everything from non-existence to existence'},
{'id':'12','name':'الْبَارِئُ','transliteration':'Al-Baari','meaning':'The Evolver','explanation':'The Maker, The Creator who has the Power to turn the entities.'},
{'id':'13','name':'الْمُصَوِّرُ','transliteration':'Al-Musawwir','meaning':'The Flawless Shaper','explanation':'The One who forms His creatures in different pictures.'},
{'id':'14','name':'الْغَفَّارُ','transliteration':'Al-Ghaffaar','meaning':'The Great Forgiver','explanation':'The Forgiver, The One who forgives the sins of His slaves time and time again.'},
{'id':'15','name':'الْقَهَّارُ','transliteration':'Al-Qahhaar','meaning':'The All-Prevailing One','explanation':'The Dominant, The One who has the perfect Power and is not unable over anything.'},
{'id':'16','name':'الْوَهَّابُ','transliteration':'Al-Wahhab','meaning':'The Supreme Bestower','explanation':'The One who is Generous in giving plenty without any return. He is everything that benefits whether Halal or Haram.'},
{'id':'17','name':'الرَّزَّاقُ','transliteration':'Ar-Razzaq','meaning':'The Total Provider','explanation':'The Sustainer, The Provider.'},
{'id':'18','name':'الْفَتَّاحُ','transliteration':'Al-Fattah','meaning':'The Supreme Solver','explanation':'The Opener, The Reliever, The Judge, The One who opens for His slaves the closed worldly and religious matters.'},
{'id':'19','name':'اَلْعَلِيْمُ','transliteration':'Al-Alim','meaning':'The All-Knowing One','explanation':'The Knowledgeable; The One nothing is absent from His knowledge'},
{'id':'20','name':'الْقَابِضُ','transliteration':'Al-Qaabid','meaning':'The Restricting One','explanation':'The Constrictor, The Withholder, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy.'},
{'id':'21','name':'الْبَاسِطُ','transliteration':'Al-Baasit','meaning':'The Extender','explanation':'The Englarger, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy.'},
{'id':'22','name':'الْخَافِضُ','transliteration':'Al-Khaafid','meaning':'The Reducer','explanation':'The Abaser, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment.'},
{'id':'23','name':'الرَّافِعُ','transliteration':'Ar-Rafi','meaning':'The Elevating One','explanation':'The Exalter, The Elevator, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment.'},
{'id':'24','name':'الْمُعِزُّ','transliteration':'Al-Mu’izz','meaning':'The Honourer-Bestower','explanation':'He gives esteem to whoever He willed, hence there is no one to degrade Him; And He degrades whoever He willed, hence there is no one to give Him esteem.'},
{'id':'25','name':'المُذِلُّ','transliteration':'Al-Muzil','meaning':'The Abaser','explanation':'The Dishonourer, The Humiliator, He gives esteem to whoever He willed, hence there is no one to degrade Him; And He degrades whoever He willed, hence there is no one to give Him esteem.'},
{'id':'26','name':'السَّمِيعُ','transliteration':'As-Sami’','meaning':'The All-Hearer','explanation':'The Hearer, The One who Hears all things that are heard by His Eternal Hearing without an ear, instrument or organ.'},
{'id':'27','name':'الْبَصِيرُ','transliteration':'Al-Baseer','meaning':'The All-Seeing','explanation':'The All-Noticing, The One who Sees all things that are seen by His Eternal Seeing without a pupil or any other instrument.'},
{'id':'28','name':'الْحَكَمُ','transliteration':'Al-Hakam','meaning':'The Impartial Judge','explanation':'The Judge, He is the Ruler and His judgment is His Word.'},
{'id':'29','name':'الْعَدْلُ','transliteration':'Al-Adl','meaning':'The Embodiment of Justice','explanation':'The Just, The One who is entitled to do what He does.'},
{'id':'30','name':'اللَّطِيفُ','transliteration':'Al-Lateef','meaning':'The Knower of Subtleties','explanation':'The Subtle One, The Gracious, The One who is kind to His slaves and endows upon them.'},
{'id':'31','name':'الْخَبِيرُ','transliteration':'Al-Khabeer','meaning':'The All-Aware One','explanation':'The One who knows the truth of things.'},
{'id':'32','name':'الْحَلِيمُ','transliteration':'Al-Haleem','meaning':'The Clement One','explanation':'The Forebearing, The One who delays the punishment for those who deserve it and then He might forgive them.'},
{'id':'33','name':'الْعَظِيمُ','transliteration':'Al-Azeem','meaning':'The Magnificent One','explanation':'The Great One, The Mighty, The One deserving the attributes of Exaltment, Glory, Extolement, and Purity from all imperfection.'},
{'id':'34','name':'الْغَفُورُ','transliteration':'Al-Ghafoor','meaning':'The Great Forgiver','explanation':'The All-Forgiving, The Forgiving, The One who forgives a lot.'},
{'id':'35','name':'الشَّكُورُ','transliteration':'Ash-Shakoor','meaning':'The Acknowledging One','explanation':'The Grateful, The Appreciative, The One who gives a lot of reward for a little obedience.'},
{'id':'36','name':'الْعَلِيُّ','transliteration':'Al-Aliyy','meaning':'The Sublime One','explanation':'The Most High, The One who is clear from the attributes of the creatures.'},
{'id':'37','name':'الْكَبِيرُ','transliteration':'Al-Kabeer','meaning':'The Great One','explanation':'The Most Great, The Great, The One who is greater than everything in status.'},
{'id':'38','name':'الْحَفِيظُ','transliteration':'Al-Hafiz','meaning':'The Guarding One','explanation':'The Preserver, The Protector, The One who protects whatever and whoever He willed to protect.'},
{'id':'39','name':'المُقيِت','transliteration':'Al-Muqeet','meaning':'The Sustaining One','explanation':'The Maintainer, The Guardian, The Feeder, The One who has the Power.'},
{'id':'40','name':'الْحسِيبُ','transliteration':'Al-Haseeb','meaning':'The Reckoning One','explanation':'The Reckoner, The One who gives the satisfaction.'},
{'id':'41','name':'الْجَلِيلُ','transliteration':'Al-Jaleel','meaning':'The Majestic One','explanation':'The Sublime One, The Beneficent, The One who is attributed with greatness of Power and Glory of status.'},
{'id':'42','name':'الْكَرِيمُ','transliteration':'Al-Kareem','meaning':'The Bountiful One','explanation':'The Generous One, The Gracious, The One who is attributed with greatness of Power and Glory of status.'},
{'id':'43','name':'الرَّقِيبُ','transliteration':'Ar-Raqeeb','meaning':'The Watchful One','explanation':'The Watcher, The One that nothing is absent from Him. Hence it’s meaning is related to the attribute of Knowledge.'},
{'id':'44','name':'الْمُجِيبُ','transliteration':'Al-Mujeeb','meaning':'The Responding One','explanation':'The Responsive, The Hearkener, The One who answers the one in need if he asks Him and rescues the yearner if he calls upon Him.'},
{'id':'45','name':'الْوَاسِعُ','transliteration':'Al-Waasi’','meaning':'The All-Pervading One','explanation':'The Vast, The All-Embracing, The Knowledgeable.'},
{'id':'46','name':'الْحَكِيمُ','transliteration':'Al-Hakeem','meaning':'The Wise One','explanation':'The Wise, The Judge of Judges, The One who is correct in His doings.'},
{'id':'47','name':'الْوَدُودُ','transliteration':'Al-Wadud','meaning':'The Loving One','explanation':'The One who loves His believing slaves and His believing slaves love Him. His love to His slaves is His Will to be merciful to them and praise them'},
{'id':'48','name':'الْمَجِيدُ','transliteration':'Al-Majeed','meaning':'The Glorious One','explanation':'The Most Glorious One, The One who is with perfect Power, High Status, Compassion, Generosity and Kindness.'},
{'id':'49','name':'الْبَاعِثُ','transliteration':'Al-Ba’ith','meaning':'The Infuser of New Life','explanation':'The Resurrector, The Raiser (from death), The One who resurrects His slaves after death for reward and/or punishment.'},
{'id':'50','name':'الشَّهِيدُ','transliteration':'Ash-Shaheed','meaning':'The All Observing Witness','explanation':'The Witness, The One who nothing is absent from Him.'},
{'id':'51','name':'الْحَقُّ','transliteration':'Al-Haqq','meaning':'The Embodiment of Truth','explanation':'The Truth, The True, The One who truly exists.'},
{'id':'52','name':'الْوَكِيلُ','transliteration':'Al-Wakeel','meaning':'The Universal Trustee','explanation':'The Trustee, The One who gives the satisfaction and is relied upon.'},
{'id':'53','name':'الْقَوِيُّ','transliteration':'Al-Qawwiyy','meaning':'The Strong One','explanation':'The Most Strong, The Strong, The One with the complete Power'},
{'id':'54','name':'الْمَتِينُ','transliteration':'Al-Mateen','meaning':'The Firm One','explanation':'The One with extreme Power which is un-interrupted and He does not get tired.'},
{'id':'55','name':'الْوَلِيُّ','transliteration':'Al-Waliyy','meaning':'The Protecting Associate','explanation':'The Protecting Friend, The Supporter.'},
{'id':'56','name':'الْحَمِيدُ','transliteration':'Al-Hameed','meaning':'The Sole-Laudable One','explanation':'The Praiseworthy, The praised One who deserves to be praised.'},
{'id':'57','name':'الْمُحْصِي','transliteration':'Al-Muhsee','meaning':'The All-Enumerating One','explanation':'The Counter, The Reckoner, The One who the count of things are known to him.'},
{'id':'58','name':'الْمُبْدِئُ','transliteration':'Al-Mubdi','meaning':'The Originator','explanation':'The One who started the human being. That is, He created him.'},
{'id':'59','name':'الْمُعِيدُ','transliteration':'Al-Mueed','meaning':'The Restorer','explanation':'The Reproducer, The One who brings back the creatures after death'},
{'id':'60','name':'الْمُحْيِي','transliteration':'Al-Muhyi','meaning':'The Maintainer of life','explanation':'The Restorer, The Giver of Life, The One who took out a living human from semen that does not have a soul. He gives life by giving the souls back to the worn out bodies on the resurrection day and He makes the hearts alive by the light of knowledge.'},
{'id':'61','name':'اَلْمُمِيتُ','transliteration':'Al-Mumeet','meaning':'The Inflictor of Death','explanation':'The Creator of Death, The Destroyer, The One who renders the living dead.'},
{'id':'62','name':'الْحَيُّ','transliteration':'Al-Hayy','meaning':'The Eternally Living One','explanation':'The Alive, The One attributed with a life that is unlike our life and is not that of a combination of soul, flesh or blood.'},
{'id':'63','name':'الْقَيُّومُ','transliteration':'Al-Qayyoom','meaning':'The Self-Subsisting One','explanation':'The One who remains and does not end.'},
{'id':'64','name':'الْوَاجِدُ','transliteration':'Al-Waajid','meaning':'The Pointing One','explanation':'The Perceiver, The Finder, The Rich who is never poor. Al-Wajd is Richness.'},
{'id':'65','name':'الْمَاجِدُ','transliteration':'Al-Maajid','meaning':'The All-Noble One','explanation':'The Glorious, He who is Most Glorious.'},
{'id':'66','name':'الْواحِدُ','transliteration':'Al-Waahid','meaning':'The Only One','explanation':'The Unique, The One, The One without a partner'},
{'id':'67','name':'اَلاَحَدُ','transliteration':'Al-Ahad','meaning':'The Sole One','explanation':'The One'},
{'id':'68','name':'الصَّمَدُ','transliteration':'As-Samad','meaning':'The Supreme Provider','explanation':'The Eternal, The Independent, The Master who is relied upon in matters and reverted to in ones needs.'},
{'id':'69','name':'الْقَادِرُ','transliteration':'Al-Qaadir','meaning':'The Omnipotent One','explanation':'The Able, The Capable, The One attributed with Power.'},
{'id':'70','name':'الْمُقْتَدِرُ','transliteration':'Al-Muqtadir','meaning':'The All Authoritative One','explanation':'The Powerful, The Dominant, The One with the perfect Power that nothing is withheld from Him.'},
{'id':'71','name':'الْمُقَدِّمُ','transliteration':'Al-Muqaddim','meaning':'The Expediting One','explanation':'The Expediter, The Promoter, The One who puts things in their right places. He makes ahead what He wills and delays what He wills.'},
{'id':'72','name':'الْمُؤَخِّرُ','transliteration':'Al-Mu’akhkhir','meaning':'The Procrastinator','explanation':'The Delayer, the Retarder, The One who puts things in their right places. He makes ahead what He wills and delays what He wills.'},
{'id':'73','name':'الأوَّلُ','transliteration':'Al-Awwal','meaning':'The Very First','explanation':'The First, The One whose Existence is without a beginning.'},
{'id':'74','name':'الآخِرُ','transliteration':'Al-Akhir','meaning':'The Infinite Last One','explanation':'The Last, The One whose Existence is without an end.'},
{'id':'75','name':'الظَّاهِرُ','transliteration':'Az-Zaahir','meaning':'The Perceptible','explanation':'The Manifest, The One that nothing is above Him and nothing is underneath Him, hence He exists without a place. He, The Exalted, His Existence is obvious by proofs and He is clear from the delusions of attributes of bodies.'},
{'id':'76','name':'الْبَاطِنُ','transliteration':'Al-Baatin','meaning':'The Imperceptible','explanation':'The Hidden, The One that nothing is above Him and nothing is underneath Him, hence He exists without a place. He, The Exalted, His Existence is obvious by proofs and He is clear from the delusions of attributes of bodies.'},
{'id':'77','name':'الْوَالِي','transliteration':'Al-Waali','meaning':'The Holder of Supreme Authority','explanation':'The Governor, The One who owns things and manages them.'},
{'id':'78','name':'الْمُتَعَالِي','transliteration':'Al-Muta’ali','meaning':'The Extremely Exalted One','explanation':'The Most Exalted, The High Exalted, The One who is clear from the attributes of the creation.'},
{'id':'79','name':'الْبَرُّ','transliteration':'Al-Barr','meaning':'The Fountain-Head of Truth','explanation':'The Source of All Goodness, The Righteous, The One who is kind to His creatures, who covered them with His sustenance and specified whoever He willed among them by His support, protection, and special mercy.'},
{'id':'80','name':'التَّوَابُ','transliteration':'At-Tawwaab','meaning':'The Ever-Acceptor of Repentance','explanation':'The Relenting, The One who grants repentance to whoever He willed among His creatures and accepts his repentance.'},
{'id':'81','name':'الْمُنْتَقِمُ','transliteration':'Al-Muntaqim','meaning':'The Retaliator','explanation':'The Avenger, The One who victoriously prevails over His enemies and punishes them for their sins. It may mean the One who destroys them.'},
{'id':'82','name':'العَفُوُّ','transliteration':'Al-Afuww','meaning':'The Supreme Pardoner','explanation':'The Forgiver, The One with wide forgiveness.'},
{'id':'83','name':'الرَّؤُوفُ','transliteration':'Ar-Ra’oof','meaning':'The Benign One','explanation':'The Compassionate, The One with extreme Mercy. The Mercy of Allah is His will to endow upon whoever He willed among His creatures.'},
{'id':'84','name':'مَالِكُ الْمُلْكِ','transliteration':'Maalik-ul-Mulk','meaning':'The Eternal Possessor of Sovereignty','explanation':'The One who controls the Dominion and gives dominion to whoever He willed.'},
{'id':'85','name':'ذُوالْجَلاَلِ وَالإكْرَامِ','transliteration':'Zul-Jalaali-wal-Ikram','meaning':'The Possessor of Majesty and Honour','explanation':'The Lord of Majesty and Bounty, The One who deserves to be Exalted and not denied.'},
{'id':'86','name':'الْمُقْسِطُ','transliteration':'Al-Muqsit','meaning':'The Just One','explanation':'The Equitable, The One who is Just in His judgment.'},
{'id':'87','name':'الْجَامِعُ','transliteration':'Al-Jaami’','meaning':'The Assembler of Scattered Creations','explanation':'The Gatherer, The One who gathers the creatures on a day that there is no doubt about, that is the Day of Judgment.'},
{'id':'88','name':'الْغَنِيُّ','transliteration':'Al-Ghaniyy','meaning':'The Self-Sufficient One','explanation':'The One who does not need the creation.'},
{'id':'89','name':'الْمُغْنِي','transliteration':'Al-Mughni','meaning':'The Bestower of Sufficiency','explanation':'The Enricher, The One who satisfies the necessities of the creatures.'},
{'id':'90','name':'اَلْمَانِعُ','transliteration':'Al-Maani’','meaning':'The Preventer','explanation':'The Withholder.'},
{'id':'91','name':'الضَّارَّ','transliteration':'Ad-Daarr','meaning':'The Distressor','explanation':'The One who makes harm reach to whoever He willed and benefit to whoever He willed.'},
{'id':'92','name':'النَّافِعُ','transliteration':'An-Naafi’','meaning':'The Bestower of Benefits','explanation':'The Propitious, The One who makes harm reach to whoever He willed and benefit to whoever He willed.'},
{'id':'93','name':'النُّورُ','transliteration':'An-Noor','meaning':'The Prime Light','explanation':'The Light, The One who guides.'},
{'id':'94','name':'الْهَادِي','transliteration':'Al-Haadi','meaning':'The Provider of Guidance','explanation':'The Guide, The One whom with His Guidance His believers were guided, and with His Guidance the living beings have been guided to what is beneficial for them and protected from what is harmful to them.'},
{'id':'95','name':'الْبَدِيعُ','transliteration':'Al-Badi’','meaning':'The Unique One','explanation':'The Incomparable, The One who created the creation and formed it without any preceding example.'},
{'id':'96','name':'اَلْبَاقِي','transliteration':'Al-Baaqi','meaning':'The Ever Surviving One','explanation':'The Everlasting, The One that the state of non-existence is impossible for Him.'},
{'id':'97','name':'الْوَارِثُ','transliteration':'Al-Waaris','meaning':'The Eternal Inheritor','explanation':'The Heir, The One whose Existence remains.'},
{'id':'98','name':'الرَّشِيدُ','transliteration':'Ar-Rasheed','meaning':'The Guide to Path of Rectitude','explanation':'The Guide to the Right Path, The One who guides.'},
{'id':'99','name':'الصَّبُورُ','transliteration':'As-Saboor','meaning':'The Extensively Enduring One','explanation':'The Patient, The One who does not quickly punish the sinners.'}
];;

            return {
                all: function() {
                    return namesofAllah;
                },
                get: function(id) {
                    // Simple index lookup
                    return namesofAllah[id];
                }
            }
        })
        ;
