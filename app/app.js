// Leonida Trophy Guide — GTA VI (PlayStation 5) tracker and guide.
// Offline: no network requests. The trophy data below is the same data as
// app/data/trophies.json (the official list, 2026-11-18), embedded here so the
// guide opens straight from its own files with no server and no fetch.
"use strict";

const TROPHIES = [
  { id: 1, name: "Vice Got a Price!", description: "Congratulations! You're a Leonida Legend.", grade: "platinum", kind: "platinum", spoiler: false, missable: false, missableNote: "", guide: "Earn the other 54 trophies and the platinum is yours. Work through the roadmap in order — story first, then the contact strands, activities, collectibles and cleanup — and clear the missable list before the final mission so nothing is left behind. The progress bar at the top of this guide is your platinum tracker.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 2, name: "Just Like Paradise", description: "Complete Gone Fishing.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Play the opening mission, Gone Fishing, to its end. It is the first mission of the game, so there is nothing to unlock first — follow the objectives as they appear and the trophy pops when the mission completes. Not missable: it is the opening mission.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 3, name: "Paradise Lost", description: "Complete Chapter 1.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Finish Chapter 1. Play through the story in order; the trophy pops when the chapter's final mission ends. Not missable — chapters can be replayed from the mission menu if you need to.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 4, name: "T**s Ass Drug Money", description: "Complete Chapter 2.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Finish Chapter 2. Play the story in order and the trophy pops at the end of the chapter. Not missable — chapters can be replayed from the mission menu if you need to.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 5, name: "Vice City, Baby!", description: "Complete Chapter 3.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Finish Chapter 3. Play the story in order; the trophy pops at the end of the chapter. Not missable — chapters can be replayed from the mission menu if you need to.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 6, name: "Top Of The World, Ma", description: "Complete Chapter 4.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Finish Chapter 4. Play the story in order; the trophy pops at the end of the chapter. Not missable — chapters can be replayed from the mission menu if you need to.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 7, name: "You Gotta Know When to Get Off", description: "Complete the final mission.", grade: "gold", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Finish the final mission of the story. Play through all four chapters; the trophy pops when the last mission ends. Before you start it, clear the missable list — the partner trophies and the choices trophy are easier while the story is still running. Not missable itself.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 8, name: "Trust", description: "Complete Breakfast Run.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Complete the mission Breakfast Run. It unlocks as the story reaches it — follow the story and the trophy pops when the mission ends. Not missable; missions can be replayed from the mission menu.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 9, name: "Break the Bank", description: "Complete The Cartel Heist.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Complete The Cartel Heist. A story mission — play the story until it appears and finish it. Not missable; missions can be replayed from the mission menu.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 10, name: "Family Matters", description: "Complete Child's Play.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Complete Child's Play. A story mission — finish it when the story offers it. Not missable; missions can be replayed from the mission menu.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 11, name: "DWNFALL", description: "Complete Headliners.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Complete Headliners. A story mission — finish it when the story offers it. Not missable; missions can be replayed from the mission menu.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 12, name: "Hi-Jacked", description: "Complete VCIA Takedown.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Complete VCIA Takedown. A story mission at the airport — finish it when the story offers it. Not missable; missions can be replayed from the mission menu.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 13, name: "Snow Storm", description: "Complete Operation Savage Glory.", grade: "bronze", kind: "story", spoiler: true, missable: false, missableNote: "", guide: "Complete Operation Savage Glory. A story mission — finish it when the story offers it. Not missable; missions can be replayed from the mission menu.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 14, name: "A Long Road", description: "Attain 100% Completion.", grade: "gold", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "Reach 100% completion. This is the long one: the game's stats screen tracks everything that counts — story, strands, activities, collectibles and the rest. Use this guide's checklist as your 100% list and clear each section; the trophy pops when the in-game completion counter hits 100%. Not missable, but save it for last.", sources: "Official trophy list on Exophase (name, description, grade); the in-game stats screen; our own advice from the official description, not yet checked in the game." },
  { id: 15, name: "Cunning Stunts", description: "Complete 250 Stunts.", grade: "silver", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "Complete 250 stunts. Stunts are jumps, near-misses, drifts and airtime the game counts as you drive — the stats screen keeps the running total. The fastest route is chaining jumps and drifts on the highways and ramps around Vice City; every stunt adds to the same counter, so it builds up across all your driving. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 16, name: "Master of None", description: "Try each type of activity once.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Try each type of activity once. Leonida has a set of activities — fishing, races, arcade games, bowling, drone races, the shooting range, hunting, meditation and more — each marked on the in-game map. Visit each type once and the trophy pops; you only need to try them, not win. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); the in-game map; our own advice from the official description, not yet checked in the game." },
  { id: 17, name: "The Shootist", description: "Earn a gold medal in all Shooting Range challenges.", grade: "silver", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Earn a gold medal in all Shooting Range challenges. Head to a shooting range (marked on the map), work through every challenge, and repeat each until you hit gold — the range shows your best medal per challenge, so you can see which ones still need work. Gold is about accuracy and speed together. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); the shooting range in-game; our own advice from the official description, not yet checked in the game." },
  { id: 18, name: "Top Fun", description: "Win a Top Fun Drone Race at every location.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Win a Top Fun Drone Race at every location. Find the Top Fun drone-race spots on the map, enter each one, and win it — the game tracks which locations you have won. Learn each course's corners on a first run, then race it properly. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); the in-game map; our own advice from the official description, not yet checked in the game." },
  { id: 19, name: "Earn Cash, Not Kudos", description: "Win 20 different races.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Win 20 different races. Enter races from the map and win 20 distinct ones — repeats of the same race do not count twice, so keep moving to new events. Different vehicle classes suit different courses; switch cars when a course does not suit yours. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." }
,
  { id: 20, name: "Baited My Tackle", description: "Beat Cal in a fishing challenge.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Beat Cal in a fishing challenge. Find Cal at a fishing spot, enter his challenge, and out-fish him — watch the tension and reel when the fish runs, and keep the line from snapping. If you lose, challenge him again. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 21, name: "Stick Fiddler", description: "Complete an arcade game.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Complete an arcade game. Find an arcade machine — bars and arcades around Leonida have them — start any game, and play it to its end. One full playthrough is enough. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 22, name: "Road to Rehabilitation", description: "Complete the final mission for Andy.", grade: "bronze", kind: "strand", spoiler: true, missable: false, missableNote: "", guide: "Complete the final mission for Andy. Play Andy's strand of missions until the last one appears, then finish it. Strands unlock as the story progresses; the roadmap in this guide shows where Andy's strand sits. Not missable — the final mission is the trigger.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 23, name: "This Was No Boat Accident", description: "Complete the final mission for Kenton.", grade: "bronze", kind: "strand", spoiler: true, missable: false, missableNote: "", guide: "Complete the final mission for Kenton. Play Kenton's strand through to its last mission and finish it. Not missable — the final mission is the trigger.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 24, name: "The Lone Rider", description: "Complete the final mission for Billy.", grade: "bronze", kind: "strand", spoiler: true, missable: false, missableNote: "", guide: "Complete the final mission for Billy. Play Billy's strand through to its last mission and finish it. Not missable — the final mission is the trigger.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 25, name: "Strangers & Freaks", description: "Complete 8 mission strands for strangers across the state of Leonida.", grade: "silver", kind: "strand", spoiler: false, missable: false, missableNote: "", guide: "Complete 8 mission strands for strangers across Leonida. Strangers appear as markers on the map — talk to them, play their strands, and finish 8 full strands. They unlock across the story, so check the map after each chapter; some only appear in certain areas. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 26, name: "Supply & Demand", description: "Complete the final mission for Randy.", grade: "bronze", kind: "strand", spoiler: true, missable: false, missableNote: "", guide: "Complete the final mission for Randy. Play Randy's strand through to its last mission and finish it. Not missable — the final mission is the trigger.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 27, name: "Spin On This!", description: "Complete the final mission for Tyrone.", grade: "bronze", kind: "strand", spoiler: true, missable: false, missableNote: "", guide: "Complete the final mission for Tyrone. Play Tyrone's strand through to its last mission and finish it. Not missable — the final mission is the trigger.", sources: "Official trophy list on Exophase (name, description, grade); the mission briefing in-game; our own advice from the official description, not yet checked in the game." },
  { id: 28, name: "Positive Mental Attitude", description: "Meditate at every spot across Leonida.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Meditate at every spot across Leonida. Meditation spots are marked on the map once you have found the first one — visit each and meditate there. The game tracks which spots you have used; work through them area by area so none is missed. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); the in-game map; our own advice from the official description, not yet checked in the game." },
  { id: 29, name: "Fair Game", description: "Hunt a unique animal for Bret.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Hunt a unique animal for Bret. Bret's hunts start from his marker; follow his instructions to track the unique animal — move quietly, watch for tracks and signs, and take the shot when it is clean. If you spook it, you can try again. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 30, name: "Don't Touch My Deck", description: "Complete 3 Collectible Card sets.", grade: "silver", kind: "collectible", spoiler: false, missable: false, missableNote: "", guide: "Complete 3 Collectible Card sets. Cards are hidden around Leonida — check shops, interiors and out-of-the-way spots. The collection screen in-game shows which cards you have and which sets are close; finish any 3 full sets. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 31, name: "You WAiNKer!", description: "WAiNK It at 100 locations.", grade: "silver", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "WAiNK It at 100 locations. WAiNK spots are scattered across the map — the game counts each location once, so keep moving to new ones. The stats screen shows your running total; sweep one area at a time. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 32, name: "One Last Thing", description: "Complete 50 Challenges.", grade: "bronze", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "Complete 50 Challenges. Challenges are the game's small goals — stunts, driving feats, combat feats and more — listed in the challenges menu with your progress on each. Work through the easy ones first; the counter is cumulative across everything you do. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 33, name: "Hot Together", description: "Lose a 4 star Wanted Level with your partner and escape the heat.", grade: "bronze", kind: "combat", spoiler: true, missable: true, missableNote: "Do it while the story keeps you and your partner together — partner availability is story-gated.", guide: "Lose a 4 star Wanted Level with your partner and escape the heat. Get a 4-star wanted level while your partner is with you, then lose the cops — break line of sight, switch vehicles, and hide until the wanted level clears. Missable: do it while the story keeps you and your partner together, because partner availability is story-gated.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 34, name: "Retail Therapy", description: "Rob 3 shops back-to-back with your partner without losing your Wanted Level.", grade: "bronze", kind: "combat", spoiler: true, missable: true, missableNote: "Do it while your partner is with you — partner availability is story-gated.", guide: "Rob 3 shops back-to-back with your partner without losing your Wanted Level. With your partner beside you, rob three shops in a row — keep the wanted level alive between robberies and don't let it clear or get busted. Plan a route through three close shops first. Missable: do it while your partner is with you, because partner availability is story-gated.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 35, name: "Whip It Good", description: "Discover 100 vehicles.", grade: "bronze", kind: "collectible", spoiler: false, missable: false, missableNote: "", guide: "Discover 100 vehicles. Drive or ride anything new — every vehicle model you get into for the first time counts, and the stats screen tracks the total. Steal, borrow and buy widely; rare models hide in specific areas. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 36, name: "Gunslinger", description: "Take down 5 enemies in a single use of Combat Focus.", grade: "bronze", kind: "combat", spoiler: false, missable: false, missableNote: "", guide: "Take down 5 enemies in a single use of Combat Focus. Trigger Combat Focus during a firefight with at least five enemies in front of you and drop all five before it ends — pick a busy shootout, not a quiet one. If you fall short, try again at the next fight. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 37, name: "Catch Me If You Can", description: "Make an unscheduled departure at VCIA.", grade: "bronze", kind: "combat", spoiler: true, missable: true, missableNote: "Do it during the VCIA mission window — the moment may not come again.", guide: "Make an unscheduled departure at VCIA. At the airport, leave by an unusual route — not through the terminal — when the story takes you there. Missable: do it during the VCIA mission window, because once that mission is done the moment may not come again.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 38, name: "Challenging Tank", description: "Kinda hot in these Rhinos.", grade: "bronze", kind: "combat", spoiler: false, missable: false, missableNote: "", guide: "Kinda hot in these Rhinos. Get into a Rhino tank — they appear at high wanted levels and around military areas — and use it. Once you have one, the trophy is about the tank itself; drive it, fire it, enjoy it. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." }
,
  { id: 39, name: "Sneakthief", description: "Rob a jewelry store without being detected.", grade: "bronze", kind: "combat", spoiler: false, missable: false, missableNote: "", guide: "Rob a jewelry store without being detected. Case the store first, enter quietly, avoid the cameras and staff sightlines, and get out without raising the alarm. If you are spotted, leave and try again later. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 40, name: "Maximum Withdrawal", description: "Rob 5 Bank Vaults and escape.", grade: "silver", kind: "combat", spoiler: false, missable: false, missableNote: "", guide: "Rob 5 Bank Vaults and escape. Plan five vault jobs and get out clean each time — the count is cumulative, so each successful escape adds one. Bring a fast getaway car and a route out before you go in. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 41, name: "A Classic Blitz Play", description: "Rob an Armored Truck and escape.", grade: "bronze", kind: "combat", spoiler: false, missable: false, missableNote: "", guide: "Rob an Armored Truck and escape. Find an armored truck on the road, stop it, take the cash, and escape the wanted level that follows. Trucks run regular routes — watch for one, then hit it and vanish. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 42, name: "The Goodtime State", description: "Explore all of Leonida.", grade: "bronze", kind: "collectible", spoiler: false, missable: false, missableNote: "", guide: "Explore all of Leonida. Visit every area of the map — the game tracks which areas you have been to, and the map shows what is left. Drive the highways, the back roads and the coast until the whole map is uncovered. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); the in-game map; our own advice from the official description, not yet checked in the game." },
  { id: 43, name: "Pest Control", description: "Rob an Illegal Operation belonging to each gang.", grade: "bronze", kind: "combat", spoiler: false, missable: false, missableNote: "", guide: "Rob an Illegal Operation belonging to each gang. Each gang runs illegal operations marked on the map — hit one operation per gang. Learn which areas each gang controls and work through them gang by gang. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); the in-game map; our own advice from the official description, not yet checked in the game." },
  { id: 44, name: "In The Beginning…", description: "Enjoy a cocktail with a view on Ocean Beach.", grade: "bronze", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "Enjoy a cocktail with a view on Ocean Beach. Head to a bar on Ocean Beach, order a cocktail, and enjoy the view. It is a quiet one — no fight, no chase. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 45, name: "Capital Offense", description: "Smash your way out of a vehicle showroom in classic style.", grade: "bronze", kind: "combat", spoiler: true, missable: true, missableNote: "A set story moment — do it when the opportunity appears.", guide: "Smash your way out of a vehicle showroom in classic style. When the story puts you in a showroom, don't walk out — drive straight through it. Missable: this looks like a set story moment, so do it when the opportunity appears; it may not come again.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 46, name: "Let’s Go Bowling", description: "Follow-through at the Kolt & Associates' bowling alley.", grade: "bronze", kind: "activity", spoiler: false, missable: false, missableNote: "", guide: "Follow-through at the Kolt & Associates' bowling alley. Go to the Kolt & Associates bowling alley, play a game, and follow through — finish the game you start. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 47, name: "Personal Best", description: "A partnership with mass appeal.", grade: "bronze", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "A partnership with mass appeal. This one pops from a partnership moment — play the story with your partner and it comes. The description gives no target to chase, so keep playing together and it will land. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 48, name: "Actions Speak Louder", description: "Choices made (for better or worse).", grade: "bronze", kind: "misc", spoiler: true, missable: true, missableNote: "Story choices may not be redoable — decide deliberately before the finale.", guide: "Choices made (for better or worse). The game counts the choices you make during the story. Decide deliberately — some choices may not be redoable once made, so think before you pick, and check your count before the finale. Possibly missable: choices can lock.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 49, name: "Bad Luck, I Guess", description: "Second time's the charm.", grade: "bronze", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "Second time's the charm. Fail something, then succeed on the second try. It pops on a retry success — miss a jump, lose a race, fail a mission, then nail it the next time. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 50, name: "The Truth Is Out There", description: "What the hell just happened?", grade: "bronze", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "What the hell just happened? Witness something strange. Leonida hides odd events — keep your eyes open while exploring, especially off the beaten track, and the moment will find you. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 51, name: "Ten Pin", description: "Bowl 'em over with a melee drive-by.", grade: "bronze", kind: "combat", spoiler: false, missable: false, missableNote: "", guide: "Bowl 'em over with a melee drive-by. From a moving vehicle, hit someone with a melee weapon and knock them down. Line up a slow pass, swing as you go by, and keep moving. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 52, name: "Dime on the Dollar", description: "Earn $250,000 laundering Marked Bills through your contacts.", grade: "bronze", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "Earn $250,000 laundering Marked Bills through your contacts. Marked Bills come from robberies and heists; take them to your contacts to launder them into clean cash. The total is cumulative — keep laundering after every job and it adds up. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 53, name: "Treat Yo Self", description: "Spend $100,000 across all shops.", grade: "bronze", kind: "misc", spoiler: false, missable: false, missableNote: "", guide: "Spend $100,000 across all shops. Buy clothes, food, weapons, car parts — anything in any shop counts, and the total is cumulative. Spend as you play and it will land on its own. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." },
  { id: 54, name: "Little Boxes", description: "Purchase all garage properties.", grade: "bronze", kind: "collectible", spoiler: false, missable: false, missableNote: "", guide: "Purchase all garage properties. Buy every garage property on the map — the property menu shows which ones you own and which are left. Save up and buy them as they appear. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); our own advice from the official description, not yet checked in the game." },
  { id: 55, name: "On the Spot", description: "Register 10 vehicles to the Scooter Bros app.", grade: "bronze", kind: "collectible", spoiler: false, missable: false, missableNote: "", guide: "Register 10 vehicles to the Scooter Bros app. Open the Scooter Bros app on your phone, register vehicles you own or find — ten registrations in total. Any ten vehicles count. Not missable.", sources: "Official trophy list on Exophase (name, description, grade); PSNProfiles (progress target); our own advice from the official description, not yet checked in the game." }
];

// The road to the platinum, in the order to play it. Built from the official
// descriptions: story first, then the contact strands, activities,
// collectibles and exploration, combat, and finally cleanup.
const ROADMAP = [
  { phase: 1, title: "Play the story", blurb: "Chapters 1 to 4, the story missions, and the final mission. Do the missable story moments when they come — they may not come again.", ids: [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 7] },
  { phase: 2, title: "Finish the strands", blurb: "The five contacts' final missions, plus 8 stranger strands across Leonida. Strands unlock as the story goes, so check the map after each chapter.", ids: [22, 23, 24, 26, 27, 25] },
  { phase: 3, title: "Activities", blurb: "Fishing, races, the range, the arcade, bowling, drone races, hunting and meditation. Try everything once for Master of None, then go for gold.", ids: [16, 17, 18, 19, 20, 21, 28, 29, 46] },
  { phase: 4, title: "Collectibles and exploration", blurb: "Cards, vehicles, garages and the whole map. Sweep one area at a time and let the counters build.", ids: [30, 35, 42, 54, 55] },
  { phase: 5, title: "Combat and chaos", blurb: "Wanted levels, robberies, Combat Focus and the gangs. The two partner trophies belong here — do them while your partner is with you.", ids: [33, 34, 36, 37, 38, 39, 40, 41, 43, 45, 51] },
  { phase: 6, title: "Cleanup", blurb: "Stunts, challenges, spending, laundering and the odd moments. Whatever is left, plus 100% completion and the platinum itself.", ids: [14, 15, 31, 32, 44, 47, 48, 49, 50, 52, 53, 1] }
];

const KIND_LABELS = { story: "Story", strand: "Side strand", activity: "Activity", collectible: "Collectible", combat: "Combat", misc: "Misc", platinum: "Platinum" };
const GRADE_LABELS = { platinum: "Platinum", gold: "Gold", silver: "Silver", bronze: "Bronze" };
const STORE_KEY = "gta6-trophy-guide-v1";

// ---- state ---------------------------------------------------------------
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return { earned: {}, spoiler: true };
    const s = JSON.parse(raw);
    return { earned: s.earned || {}, spoiler: s.spoiler !== false };
  } catch (e) { return { earned: {}, spoiler: true }; }
}
let state = loadState();
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* storage full or blocked: progress just won't persist */ }
}

