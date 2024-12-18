// // // // // // import { Box, Grid, Typography } from "@mui/material";
// // // // // // import React, { useEffect, useRef } from "react";
// // // // // // import gsap from "gsap";
// // // // // // import ScrollTrigger from "gsap/ScrollTrigger";
// // // // // // import event1 from "../../../assets/background_patterns/event1.webp";
// // // // // // import event2 from "../../../assets/background_patterns/event2.webp";
// // // // // // import event3 from "../../../assets/background_patterns/event3.webp";
// // // // // // import event4 from "../../../assets/background_patterns/event4.webp";
// // // // // // import Image from "next/image";

// // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // const data = [
// // // // // //   { title: "title1", descTitle: "descTitle1", img: event1 },
// // // // // //   { title: "title2", descTitle: "descTitle2", img: event2 },
// // // // // //   { title: "title3", descTitle: "descTitle3", img: event3 },
// // // // // //   { title: "title4", descTitle: "descTitle4", img: event4 },
// // // // // // ];

// // // // // // const StackCard = () => {
// // // // // //   const containerRef = useRef(null); // Reference for the wrapper

// // // // // //   useEffect(() => {
// // // // // //     const elements = gsap.utils.toArray(".stackCard"); // Target all cards

// // // // // //     gsap.timeline({
// // // // // //       scrollTrigger: {
// // // // // //         trigger: containerRef.current, // Trigger for ScrollTrigger
// // // // // //         start: "top top",
// // // // // //         end: "+=1000", // Adjust based on the scroll duration
// // // // // //         scrub: true,
// // // // // //         pin: true, // Pin the section
// // // // // //         markers: true, // Debugging markers
// // // // // //       },
// // // // // //     })
// // // // // //       .to(elements, {
// // // // // //         yPercent: (i) => -i * 50, // Offset each card progressively upwards
// // // // // //         scale: 0.9, // Scale down the cards
// // // // // //         stagger: 0.2, // Delay between animations
// // // // // //         ease: "power1.inOut",
// // // // // //       });
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <Box
// // // // // //       sx={{
// // // // // //         background: "#151618",
// // // // // //         height: "100vh",
// // // // // //         position: "relative",
// // // // // //         overflow: "hidden",
// // // // // //       }}
// // // // // //     >
// // // // // //       <Box id="wrapper" ref={containerRef}>
// // // // // //         <Box
// // // // // //           id="content"
// // // // // //           sx={{
// // // // // //             position: "relative",
// // // // // //             "& .stackCard": {
// // // // // //               position: "absolute",
// // // // // //               top: 0,
// // // // // //               left: "50%",
// // // // // //               transform: "translateX(-50%)",
// // // // // //               width: "80%",
// // // // // //               height: "80%",
// // // // // //               display: "flex",
// // // // // //               flexDirection: "column",
// // // // // //               alignItems: "center",
// // // // // //               justifyContent: "center",
// // // // // //               borderRadius: "16px",
// // // // // //               overflow: "hidden",
// // // // // //               boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
// // // // // //               background: "#2b2b2b",
// // // // // //             },
// // // // // //           }}
// // // // // //         >
// // // // // //           {data.map((item, i) => (
// // // // // //             <Box key={i} className="stackCard" style={{ zIndex: data.length - i }}>
// // // // // //               <Grid container spacing={3}>
// // // // // //                 <Grid item xs={6}>
// // // // // //                   <Typography
// // // // // //                     variant="h4"
// // // // // //                     sx={{
// // // // // //                       color: "white",
// // // // // //                       textTransform: "uppercase",
// // // // // //                       fontWeight: "bold",
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {item.title}
// // // // // //                   </Typography>
// // // // // //                   <Typography
// // // // // //                     variant="body1"
// // // // // //                     sx={{ color: "white", marginTop: "10px" }}
// // // // // //                   >
// // // // // //                     {item.descTitle}
// // // // // //                   </Typography>
// // // // // //                 </Grid>
// // // // // //                 <Grid item xs={6}>
// // // // // //                   <Box
// // // // // //                     sx={{
// // // // // //                       height: "100%",
// // // // // //                       width: "100%",
// // // // // //                       "& > span": { display: "block", width: "100%", height: "100%" },
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     <Image
// // // // // //                       src={item.img}
// // // // // //                       layout="responsive"
// // // // // //                       width={300}
// // // // // //                       height={300}
// // // // // //                       alt={item.title}
// // // // // //                     />
// // // // // //                   </Box>
// // // // // //                 </Grid>
// // // // // //               </Grid>
// // // // // //             </Box>
// // // // // //           ))}
// // // // // //         </Box>
// // // // // //       </Box>
// // // // // //     </Box>
// // // // // //   );
// // // // // // };

