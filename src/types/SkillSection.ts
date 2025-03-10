export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
  color: string;
}

export type ToolsArray = string[];

export interface SkillsSectionProps {
  Skills: SkillCategory[];
  Tools: ToolsArray;
}
