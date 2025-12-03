import type { Schema, Struct } from '@strapi/strapi';

export interface HighlightsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_highlights_highlights';
  info: {
    displayName: 'highlights';
  };
  attributes: {
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SkilsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skils_skills';
  info: {
    displayName: 'Skills';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SkilsTechSkills extends Struct.ComponentSchema {
  collectionName: 'components_skils_tech_skills';
  info: {
    displayName: 'TechSkills';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'highlights.highlights': HighlightsHighlights;
      'skils.skills': SkilsSkills;
      'skils.tech-skills': SkilsTechSkills;
    }
  }
}
