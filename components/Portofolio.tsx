import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import datas from "../pages/api/project.json";
import { ProjectCard } from "./ProjectCard";

export default function Portofolio() {
  const data = [
    {
      label: "App 📱",
      value: "App 📱",
    },
    {
      label: "Web 💙",
      value: "Web 💙",
    },
    {
      label: "Design 🌼",
      value: "Design 🌼",
    },
  ];

  return (
    <section id="Portofolio" className="section">
      <div className="container mx-auto px-6 my-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Portofolio
        </h2>
        <p className="text-center mb-8">
          A history of making a Web that I made while studying, which was made
          personally or with a teams
        </p>
        <Tabs value="Web 💙">
          <div className="w-full md:w-96 mx-auto">
            <TabsHeader className="nav-pills shadow-sm shadow-blue-gray-300">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="text-blue-900 dark:text-bgBlueLight"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <TabsBody
            animate={{
              mount: { x: 0 },
              unmount: { x: 250 },
            }}
            defaultValue={data[0].value}
          >
            <div className="w-full md:px-10 mx-auto">
              <TabPanel
                value="App 📱"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {datas.app.map((data, i) => (
                  <ProjectCard key={i} data={data} />
                ))}
              </TabPanel>
              <TabPanel
                value="Web 💙"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {datas.web.map((data, i) => (
                  <ProjectCard key={i} data={data} />
                ))}
              </TabPanel>
              <TabPanel
                value="Design 🌼"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {datas.design.map((data, i) => (
                  <ProjectCard key={i} data={data} />
                ))}
              </TabPanel>
            </div>
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}
