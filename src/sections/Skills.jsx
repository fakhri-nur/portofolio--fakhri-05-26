import { Code, Database, Server, GitBranch } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "React", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "MySQL", icon: Database },
    { name: "Git", icon: GitBranch },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-xl shadow hover:scale-105 transition"
            >
              <Icon className="w-8 h-8 mb-2" />
              <span>{s.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}