let view = "list";
let selectedId = 2;
let filters = { q: "", grade: "all", kind: "all", status: "all", sort: "id" };

const $ = (id) => document.getElementById(id);
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function byId(id) { return TROPHIES.find((t) => t.id === id); }
function isEarned(t) { return !!state.earned[t.id]; }
function isHidden(t) { return state.spoiler && t.spoiler && !isEarned(t); }
function earnedCount() { return TROPHIES.filter(isEarned).length; }

// ---- rendering -----------------------------------------------------------
function gradeDot(t) { return '<span class="medal ' + t.grade + '" title="' + GRADE_LABELS[t.grade] + '"></span>'; }

function renderHeader() {
  const n = earnedCount();
  $("progressFill").style.width = Math.round((n / 55) * 100) + "%";
  $("progressText").textContent = n + " / 55 earned — " + Math.round((n / 55) * 100) + "% to the platinum";
  const counts = { platinum: 0, gold: 0, silver: 0, bronze: 0 };
  TROPHIES.forEach((t) => { if (isEarned(t)) counts[t.grade]++; });
  $("gradeCounts").textContent = "Platinum " + counts.platinum + "/1 · Gold " + counts.gold + "/2 · Silver " + counts.silver + "/6 · Bronze " + counts.bronze + "/46";
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  $("view-list").hidden = view !== "list";
  $("view-roadmap").hidden = view !== "roadmap";
  $("view-missable").hidden = view !== "missable";
}