// // // // // // export default StackCard;

// // // // // import React, { useEffect, useRef } from "react";
// // // // // import "./CardStack.css"; // External CSS file for styles

// // // // // const CardStack = () => {
// // // // //   const cardsContainerRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const { ScrollObserver, valueAtPercentage } = require("aat"); // Ensure `aat` is installed via npm

// // // // //     const cardsContainer = cardsContainerRef.current;
// // // // //     const cards = cardsContainer.querySelectorAll(".card");
// // // // //     cardsContainer.style.setProperty("--cards-count", cards.length);
// // // // //     cardsContainer.style.setProperty("--card-height", `${cards[0].clientHeight}px`);

// // // // //     Array.from(cards).forEach((card, index) => {
// // // // //       const offsetTop = 20 + index * 20;
// // // // //       card.style.paddingTop = `${offsetTop}px`;

// // // // //       if (index === cards.length - 1) return;

// // // // //       const toScale = 1 - (cards.length - 1 - index) * 0.1;
// // // // //       const nextCard = cards[index + 1];
// // // // //       const cardInner = card.querySelector(".card__inner");

// // // // //       ScrollObserver.Element(nextCard, {
// // // // //         offsetTop,
// // // // //         offsetBottom: window.innerHeight - card.clientHeight,
// // // // //       }).onScroll(({ percentageY }) => {
// // // // //         cardInner.style.transform = `scale(${valueAtPercentage({
// // // // //           from: 1,
// // // // //           to: toScale,
// // // // //           percentage: percentageY,
// // // // //         })})`;

// // // // //         cardInner.style.filter = `brightness(${valueAtPercentage({
// // // // //           from: 1,
// // // // //           to: 0.6,
// // // // //           percentage: percentageY,
// // // // //         })})`;
// // // // //       });
// // // // //     });
// // // // //   }, []);

// // // // //   return (
// // // // //     <div>
// // // // //       <div className="space space--small"></div>
// // // // //       <div className="cards" ref={cardsContainerRef}>
// // // // //         {[...Array(3)].map((_, index) => (
// // // // //           <div className="card" key={index}>
// // // // //             <div className="card__inner">
// // // // //               <div className="card__image-container">
// // // // //                 <img
// // // // //                   className="card__image"
// // // // //                   src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
// // // // //                   alt={`Card ${index + 1}`}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="card__content">
// // // // //                 <h1 className="card__title">Card Title {index + 1}</h1>
// // // // //                 <p className="card__description">
// // // // //                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error
// // // // //                   nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde
// // // // //                   possimus quia at magnam sed cupiditate? Reprehenderit, harum!
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className="space"></div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CardStack;


// // // // import React, { useEffect, useRef } from "react";

// // // // interface CardData {
// // // //   title: string;
// // // //   description: string;
// // // //   image: string;
// // // // }

// // // // const cardsData: CardData[] = [
// // // //   {
// // // //     title: "Card 1",
// // // //     description: "This is the description for card 1.",
// // // //     image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
// // // //   },
// // // //   {
// // // //     title: "Card 2",
// // // //     description: "This is the description for card 2.",
// // // //     image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
// // // //   },
// // // //   {
// // // //     title: "Card 3",
// // // //     description: "This is the description for card 3.",
// // // //     image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
// // // //   },
// // // // ];

// // // // const CardStack: React.FC = () => {
// // // //   const containerRef = useRef<HTMLDivElement>(null);

// // // //   useEffect(() => {
// // // //     const container = containerRef.current;
// // // //     const cards = container?.querySelectorAll<HTMLDivElement>(".card");

