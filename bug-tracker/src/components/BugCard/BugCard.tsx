import { useState } from 'react';
import type { Bug } from '../../types/bug';
import styles from './BugCard.module.css';

interface Props {
  bug: Bug;
}

const severityColors: Record<string, string> = {
  Critical: '#dc2626',
  Major: '#ea580c',
  Minor: '#ca8a04',
  Cosmetic: '#718096',
};

export function BugCard({ bug }: Props) {
  const [expanded, setExpanded] = useState(false);
  const color = severityColors[bug.severity] ?? '#718096';

  return (
    <div className={styles.card}>
      <button
        className={styles.header}
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        <div className={styles.titleRow}>
          <span className={styles.bugId}>Bug #{bug.id}</span>
          <span
            className={styles.severity}
            style={{ backgroundColor: color }}
          >
            {bug.severity}
          </span>
        </div>
        <p className={styles.title}>{bug.title}</p>
        <span className={styles.toggle}>{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div className={styles.body}>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Steps to Reproduce</h4>
            <ol className={styles.list}>
              {bug.stepsToReproduce.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Expected Behavior</h4>
            <p className={styles.text}>{bug.expectedBehavior}</p>
          </section>

          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Actual Behavior</h4>
            <p className={styles.text}>{bug.actualBehavior}</p>
          </section>

          {bug.notes && (
            <section className={styles.section}>
              <h4 className={styles.sectionTitle}>Notes</h4>
              <p className={styles.text}>{bug.notes}</p>
            </section>
          )}

           {bug.screenshot && (
             <section className={styles.section}>
               <h4 className={styles.sectionTitle}>Screenshot</h4>
               <img
                 className={styles.screenshot}
                 src={`/bugImg/${bug.screenshot}`}
                 alt={`Screenshot for Bug #${bug.id}`}
               />
             </section>
           )}
        </div>
      )}
    </div>
  );
}