function visibleList() {
  let list = TROPHIES.slice();
  if (filters.q) {
    const q = filters.q.toLowerCase();
    list = list.filter((t) => !isHidden(t) && (t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)));
  }
  if (filters.grade !== "all") list = list.filter((t) => t.grade === filters.grade);
  if (filters.kind !== "all") list = list.filter((t) => t.kind === filters.kind);
  if (filters.status === "earned") list = list.filter(isEarned);
  if (filters.status !== "earned" && filters.status === "todo") list = list.filter((t) => !isEarned(t));
  if (filters.sort === "grade") {
    const order = { platinum: 0, gold: 1, silver: 2, bronze: 3 };
    list.sort((a, b) => order[a.grade] - order[b.grade] || a.id - b.id);
  } else if (filters.sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filters.sort === "missable") {
    list.sort((a, b) => (b.missable - a.missable) || a.id - b.id);
  } else {
    list.sort((a, b) => a.id - b.id);
  }
  return list;
}

function rowHtml(t) {
  const hidden = isHidden(t);
  const name = hidden ? "Hidden trophy — story spoiler" : esc(t.name);
  const desc = hidden ? "Earn this trophy to reveal its name and description." : esc(t.description);
  const badges = (t.missable ? ' <span class="badge missable">Missable</span>' : "") + (t.spoiler && !hidden ? ' <span class="badge spoiler">Story</span>' : "");
  return '<div class="row' + (isEarned(t) ? " earned" : "") + (selectedId === t.id ? " selected" : "") + '" data-id="' + t.id + '" tabindex="0" role="button" aria-label="' + esc(t.name) + '">' +
    '<input type="checkbox" class="check" data-id="' + t.id + '"' + (isEarned(t) ? " checked" : "") + ' aria-label="Mark ' + esc(t.name) + ' earned">' +
    gradeDot(t) +
    '<div class="row-main"><div class="row-name">' + name + badges + '</div>' +
    '<div class="row-desc">' + desc + '</div>' +
    '<div class="row-meta">' + GRADE_LABELS[t.grade] + " · " + KIND_LABELS[t.kind] + "</div></div></div>";
}

