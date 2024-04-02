const democracyFacts = [
    ["What is the supreme law of the land?", "The Constitution"],
    ["What does the Constitution do?", "Sets up/defines the role of government and protects the basic rights of Americans"],
    ["The idea of self-government is in the first three words of the Constitution. What are these words?", "We the People"],
    ["What is an amendment?", "A change or addition to the Constitution"],
    ["What do we call the first ten amendments to the Constitution?", "The Bill of Rights"],
    ["What are the five rights or freedoms from the First Amendment?", "Speech, Religion, Assembly, Press, Petition the government"],
    ["How many amendments does the Constitution have?", "Twenty-seven (27)"],
    ["What did the Declaration of Independence do?", "Announced our independence from Great Britain"],
    ["What are the three rights in the Declaration of Independence?", "Life, Liberty, and the Pursuit of Happiness"],
    ["What is freedom of religion?", "You can practice any religion, or not practice a religion."],
    ["What is the economic system in the United States?", "Capitalist economy or market economy"],
    ["What is the “rule of law”?", "Everyone must follow the law, including the government and its officials. No one is above the law."]
];

const systemFacts = [
    ["Name one branch or part of the government.", "Congress, Legislative, President, Executive, The courts, Judicial"],
    ["What stops one branch of government from becoming too powerful?", "Checks and balances, Separation of powers"],
    ["Who is in charge of the executive branch?", "The President"],
    ["Who makes federal laws?", "Congress, Senate and House (of Representatives), U.S. or national legislature"],
    ["What are the two parts of the U.S. Congress?", "The Senate and House (of Representatives)"],
    ["How many U.S. Senators are there?", "One hundred (100)"],
    ["We elect a U.S. Senator for how many years?", "Six (6)"],
    ["Who is one of your state’s U.S. Senators now?", "Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.]"],
    ["The House of Representatives has how many voting members?", "Four hundred thirty-five (435)"],
    ["We elect a U.S. Representative for how many years?", "Two (2)"],
    ["Name your U.S. Representative.", "Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.]"],
    ["Who does a U.S. Senator represent?", "All people of the state"],
    ["Why do some states have more Representatives than other states?", "Because of the state’s population, They have more people, Some states have more people"],
    ["We elect a President for how many years?", "Four (4)"],
    ["In what month do we vote for President?", "November"],
    ["If the President can no longer serve, who becomes President?", "The Vice President"],
    ["If both the President and the Vice President can no longer serve, who becomes President?", "The Speaker of the House"],
    ["Who is the Commander in Chief of the military?", "The President"],
    ["Who signs bills to become laws?", "The President"],
    ["Who vetoes bills?", "The President"],
    ["What does the President’s Cabinet do?", "Advises the President"],
    ["What are two Cabinet-level positions?", "Secretary of Agriculture, Secretary of Commerce, Secretary of Defense, Secretary of Education, Secretary of Energy, Secretary of Health and Human Services, Secretary of Homeland Security, Secretary of Housing and Urban Development, Secretary of the Interior, Secretary of Labor, Secretary of State, Secretary of Transportation, Secretary of the Treasury, Secretary of Veterans Affairs, Attorney General, Vice President"],
    ["What does the judicial branch do?", "Reviews laws, Explains laws, Resolves disputes (disagreements), Decides if a law goes against the Constitution"],
    ["What is the highest court in the United States?", "The Supreme Court"],
    ["Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", "To print money, To declare war, To create an army, To make treaties"],
    ["Under our Constitution, some powers belong to the states. What is one power of the states?", "Provide schooling and education, Provide protection (police), Provide safety (fire departments), Give a driver’s license, Approve zoning and land use"],
    ["What are the two major political parties in the United States?", "Democratic and Republican"]
];