// // // //     if (!cards || !container) return;

// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
// // // //           const targetCard = cards[index];

// // // //           if (entry.isIntersecting) {
// // // //             targetCard.style.zIndex = `${100 - index}`; // Higher z-index for intersecting cards
// // // //             targetCard.style.transform = `translateY(-${index * 10}px)`; // Offset for overlapping
// // // //           } else {
// // // //             targetCard.style.zIndex = `${index}`;
// // // //             targetCard.style.transform = `translateY(0px)`;
// // // //           }
// // // //         });
// // // //       },
// // // //       { threshold: 0.5 } // Observe when 50% of the card is visible
// // // //     );

// // // //     cards.forEach((card, index) => {
// // // //       card.setAttribute("data-index", index.toString());
// // // //       observer.observe(card);
// // // //     });

// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   return (
// // // //     <div
// // // //       ref={containerRef}
// // // //       style={{
// // // //         width: "100%",
// // // //         maxWidth: "600px",
// // // //         margin: "0 auto",
// // // //         position: "relative",
// // // //         perspective: "1000px",
// // // //       }}
// // // //     >
// // // //       {cardsData.map((card, index) => (
// // // //         <div
// // // //           key={index}
// // // //           className="card"
// // // //           style={{
// // // //             position: "absolute",
// // // //             top: 0,
// // // //             left: 0,
// // // //             right: 0,
// // // //             transition: "transform 0.5s ease, z-index 0.5s ease",
// // // //           }}
// // // //         >
// // // //           <div
// // // //             className="card-inner"
// // // //             style={{
// // // //               background: "white",
// // // //               borderRadius: "10px",
// // // //               boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
// // // //               overflow: "hidden",
// // // //               padding: "20px",
// // // //             }}
// // // //           >
// // // //             <div
// // // //               className="card-image-container"
// // // //               style={{
// // // //                 height: "200px",
// // // //                 overflow: "hidden",
// // // //               }}
// // // //             >
// // // //               <img
// // // //                 className="card-image"
// // // //                 src={card.image}
// // // //                 alt={card.title}
// // // //                 style={{
// // // //                   width: "100%",
// // // //                   height: "100%",
// // // //                   objectFit: "cover",
// // // //                 }}
// // // //               />
// // // //             </div>
// // // //             <div
// // // //               className="card-content"
// // // //               style={{
// // // //                 padding: "20px",
// // // //               }}
// // // //             >
// // // //               <h1
// // // //                 className="card-title"
// // // //                 style={{
// // // //                   fontSize: "24px",
// // // //                   margin: "0",
// // // //                 }}
// // // //               >
// // // //                 {card.title}
// // // //               </h1>
// // // //               <p
// // // //                 className="card-description"
// // // //                 style={{
// // // //                   fontSize: "16px",
// // // //                   color: "#555",
// // // //                 }}
// // // //               >
// // // //                 {card.description}
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CardStack;





// // // import React, { useEffect, useState } from 'react';

// // // const StackingCards = () => {
// // //   const [scrollY, setScrollY] = useState(0);
  
// // //   const cards = [
// // //     { title: 'Card 1', color: 'bg-blue-500' },
// // //     { title: 'Card 2', color: 'bg-green-500' },
// // //     { title: 'Card 3', color: 'bg-red-500' },
// // //     { title: 'Card 4', color: 'bg-purple-500' },
// // //   ];

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrollY(window.scrollY);
// // //     };

// // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const getCardStyle = (index:number) => {
// // //     const triggerPoint = index * 500; // Point at which card should appear
// // //     const isVisible = scrollY >= triggerPoint;
    
// // //     return {
// // //       transform: isVisible 
// // //         ? `translateY(${index * 20}px) scale(${1 - (index * 0.05)})` 
// // //         : 'translateY(100vh)',
// // //       opacity: isVisible ? 1 : 0,
// // //       transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
// // //       zIndex: index, // Higher index means higher z-index, so newer cards appear on top
// // //     };
// // //   };