function renderList() {
  const list = visibleList();
  $("listCount").textContent = "Showing " + list.length + " of 55 trophies" + (state.spoiler ? " — spoiler mode on: story trophies stay hidden until earned" : "");
  $("checklist").innerHTML = list.map(rowHtml).join("") || '<p class="empty">No trophies match these filters.</p>';
  renderDetail();
}

function renderDetail() {
  const t = byId(selectedId) || TROPHIES[0];
  const box = $("detail");
  if (isHidden(t)) {
    box.innerHTML = '<h2>Hidden trophy</h2><p class="muted">This is a story trophy. Its name, description and guide stay hidden while spoiler mode is on — earn it in the game (or turn spoiler mode off) to reveal it.</p>' +
      '<p><label><input type="checkbox" id="detailCheck" ' + (isEarned(t) ? "checked" : "") + '> Mark as earned</label></p>';
    bindDetailCheck(t);
    return;
  }
  box.innerHTML = '<h2>' + esc(t.name) + "</h2>" +
    '<p class="detail-meta">' + gradeDot(t) + " " + GRADE_LABELS[t.grade] + " · " + KIND_LABELS[t.kind] + (t.missable ? ' · <span class="badge missable">Missable</span>' : "") + "</p>" +
    '<p class="official">“' + esc(t.description) + '” — official description</p>' +
    '<h3>Guide</h3><p>' + esc(t.guide) + "</p>" +
    (t.missable ? '<p class="warn"><strong>Missable:</strong> ' + esc(t.missableNote) + "</p>" : "") +
    '<h3>Sources</h3><p class="sources">' + esc(t.sources) + "</p>" +
    '<p><label><input type="checkbox" id="detailCheck" ' + (isEarned(t) ? "checked" : "") + '> Mark as earned</label></p>';
  bindDetailCheck(t);
}
function bindDetailCheck(t) {
  const c = $("detailCheck");
  if (c) c.addEventListener("change", () => { setEarned(t.id, c.checked); });
}

