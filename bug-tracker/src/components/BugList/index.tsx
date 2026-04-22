import { useState } from 'react';
import type { Bug, Severity } from '../../types/bug';
import { BugCard } from '../BugCard';
import { FilterBar } from '../FilterBar';
import styles from './BugList.module.css';

interface Props {
  bugs: Bug[];
}

export function BugList({ bugs }: Props) {
  const [search, setSearch] = useState('');
  const [selectedSeverities, setSelectedSeverities] = useState<Severity[]>([]);

  const query = search.toLowerCase().trim();

  const filtered = bugs.filter((bug) => {
    const matchesSeverity =
      selectedSeverities.length === 0 || selectedSeverities.includes(bug.severity);
    const matchesSearch =
      query === '' || bug.title.toLowerCase().includes(query);
    return matchesSeverity && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Bug Tracker</h1>
        <p className={styles.subtitle}>
          {bugs.length} bug{bugs.length !== 1 ? 's' : ''} documented
        </p>
      </header>

      <div className={styles.filters}>
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          selectedSeverities={selectedSeverities}
          onToggleSeverity={(sev) =>
            setSelectedSeverities((prev) =>
              prev.includes(sev)
                ? prev.filter((s) => s !== sev)
                : [...prev, sev]
            )
          }
        />
      </div>

      <div className={styles.list}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No bugs match the current filters.</p>
          </div>
        ) : (
          <>
            <p className={styles.count}>
              Showing {filtered.length} of {bugs.length} bug{bugs.length !== 1 ? 's' : ''}
            </p>
            <div className={styles.cards}>
              {filtered.map((bug) => (
                <BugCard key={bug.id} bug={bug} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}