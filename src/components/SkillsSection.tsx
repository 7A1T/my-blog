import React from "react";
import { SkillsSectionProps } from "@/types/SkillSection";

function SkillsSection({Skills, Tools}: SkillsSectionProps) {
	
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 style={{ color: "var(--color-primary-dark)" }} className="text-3xl font-bold mb-10 text-center">
          Skills & Technologies
        </h2>
        <div style={{ backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-lg)", boxShadow: `0 4px 6px var(--shadow-color)` }} className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {Skills.map((skillSet) => (
              <div key={skillSet.category}>
                <h3 style={{ color: "var(--color-secondary)" }} className="text-xl font-semibold mb-4">
                  {skillSet.category}
                </h3>
                <div className="space-y-4">
                  {skillSet.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span style={{ color: "var(--color-text)" }}>{skill.name}</span>
                        <span style={{ color: "var(--color-text-muted)" }}>{skill.level}</span>
                      </div>
                      <div style={{ backgroundColor: "var(--color-neutral)", borderRadius: "var(--radius-sm)" }} className="h-2 w-full">
                        <div style={{ width: skill.level, backgroundColor: skillSet.color, borderRadius: "var(--radius-sm)" }} className="h-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 style={{ color: "var(--color-secondary)" }} className="text-xl font-semibold mb-4">
              Tools & Other Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {Tools.map((tool) => (
                <span key={tool} style={{ backgroundColor: "var(--color-neutral)", color: "var(--color-text)", borderRadius: "var(--radius-md)" }} className="px-4 py-2">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