function renderRoadmap() {
  $("roadmap").innerHTML = ROADMAP.map((p) => {
    const done = p.ids.filter((id) => isEarned(byId(id))).length;
    const chips = p.ids.map((id) => {
      const t = byId(id);
      return '<span class="chip' + (isEarned(t) ? " done" : "") + '" data-id="' + t.id + '">' + (isHidden(t) ? "Hidden" : esc(t.name)) + "</span>";
    }).join("");
    return '<section class="phase"><h2>Phase ' + p.phase + " — " + esc(p.title) + ' <span class="phase-count">' + done + "/" + p.ids.length + "</span></h2><p>" + esc(p.blurb) + "</p><div class=\"chips\">" + chips + "</div></section>";
  }).join("") +
  '<p class="muted">Roadmap built from the official descriptions. Missable trophies are flagged on the Missable tab — clear them before the final mission.</p>';
}

function renderMissable() {
  const list = TROPHIES.filter((t) => t.missable);
  const done = list.filter(isEarned).length;
  $("missableList").innerHTML = "<p>" + done + " of " + list.length + " missable trophies earned. Everything else in the game can be earned after the story — these five cannot be counted on later.</p>" +
    list.map((t) => '<section class="miss"><h2>' + esc(t.name) + ' <span class="badge missable">Missable</span></h2>' +
      '<p class="official">“' + esc(t.description) + '”</p><p>' + esc(t.guide) + "</p>" +
      '<p class="warn"><strong>Do it before:</strong> ' + esc(t.missableNote) + "</p>" +
      '<p><label><input type="checkbox" class="check" data-id="' + t.id + '" ' + (isEarned(t) ? "checked" : "") + '> Mark as earned</label></p></section>').join("");
}

