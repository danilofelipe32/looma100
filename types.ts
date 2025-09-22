
import React from 'react';

export interface ComponentInfo {
  name: string;
  description: string;
  usage: string;
  component: React.ReactNode;
  code: string;
}

export interface ComponentCategory {
  title: string;
  icon: string;
  description: string;
  components: ComponentInfo[];
}