// // //   return (
// // //     <div  style={{ height: `${cards.length * 500}px`,width:'100%',position:'relative' }}>
// // //       <div style={{position:'sticky',top:0,display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}} >
// // //         {cards.map((card, index) => (
// // //           <div
// // //             key={index}
// // //             className={`absolute w-64 h-96 rounded-lg shadow-xl ${card.color} p-6 flex items-center justify-center`}
// // //             style={getCardStyle(index)}
// // //           >
// // //             <h2 className="text-white text-2xl font-bold">{card.title}</h2>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default StackingCards;

// // import { Box, Card, Typography } from '@mui/material';
// // import React, { useEffect, useState } from 'react';
// // // import Box from '@/components/ui/box';
// // // import Card from '@/components/ui/card';
// // // import Typography from '@/components/ui/typography';

// // const StackingCards = () => {
// //   const [scrollY, setScrollY] = useState(0);
  
// //   const cards = [
// //     { title: 'Card 1', color: 'blue' },
// //     { title: 'Card 2', color: 'green' },
// //     { title: 'Card 3', color: 'red' },
// //     { title: 'Card 4', color: 'purple' },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrollY(window.scrollY);
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const getCardStyle = (index:number) => {
// //     const triggerPoint = index * 500; // Point at which card should appear
// //     const isVisible = scrollY >= triggerPoint;
    
// //     return {
// //       position: 'absolute',
// //       width: 256,
// //       height: 384,
// //       transform: isVisible 
// //         ? `translateY(${index * 20}px) scale(${1 - (index * 0.05)})` 
// //         : 'translateY(100vh)',
// //       opacity: isVisible ? 1 : 0,
// //       transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
// //       zIndex: index,
// //       backgroundColor: cards[index].color,
// //     };
// //   };

// //   return (
// //     <Box 
// //       sx={{ 
// //         position: 'relative', 
// //         width: '100%', 
// //         height: `${cards.length * 500}px` ,
// //         border:'1px solid red',
// //       }}
// //     >
// //       <Box 
// //         sx={{ 
// //           position: 'sticky', 
// //           top: 0, 
// //           height: '100vh', 
// //           width: '100%', 
// //           display: 'flex', 
// //           alignItems: 'center', 
// //           justifyContent: 'center' 
// //         }}
// //       >
// //         {cards.map((card, index) => (
// //           <Card
// //             key={index}
// //             sx={{
// //               ...getCardStyle(index),
// //               borderRadius: 2,
// //               boxShadow: 3,
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //             }}
// //           >
// //             <Typography 
// //               sx={{ 
// //                 color: 'white', 
// //                 fontSize: '1.5rem', 
// //                 fontWeight: 'bold' 
// //               }}
// //             >
// //               {card.title}
// //             </Typography>
// //           </Card>
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default StackingCards;

// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// const CardStack = () => {
//   const cards = [
//     { title: 'Card 1', img: 'https://via.placeholder.com/300' },
//     { title: 'Card 2', img: 'https://via.placeholder.com/300' },
//     { title: 'Card 3', img: 'https://via.placeholder.com/300' },
//     { title: 'Card 4', img: 'https://via.placeholder.com/300' },
//   ];

//   const scrollProps = useSpring({
//     transform: `translateY(${window.scrollY * 0.5}px)`,
//     opacity: window.scrollY < 300 ? 1 : 0,
//   });

//   return (
//     <div style={{ overflowY: 'scroll', height: '100vh' }}>
//       <div style={{ height: '200vh' }} />
//       <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
//         {cards.map((card, index) => (
//           <animated.div
//             key={index}
//             style={{
//               position: 'absolute',
//               top: `${index * 10}px`,
//               width: '300px',
//               height: '400px',
//               backgroundColor: 'white !important',
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//               borderRadius: '8px',
//               ...scrollProps,
//               zIndex: cards.length - index,
//             }}
//           >
//             <img
//               src={card.img}
//               alt={card.title}
//               style={{ width: '100%', height: '100%', borderRadius: '8px' }}
//             />
//             <h2>{card.title}</h2>
//           </animated.div>
//         ))}
//       </div>
//       <div style={{ height: '200vh' }} />
//     </div>
//   );
// };

// export default CardStack;