function renderAll() { renderHeader(); if (view === "list") renderList(); if (view === "roadmap") renderRoadmap(); if (view === "missable") renderMissable(); }

function setEarned(id, on) {
  if (on) state.earned[id] = true; else delete state.earned[id];
  saveState();
  renderAll();
}

// ---- export / import -----------------------------------------------------
function exportProgress() {
  const data = { app: "gta6-trophy-guide-01", version: 1, exportedAt: new Date().toISOString(), earned: TROPHIES.filter(isEarned).map((t) => t.id), spoiler: state.spoiler };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "gta6-trophy-progress.json";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 100);
}
function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(String(reader.result));
      const ids = Array.isArray(data.earned) ? data.earned : Object.keys(data.earned || {}).map(Number);
      const next = {};
      ids.forEach((id) => { if (byId(id)) next[id] = true; });
      state.earned = next;
      if (typeof data.spoiler === "boolean") state.spoiler = data.spoiler;
      saveState();
      syncControls();
      renderAll();
      $("importNote").textContent = "Imported " + Object.keys(next).length + " earned trophies.";
    } catch (e) { $("importNote").textContent = "That file could not be read as progress — is it a gta6-trophy-progress.json export?"; }
  };
  reader.readAsText(file);
}

function syncControls() {
  $("fSearch").value = filters.q;
  $("fGrade").value = filters.grade;
  $("fKind").value = filters.kind;
  $("fStatus").value = filters.status;
  $("fSort").value = filters.sort;
  $("fSpoiler").checked = state.spoiler;
}

