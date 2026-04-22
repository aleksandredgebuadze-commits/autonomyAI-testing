export type Severity = 'Critical' | 'Major' | 'Minor' | 'Cosmetic';

export interface Bug {
  id: number;
  title: string;
  severity: Severity;
  stepsToReproduce: string[];
  expectedBehavior: string;
  actualBehavior: string;
  notes?: string;
  screenshot?: string;
}