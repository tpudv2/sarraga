'use client';

import { useId, useState } from 'react';
import type { FaqItem } from '@/types';
import styles from './Accordion.module.css';

interface AccordionProps {
  items: FaqItem[];
  /** id del item abierto por defecto. */
  defaultOpenId?: string;
}

/** Acordeón accesible para las preguntas frecuentes. */
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const baseId = useId();

  return (
    <div className={styles.root}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span aria-hidden className={styles.icon}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!isOpen} className={styles.panel}>
              <p dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