// ---- routing + events ----------------------------------------------------
function route() {
  const h = location.hash || "#/list";
  if (h.startsWith("#/roadmap")) view = "roadmap";
  else if (h.startsWith("#/missable")) view = "missable";
  else view = "list";
  const m = h.match(/^#\/trophy\/(\d+)$/);
  if (m && byId(Number(m[1]))) { selectedId = Number(m[1]); view = "list"; }
  renderAll();
}

document.addEventListener("DOMContentLoaded", () => {
  syncControls();
  $("fSearch").addEventListener("input", (e) => { filters.q = e.target.value; renderList(); });
  $("fGrade").addEventListener("change", (e) => { filters.grade = e.target.value; renderList(); });
  $("fKind").addEventListener("change", (e) => { filters.kind = e.target.value; renderList(); });
  $("fStatus").addEventListener("change", (e) => { filters.status = e.target.value; renderList(); });
  $("fSort").addEventListener("change", (e) => { filters.sort = e.target.value; renderList(); });
  $("fSpoiler").addEventListener("change", (e) => { state.spoiler = e.target.checked; saveState(); renderAll(); });
  document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => { location.hash = "#/" + b.dataset.view; }));
  document.addEventListener("click", (e) => {
    const row = e.target.closest(".row, .chip");
    if (row && !e.target.classList.contains("check")) {
      selectedId = Number(row.dataset.id);
      if (view !== "list") { location.hash = "#/trophy/" + selectedId; } else { renderList(); }
    }
    const check = e.target.closest(".check");
    if (check) { setEarned(Number(check.dataset.id), check.checked); }
  });
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.closest && e.target.closest(".row, .chip")) {
      e.preventDefault();
      e.target.closest(".row, .chip").click();
    }
  });
  $("btnExport").addEventListener("click", exportProgress);
  $("btnImport").addEventListener("click", () => $("fileImport").click());
  $("fileImport").addEventListener("change", (e) => { if (e.target.files[0]) importProgress(e.target.files[0]); e.target.value = ""; });
  $("btnReset").addEventListener("click", () => { state.earned = {}; saveState(); renderAll(); });
  window.addEventListener("hashchange", route);
  route();
});