const citizenFacts = [
    ["There are four amendments to the Constitution about who can vote. What are they?", "Citizens eighteen (18) and older can vote, You don’t have to pay (a poll tax) to vote, Any citizen can vote. (Women and men can vote.), A male citizen of any race (can vote)"],
    ["What is one responsibility that is only for United States citizens?", "Serve on a jury, Vote in a federal election"],
    ["What are two rights only for United States citizens.", "Vote in a federal election and run for federal office"],
    ["What are some rights of everyone living in the United States?", "Freedom of expression, Freedom of speech, Freedom of assembly, Freedom to petition the government, Freedom of religion, The right to bear arms"],
    ["What do we show loyalty to when we say the Pledge of Allegiance?", "The United States or The flag"],
    ["What are some promises you make when you become a United States citizen?", "Give up loyalty to other countries, Defend the Constitution and laws of the United States, Obey the laws of the United States, Serve in the U.S. military (if needed), Serve (do important work for) the nation (if needed), Be loyal to the United States"],
    ["How old do citizens have to be to vote for President?", "Eighteen (18)"],
    ["What are some ways that Americans can participate in their democracy?", "Vote, Join a political party, Help with a campaign, Join a civic group, Join a community group, Give an elected official your opinion on an issue, Call Senators and Representatives, Publicly support or oppose an issue or policy, Run for office, Write to a newspaper"],
    ["When is the last day you can send in federal income tax forms?", "April 15"],
    ["When must all men register for the Selective Service?", "Between eighteen (18) and twenty-six (26)"]
];

const historyFacts = [
    ["What is one reason colonists came to America?", "Freedom, Political liberty, Religious freedom, Economic opportunity, Practice their religion, Escape persecution"],
    ["Who lived in America before the Europeans arrived?", "American Indians, Native Americans"],
    ["What group of people was taken to America and sold as slaves?", "Africans, People from Africa"],
    ["Why did the colonists fight the British?", "Because of high taxes (taxation without representation), Because the British army stayed in their houses (boarding, quartering), Because they didn’t have self-government"],
    ["Who wrote the Declaration of Independence?", "Thomas Jefferson"],
    ["When was the Declaration of Independence adopted?", "July 4, 1776"],
    ["There were 13 original states. Name three.", "New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, Georgia"],
    ["What happened at the Constitutional Convention?", "The Constitution was written, The Founding Fathers wrote the Constitution"],
    ["When was the Constitution written?", "1787"],
    ["The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", "James Madison, Alexander Hamilton, John Jay, Publius"],
    ["What is one thing Benjamin Franklin is famous for?", "U.S. diplomat, Oldest member of the Constitutional Convention, First Postmaster General of the United States, Writer of “Poor Richard’s Almanac”, Started the first free libraries"],
    ["Who is the “Father of Our Country”?", "George Washington"],
    ["Who was the first President?", "George Washington"],
    ["What territory did the United States buy from France in 1803?", "The Louisiana Territory, Louisiana"],
    ["Name one war fought by the United States in the 1800s.", "War of 1812, Mexican-American War, Civil War, Spanish-American War"],
    ["Name the U.S. war between the North and the South.", "The Civil War, The War between the States"],
    ["Name one problem that led to the Civil War.", "Slavery, Economic reasons, States’ rights"],
    ["What was one important thing that Abraham Lincoln did?", "Freed the slaves (Emancipation Proclamation), Saved (or preserved) the Union, Led the United States during the Civil War"],
    ["What did the Emancipation Proclamation do?", "Freed the slaves, Freed slaves in the Confederacy, Freed slaves in the Confederate states, Freed slaves in most Southern states"],
    ["What did Susan B. Anthony do?", "Fought for women’s rights and civil rights"],
    ["What are some wars fought by the United States in the 1900s.", "World War I, World War II, Korean War, Vietnam War, (Persian) Gulf War"],
    ["Who was President during World War I?", "Woodrow Wilson"],
    ["Who was President during the Great Depression and World War II?", "Franklin Roosevelt"],
    ["Who did the United States fight in World War II?", "Japan, Germany, and Italy"],
    ["Before he was President, Eisenhower was a general. What war was he in?", "World War II"],
    ["During the Cold War, what was the main concern of the United States?", "Communism"],
    ["What movement tried to end racial discrimination?", "The civil rights movement"],
    ["What did Martin Luther King, Jr. do?", "He fought for civil rights and worked for equality for all Americans"],
    ["What major event happened on September 11, 2001, in the United States?", "Terrorists attacked the United States"]
];



export default {democracyFacts, systemFacts, citizenFacts, historyFacts}

