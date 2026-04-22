import type { Severity } from '../../types/bug';
import styles from './FilterBar.module.css';

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  selectedSeverities: Severity[];
  onToggleSeverity: (severity: Severity) => void;
}

const severities: Severity[] = ['Critical', 'Major', 'Minor', 'Cosmetic'];

const severityColors: Record<Severity, string> = {
  Critical: '#dc2626',
  Major: '#ea580c',
  Minor: '#ca8a04',
  Cosmetic: '#718096',
};

export function FilterBar({
  search,
  onSearchChange,
  selectedSeverities,
  onToggleSeverity,
}: Props) {
  return (
    <div className={styles.bar}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search bugs..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className={styles.filters}>
        {severities.map((sev) => {
          const active = selectedSeverities.includes(sev);
          return (
            <button
              key={sev}
              className={`${styles.chip} ${active ? styles.active : ''}`}
              style={active ? { backgroundColor: severityColors[sev] } : undefined}
              onClick={() => onToggleSeverity(sev)}
            >
              {sev}
            </button>
          );
        })}
      </div>
    </div>
  );
}