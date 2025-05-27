// "use client";

// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Calendar, MapPin, CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";
// import { experiences, education } from "@/lib/data";
// import type { ExperienceItem } from "@/lib/types";

// export default function ExperienceSection() {
//   const allItems = [...experiences, ...education].sort((a, b) => {
//     // Sort by start year (most recent first)
//     const yearA = Number.parseInt(a.period.split(" - ")[0] || a.period);
//     const yearB = Number.parseInt(b.period.split(" - ")[0] || b.period);
//     return yearB - yearA;
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const timelineVariants = {
//     hidden: { height: 0 },
//     visible: {
//       height: "100%",
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//             Experience & Education
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My professional journey and educational background that shaped my
//             expertise
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 h-full">
//             <motion.div
//               variants={timelineVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="w-full bg-gradient-to-b from-blue-600 to-purple-600 origin-top"
//             />
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-12"
//           >
//             {allItems.map((item: ExperienceItem, index: number) => {
//               const IconComponent = item.icon;
//               const isLeft = index % 2 === 0;

//               return (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className={`relative flex items-center ${
//                     isLeft ? "md:flex-row" : "md:flex-row-reverse"
//                   } flex-col md:flex-row`}
//                 >
//                   {/* Timeline Dot */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5, duration: 0.3 }}
//                     className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 ${
//                       isLeft ? "md:translate-x-[-50%]" : "md:translate-x-[-50%]"
//                     } w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 z-10`}
//                   />

//                   {/* Content Card */}
//                   <div
//                     className={`w-full md:w-5/12 ml-16 md:ml-0 ${
//                       isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
//                     }`}
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.02, y: -5 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Card
//                         className={`bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${
//                           item.type === "work"
//                             ? "border-l-4 border-l-blue-600"
//                             : "border-l-4 border-l-purple-600"
//                         }`}
//                       >
//                         <CardHeader>
//                           <div className="flex items-start justify-between">
//                             <div className="flex items-center space-x-3">
//                               <motion.div
//                                 whileHover={{ rotate: 360 }}
//                                 transition={{ duration: 0.5 }}
//                                 className={`p-2 rounded-lg ${
//                                   item.type === "work"
//                                     ? "bg-blue-600/20 text-blue-600 dark:text-blue-400"
//                                     : "bg-purple-600/20 text-purple-600 dark:text-purple-400"
//                                 }`}
//                               >
//                                 <IconComponent className="h-6 w-6" />
//                               </motion.div>
//                               <div>
//                                 <CardTitle className="text-gray-900 dark:text-white text-lg">
//                                   {item.title}
//                                 </CardTitle>
//                                 <CardDescription className="text-gray-600 dark:text-gray-400 font-medium">
//                                   {item.company}
//                                 </CardDescription>
//                               </div>
//                             </div>
//                             <Badge
//                               variant="secondary"
//                               className={`${
//                                 item.type === "work"
//                                   ? "bg-blue-600/20 text-blue-600 dark:text-blue-400"
//                                   : "bg-purple-600/20 text-purple-600 dark:text-purple-400"
//                               }`}
//                             >
//                               {item.type === "work" ? "Work" : "Education"}
//                             </Badge>
//                           </div>

//                           <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
//                             <div className="flex items-center">
//                               <Calendar className="h-4 w-4 mr-1" />
//                               {item.period}
//                             </div>
//                             <div className="flex items-center">
//                               <MapPin className="h-4 w-4 mr-1" />
//                               {item.location}
//                             </div>
//                           </div>
//                         </CardHeader>

//                         <CardContent className="space-y-4">
//                           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                             {item.description}
//                           </p>

//                           {/* Achievements */}
//                           <div>
//                             <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
//                               Key Achievements:
//                             </h4>
//                             <ul className="space-y-2">
//                               {item.achievements.map(
//                                 (achievement, achievementIndex) => (
//                                   <motion.li
//                                     key={achievementIndex}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{
//                                       delay: achievementIndex * 0.1,
//                                     }}
//                                     className="flex items-start text-gray-700 dark:text-gray-300"
//                                   >
//                                     <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
//                                     <span className="text-sm">
//                                       {achievement}
//                                     </span>
//                                   </motion.li>
//                                 )
//                               )}
//                             </ul>
//                           </div>

//                           {/* Technologies */}
//                           <div>
//                             <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
//                               Technologies Used:
//                             </h4>
//                             <div className="flex flex-wrap gap-2">
//                               {item.technologies.map((tech, techIndex) => (
//                                 <motion.div
//                                   key={techIndex}
//                                   initial={{ opacity: 0, scale: 0.8 }}
//                                   whileInView={{ opacity: 1, scale: 1 }}
//                                   viewport={{ once: true }}
//                                   transition={{ delay: techIndex * 0.05 }}
//                                   whileHover={{ scale: 1.05 }}
//                                 >
//                                   <Badge
//                                     variant="outline"
//                                     className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
//                                   >
//                                     {tech}
//                                   </Badge>
//                                 </motion.div>
//                               ))}
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Summary Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {[
//             { label: "Years Experience", value: "5+" },
//             { label: "Companies", value: "3" },
//             { label: "Certifications", value: "2" },
//             { label: "Education", value: "BS CS" },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
//             >
//               <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
