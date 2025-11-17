
import type React from 'react';

export interface MissionVisionItem {
  title: string;
  text: React.ReactNode;
  bgColor: string;
  textColor: string;
}

export interface StrategicFocus {
  focus: string;
  actions: string;
  kpis: string;
}

export interface Pillar {
  id: number;
  title: string;
  goal: string;
  strategicFocusAreas: StrategicFocus[];
}
